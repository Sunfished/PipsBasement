export const Items: {[itemid: string]: ModdedItemData} = {
	altarianite: {
		name: "Altarianite",
		spritenum: 615,
		megaStone: "Muktaria-Alola-Mega",
		megaEvolves: "Muktaria-Alola",
		itemUser: ["Muktaria-Alola"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 755,
		desc: "If held by a Muktaria-Alola, this item allows it to Mega Evolve in battle.",
	},
	metagrossite: {
		name: "Metagrossite",
		spritenum: 618,
		megaStone: "Iron Meta-Mega",
		megaEvolves: "Iron Meta",
		itemUser: ["Iron Meta"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 758,
		desc: "If held by an Iron Meta, this item allows it to Mega Evolve in battle.",
	},
	boosterenergy: {
		name: "Booster Energy",
		spritenum: 0, // TODO
		onUpdate(pokemon) {
			if (pokemon.transformed) return;
			if (this.queue.peek(true)?.choice === 'runSwitch') return;

			if (!this.field.isWeather('sunnyday')) {
				if (pokemon.hasAbility('protosynthesis') && !pokemon.volatiles['protosynthesis'] /* && !this.field.isWeather('sunnyday') */ && pokemon.useItem()) {
					pokemon.addVolatile('protosynthesis');
				}
				else if (pokemon.hasAbility('openingact') && !pokemon.volatiles['openingact'] && pokemon.useItem()) {
					pokemon.addVolatile('openingact');
				}
				else if (pokemon.hasAbility('onceuponatime') && !pokemon.volatiles['onceuponatime'] && pokemon.useItem()) {
					pokemon.addVolatile('onceuponatime');
				}
				else if (pokemon.hasAbility('primitive') && !pokemon.volatiles['primitive'] && pokemon.useItem()) {
					pokemon.addVolatile('primitive');
				}
			}
			if (!this.field.isTerrain('electricterrain')) {
				if (pokemon.hasAbility('quarkdrive') && !pokemon.volatiles['quarkdrive'] && pokemon.useItem()) {
					pokemon.addVolatile('quarkdrive');
				}
				else if (pokemon.hasAbility('lightdrive') && !pokemon.volatiles['lightdrive'] && pokemon.useItem()) {
					pokemon.addVolatile('lightdrive');
				}
				else if (pokemon.hasAbility('quarksurge') && !pokemon.volatiles['quarksurge'] && pokemon.useItem()) {
					pokemon.addVolatile('quarksurge');
				}
			}
			if (pokemon.hasAbility('systempurge') && !pokemon.volatiles['systempurge'] && pokemon.useItem()) {
				pokemon.addVolatile('systempurge');
			}
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.tags.includes("Paradox")) return false;
			return true;
		},
		num: 1880,
		gen: 9,
	},
	absolite: {
		name: "Absolite",
		spritenum: 576,
		megaStone: "Sol Valiant-Mega",
		megaEvolves: "Sol Valiant",
		itemUser: ["Sol Valiant"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 677,
		desc: "If held by a Sol Valiant, this item allows it to Mega Evolve in battle.",
	},
	garchompite: {
		name: "Garchompite",
		spritenum: 589,
		megaStone: "Garpyuku-Mega",
		megaEvolves: "Garpyuku",
		itemUser: ["Garpyuku"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 683,
		desc: "If held by a Garpyuku, this item allows it to Mega Evolve in battle.",
	},
};
