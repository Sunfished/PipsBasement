'use strict';
exports.BattleScripts = {
	moveHit(target, pokemon, moveOrMoveName, moveData, isSecondary, isSelf) {
		let damage;
		let move = this.getActiveMove(moveOrMoveName);

		if (!moveData) moveData = move;
		if (!moveData.flags) moveData.flags = {};
		/**@type {?boolean | number} */
		let hitResult = true;

		// TryHit events:
		//   STEP 1: we see if the move will succeed at all:
		//   - TryHit, TryHitSide, or TryHitField are run on the move,
		//     depending on move target (these events happen in useMove
		//     or tryMoveHit, not below)
		//   == primary hit line ==
		//   Everything after this only happens on the primary hit (not on
		//   secondary or self-hits)
		//   STEP 2: we see if anything blocks the move from hitting:
		//   - TryFieldHit is run on the target
		//   STEP 3: we see if anything blocks the move from hitting the target:
		//   - If the move's target is a pokemon, TryHit is run on that pokemon

		// Note:
		//   If the move target is `foeSide`:
		//     event target = pokemon 0 on the target side
		//   If the move target is `allySide` or `all`:
		//     event target = the move user
		//
		//   This is because events can't accept actual sides or fields as
		//   targets. Choosing these event targets ensures that the correct
		//   side or field is hit.
		//
		//   It is the `TryHitField` event handler's responsibility to never
		//   use `target`.
		//   It is the `TryFieldHit` event handler's responsibility to read
		//   move.target and react accordingly.
		//   An exception is `TryHitSide` as a single event (but not as a normal
		//   event), which is passed the target side.

		if (move.target === 'all' && !isSelf) {
			hitResult = this.singleEvent('TryHitField', moveData, {}, target, pokemon, move);
		} else if ((move.target === 'foeSide' || move.target === 'allySide') && !isSelf) {
			hitResult = this.singleEvent('TryHitSide', moveData, {}, (target ? target.side : null), pokemon, move);
		} else if (target) {
			hitResult = this.singleEvent('TryHit', moveData, {}, target, pokemon, move);
		}
		if (!hitResult) {
			if (hitResult === false) {
				this.add('-fail', pokemon);
				this.attrLastMove('[still]');
			}
			return false;
		}

		if (target && !isSecondary && !isSelf) {
			if (move.target !== 'all' && move.target !== 'allySide' && move.target !== 'foeSide') {
				hitResult = this.runEvent('TryPrimaryHit', target, pokemon, moveData);
				if (hitResult === 0) {
					// special Substitute flag
					hitResult = true;
					target = null;
				}
			}
		}
		if (target && isSecondary && !moveData.self) {
			hitResult = true;
		}
		if (!hitResult) {
			return false;
		}

		if (target) {
			/**@type {?boolean | number | undefined} */
			let didSomething = undefined;

			damage = this.getDamage(pokemon, target, moveData);

			// getDamage has several possible return values:
			//
			//   a number:
			//     means that much damage is dealt (0 damage still counts as dealing
			//     damage for the purposes of things like Static)
			//   false:
			//     gives error message: "But it failed!" and move ends
			//   null:
			//     the move ends, with no message (usually, a custom fail message
			//     was already output by an event handler)
			//   undefined:
			//     means no damage is dealt and the move continues
			//
			// basically, these values have the same meanings as they do for event
			// handlers.

			if (damage === false || damage === null) {
				if (damage === false && !isSecondary && !isSelf) {
					this.add('-fail', pokemon);
					this.attrLastMove('[still]');
				}
				this.debug('damage calculation interrupted');
				return false;
			}
			if (move.selfdestruct === 'ifHit') {
				this.faint(pokemon, pokemon, move);
			}
			if ((damage || damage === 0) && !target.fainted) {
				if (move.noFaint && damage >= target.hp) {
					damage = target.hp - 1;
				}
				damage = this.damage(damage, target, pokemon, move);
				if (!(damage || damage === 0)) {
					this.debug('damage interrupted');
					return false;
				}
				didSomething = true;
			}

			if (moveData.boosts && !target.fainted) {
				hitResult = this.boost(moveData.boosts, target, pokemon, move, isSecondary, isSelf);
				didSomething = didSomething || hitResult;
			}
			if (moveData.heal && !target.fainted) {
				let d = target.heal((this.gen < 5 ? Math.floor : Math.round)(target.maxhp * moveData.heal[0] / moveData.heal[1]));
				if (!d && d !== 0) {
					this.add('-fail', pokemon);
					this.attrLastMove('[still]');
					this.debug('heal interrupted');
					return false;
				}
				this.add('-heal', target, target.getHealth);
				didSomething = true;
			}
			if (moveData.status) {
				hitResult = target.trySetStatus(moveData.status, pokemon, moveData.ability ? moveData.ability : move);
				if (!hitResult && move.status) return hitResult;
				didSomething = didSomething || hitResult;
			}
			if (moveData.forceStatus) {
				hitResult = target.setStatus(moveData.forceStatus, pokemon, move);
				didSomething = didSomething || hitResult;
			}
			if (moveData.volatileStatus) {
				hitResult = target.addVolatile(moveData.volatileStatus, pokemon, move);
				didSomething = didSomething || hitResult;
			}
			if (moveData.sideCondition) {
				hitResult = target.side.addSideCondition(moveData.sideCondition, pokemon, move);
				didSomething = didSomething || hitResult;
			}
			if (moveData.weather) {
				hitResult = this.field.setWeather(moveData.weather, pokemon, move);
				didSomething = didSomething || hitResult;
			}
			if (moveData.terrain) {
				hitResult = this.field.setTerrain(moveData.terrain, pokemon, move);
				didSomething = didSomething || hitResult;
			}
			if (moveData.pseudoWeather) {
				hitResult = this.field.addPseudoWeather(moveData.pseudoWeather, pokemon, move);
				didSomething = didSomething || hitResult;
			}
			if (moveData.forceSwitch) {
				hitResult = this.canSwitch(target.side);
				didSomething = didSomething || hitResult;
			}
			if (moveData.selfSwitch) {
				// If the move is Parting Shot and it fails to change the target's stats in gen 7, didSomething will be null instead of undefined.
				// Leaving didSomething as null will cause this function to return before setting the switch flag, preventing the switch.
				if (this.canSwitch(pokemon.side) && (didSomething !== null || this.gen < 7)) {
					didSomething = true;
				} else {
					didSomething = didSomething || false;
				}
			}
			// Hit events
			//   These are like the TryHit events, except we don't need a FieldHit event.
			//   Scroll up for the TryHit event documentation, and just ignore the "Try" part. ;)
			if (move.target === 'all' && !isSelf) {
				if (moveData.onHitField) {
					hitResult = this.singleEvent('HitField', moveData, {}, target, pokemon, move);
					didSomething = didSomething || hitResult;
				}
			} else if ((move.target === 'foeSide' || move.target === 'allySide') && !isSelf) {
				if (moveData.onHitSide) {
					hitResult = this.singleEvent('HitSide', moveData, {}, target.side, pokemon, move);
					didSomething = didSomething || hitResult;
				}
			} else {
				if (moveData.onHit) {
					hitResult = this.singleEvent('Hit', moveData, {}, target, pokemon, move);
					didSomething = didSomething || hitResult;
				}
				if (!isSelf && !isSecondary) {
					this.runEvent('Hit', target, pokemon, move);
				}
				if (moveData.onAfterHit) {
					hitResult = this.singleEvent('AfterHit', moveData, {}, target, pokemon, move);
					didSomething = didSomething || hitResult;
				}
			}

			// Move didn't fail because it didn't try to do anything
			if (didSomething === undefined) didSomething = true;

			if (!didSomething && !moveData.self && !moveData.selfdestruct) {
				if (!isSelf && !isSecondary) {
					if (didSomething === false) {
						this.add('-fail', pokemon);
						this.attrLastMove('[still]');
					}
				}
				this.debug('move failed because it did nothing');
				return false;
			}
		}
		if (moveData.self && !move.selfDropped) {
			let selfRoll = 0;
			if (!isSecondary && moveData.self.boosts) {
				selfRoll = this.random(100);
				if (!move.multihit) move.selfDropped = true;
			}
			// This is done solely to mimic in-game RNG behaviour. All self drops have a 100% chance of happening but still grab a random number.
			if (moveData.self.chance === undefined || selfRoll < moveData.self.chance) {
				this.moveHit(pokemon, pokemon, move, moveData.self, isSecondary, true);
			}
		}
		if (moveData.secondaries) {
			/** @type {SecondaryEffect[]} */
			let secondaries = this.runEvent('ModifySecondaries', target, pokemon, moveData, moveData.secondaries.slice());
			for (const secondary of secondaries) {
				let secondaryRoll = this.random(100);
				if (typeof secondary.chance === 'undefined' || secondaryRoll < secondary.chance) {
					this.moveHit(target, pokemon, move, secondary, true, isSelf);
				}
			}
		}
		// Hot Potato here
		if (pokemon !== target && !moveData.isFutureMove && damage && target.hp) {
			// side conditions
			let passableConditions = ['stealthrock', 'stickyweb', 'spikes', 'toxicspikes'];
			if (Object.keys(pokemon.side.sideConditions).length > 0) {
				for (let i in pokemon.side.sideConditions) {
					if (!passableConditions.includes(i)) continue;
					let condition = pokemon.side.sideConditions[i];
					target.side.addSideCondition(condition.id);
					if (pokemon.side.sideConditions.layers) target.side.sideConditions.layers = pokemon.side.sideConditions.layers;
					pokemon.side.removeSideCondition(condition.id);
					this.add('-sideend', pokemon.side, this.getEffect(condition.id).name, '[silent]');
				}
			}
			//status
			if (pokemon.status) {
				let status = pokemon.status, statusData = Object.assign({}, pokemon.statusData);
				pokemon.cureStatus('');
				target.trySetStatus(status);
				target.statusData = statusData;
				target.statusData.target = target;
			}

			//boosts
			let boosts = {};
			for (let i in pokemon.boosts) {
				if (pokemon.boosts[i] < 0) {
					boosts[i] = pokemon.boosts[i];
					pokemon.boosts[i] = 0;
				}
			}
			if (Object.keys(boosts).length) {
		        this.add('-clearnegativeboost', pokemon);
				this.boost(boosts, target, pokemon);
			}

			// attract
			if (pokemon.volatiles.attract) {
				target.volatiles.attract = {
					id: 'attract',
					source: pokemon,
					target: target,
					sourcePosition: 0,
					sourceEffect: pokemon.volatiles.attract.sourceEffect
				};
				pokemon.removeVolatile('attract');
			}

			//mean look n stuff
			if (pokemon.volatiles.trapped) {
				target.addVolatile('trapped', pokemon, pokemon.volatiles.trapped.sourceMove, 'trapper');
				pokemon.removeVolatile('trapped')
			}

			//magma storm, infestation, etc
			if (pokemon.volatiles.partiallytrapped) {
				target.addVolatile('trapped', pokemon, pokemon.volatiles.partiallytrapped.sourceMove, 'trapper');
				pokemon.removeVolatile('partiallytrapped')
			}

			//perish song. exists here because metronome
			if (pokemon.volatiles.perishsong) {
				target.volatiles.perishsong = Object.assign({}, pokemon.volatiles.perishsong);
				target.volatiles.perishsong.target = target;
				pokemon.removeVolatile('perishsong');
				this.add('-start', pokemon, `perish${target.volatiles.perishsong.duration}`, '[silent]');
			}

			// other passable volatiles
			let passableVolatiles = ['confusion', 'curse', 'disable', 'embargo', 'encore', 'foresight', 'healblock', 'imprison', 'leechseed', 'miracleeye', 'nightmare', 'taunt', 'telekinesis', 'torment'];
			for (let i in pokemon.volatiles) {
				if (passableVolatiles.includes(i)) {
					let duration = pokemon.volatiles[i].duration;
					pokemon.removeVolatile(i);
					target.addVolatile(i);
					if (duration) target.volatiles[i].duration = duration;
				}
			}
		}
		if (target && target.hp > 0 && pokemon.hp > 0 && moveData.forceSwitch && this.canSwitch(target.side)) {
			hitResult = this.runEvent('DragOut', target, pokemon, move);
			if (hitResult) {
				target.forceSwitchFlag = true;
			} else if (hitResult === false && move.category === 'Status') {
				this.add('-fail', pokemon);
				this.attrLastMove('[still]');
				return false;
			}
		}
		if (move.selfSwitch && pokemon.hp) {
			pokemon.switchFlag = move.fullname;
		}
		return damage;
	},
};
