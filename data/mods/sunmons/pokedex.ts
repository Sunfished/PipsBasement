export const Pokedex: {[k: string]: ModdedSpeciesData} = {

	hedgeko: {
		num: 1,
		name: "Hedgeko",
		types: ["Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 42, atk: 62, def: 56, spa: 40, spd: 46, spe: 69},
		abilities: {0: "Overgrow", H: "Justified"},
		heightm: 0.3,
		weightkg: 5.9,
		color: "Green",
		
		evos: ["Florecko"],
		eggGroups: ["Monster"],
		
		
		
		
		
		
	},

	florecko: {
		num: 2,
		name: "Florecko",
		types: ["Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 60, atk: 72, def: 68, spa: 57, spd: 58, spe: 90},
		abilities: {0: "Overgrow", H: "Justified"},
		heightm: 0.8,
		weightkg: 20.5,
		color: "Green",
		prevo: "Hedgeko",
		evos: ["Sentecko"],
		eggGroups: ["Monster"],
		
		
		
		
		
		
	},

	sentecko: {
		num: 3,
		name: "Sentecko",
		types: ["Grass","Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 116, def: 78, spa: 81, spd: 70, spe: 110},
		abilities: {0: "Overgrow", H: "Justified"},
		heightm: 1.4,
		weightkg: 58.9,
		color: "Green",
		prevo: "Florecko",
		
		eggGroups: ["Monster"],
		
		
		
		
		
		
	},

	scorchog: {
		num: 4,
		name: "Scorchog",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 50, atk: 52, def: 75, spa: 52, spd: 50, spe: 30},
		abilities: {0: "Blaze", H: "Battle Armor"},
		heightm: 0.4,
		weightkg: 7.8,
		color: "Red",
		
		evos: ["Bombardillo"],
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	bombardillo: {
		num: 5,
		name: "Bombardillo",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 73, atk: 75, def: 90, spa: 60, spd: 62, spe: 45},
		abilities: {0: "Blaze", H: "Battle Armor"},
		heightm: 0.9,
		weightkg: 32.6,
		color: "Brown",
		prevo: "Scorchog",
		evos: ["Kabangolin"],
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	kabangolin: {
		num: 6,
		name: "Kabangolin",
		types: ["Fire","Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 93, atk: 105, def: 109, spa: 73, spd: 95, spe: 60},
		abilities: {0: "Blaze", H: "Battle Armor"},
		heightm: 2.2,
		weightkg: 172.6,
		color: "Black",
		prevo: "Bombardillo",
		
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	fisker: {
		num: 7,
		name: "Fisker",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 46, atk: 58, def: 40, spa: 58, spd: 45, spe: 59},
		abilities: {0: "Torrent", H: "Magic Guard"},
		heightm: 0.3,
		weightkg: 6.2,
		color: "Blue",
		
		evos: ["Catfisk"],
		eggGroups: ["Water 1"],
		
		
		
		
		
		
	},

	catfisk: {
		num: 8,
		name: "Catfisk",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 68, atk: 65, def: 65, spa: 72, spd: 75, spe: 60},
		abilities: {0: "Torrent", H: "Magic Guard"},
		heightm: 0.8,
		weightkg: 26.8,
		color: "Blue",
		prevo: "Fisker",
		evos: ["Nekimono"],
		eggGroups: ["Water 1"],
		
		
		
		
		
		
	},

	nekimono: {
		num: 9,
		name: "Nekimono",
		types: ["Water","Psychic"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 83, atk: 75, def: 86, spa: 107, spd: 104, spe: 80},
		abilities: {0: "Torrent", H: "Magic Guard"},
		heightm: 1.5,
		weightkg: 61.2,
		color: "Blue",
		prevo: "Catfisk",
		
		eggGroups: ["Water 1"],
		
		
		
		
		
		
	},

	elfae: {
		num: 10,
		name: "Elfae",
		types: ["Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 45, def: 60, spa: 58, spd: 113, spe: 93},
		abilities: {0: "Honey Gather", 1: "Sap Sipper", H: "Prankster"},
		heightm: 0.1,
		weightkg: 0.5,
		color: "White",
		
		
		eggGroups: ["Fairy"],
		
		baseForme: "Watermelon",
		
		otherFormes: ["Elfae-Cherry","Elfae-Caramel","Elfae-Lemon","Elfae-Mint","Elfae-Blueberry","Elfae-Grape","Elfae-Cotton Candy","Elfae-Licorice"],
		formeOrder: ["Elfae","Elfae-Cherry","Elfae-Caramel","Elfae-Lemon","Elfae-Mint","Elfae-Blueberry","Elfae-Grape","Elfae-Cotton Candy","Elfae-Licorice"],
		
	},

	elfaecherry: {
		num: 10,
		name: "Elfae-Cherry",
		types: ["Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 45, def: 60, spa: 58, spd: 113, spe: 93},
		abilities: {0: "Honey Gather", 1: "Flash Fire", H: "Prankster"},
		heightm: 0.1,
		weightkg: 0.5,
		color: "White",
		
		
		eggGroups: ["Fairy"],
		baseSpecies: "Elfae",
		
		forme: "Cherry",
		
		
		
	},

	elfaecaramel: {
		num: 10,
		name: "Elfae-Caramel",
		types: ["Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 45, def: 60, spa: 58, spd: 113, spe: 93},
		abilities: {0: "Honey Gather", 1: "Gooey", H: "Prankster"},
		heightm: 0.1,
		weightkg: 0.5,
		color: "White",
		
		
		eggGroups: ["Fairy"],
		baseSpecies: "Elfae",
		
		forme: "Caramel",
		
		
		
	},

	elfaelemon: {
		num: 10,
		name: "Elfae-Lemon",
		types: ["Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 45, def: 60, spa: 58, spd: 113, spe: 93},
		abilities: {0: "Honey Gather", 1: "Lightning Rod", H: "Prankster"},
		heightm: 0.1,
		weightkg: 0.5,
		color: "White",
		
		
		eggGroups: ["Fairy"],
		baseSpecies: "Elfae",
		
		forme: "Lemon",
		
		
		
	},

	elfaemint: {
		num: 10,
		name: "Elfae-Mint",
		types: ["Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 45, def: 60, spa: 58, spd: 113, spe: 93},
		abilities: {0: "Honey Gather", 1: "Ice Scales", H: "Prankster"},
		heightm: 0.1,
		weightkg: 0.5,
		color: "White",
		
		
		eggGroups: ["Fairy"],
		baseSpecies: "Elfae",
		
		forme: "Mint",
		
		
		
	},

	elfaeblueberry: {
		num: 10,
		name: "Elfae-Blueberry",
		types: ["Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 45, def: 60, spa: 58, spd: 113, spe: 93},
		abilities: {0: "Honey Gather", 1: "Storm Drain", H: "Prankster"},
		heightm: 0.1,
		weightkg: 0.5,
		color: "White",
		
		
		eggGroups: ["Fairy"],
		baseSpecies: "Elfae",
		
		forme: "Blueberry",
		
		
		
	},

	elfaegrape: {
		num: 10,
		name: "Elfae-Grape",
		types: ["Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 45, def: 60, spa: 58, spd: 113, spe: 93},
		abilities: {0: "Honey Gather", 1: "Cursed Body", H: "Prankster"},
		heightm: 0.1,
		weightkg: 0.5,
		color: "White",
		
		
		eggGroups: ["Fairy"],
		baseSpecies: "Elfae",
		
		forme: "Grape",
		
		
		
	},

	elfaecottoncandy: {
		num: 10,
		name: "Elfae-Cotton Candy",
		types: ["Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 45, def: 60, spa: 58, spd: 113, spe: 93},
		abilities: {0: "Honey Gather", 1: "Sweet Veil", H: "Prankster"},
		heightm: 0.1,
		weightkg: 0.5,
		color: "White",
		
		
		eggGroups: ["Fairy"],
		baseSpecies: "Elfae",
		
		forme: "Cotton Candy",
		
		
		
	},

	elfaelicorice: {
		num: 10,
		name: "Elfae-Licorice",
		types: ["Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 45, def: 60, spa: 58, spd: 113, spe: 93},
		abilities: {0: "Honey Gather", 1: "Infiltrator", H: "Prankster"},
		heightm: 0.1,
		weightkg: 0.5,
		color: "White",
		
		
		eggGroups: ["Fairy"],
		baseSpecies: "Elfae",
		
		forme: "Licorice",
		
		
		
	},

	fanshee: {
		num: 11,
		name: "Fanshee",
		types: ["Normal","Psychic"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 40, atk: 65, def: 65, spa: 50, spd: 45, spe: 35},
		abilities: {0: "Sleepyhead", H: "Comatose"},
		heightm: 0.4,
		weightkg: 9.0,
		color: "White",
		
		evos: ["Reveram"],
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	reveram: {
		num: 12,
		name: "Reveram",
		types: ["Normal","Psychic"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 90, atk: 80, def: 60, spa: 62, spd: 98, spe: 65},
		abilities: {0: "Sleepyhead", H: "Comatose"},
		heightm: 0.8,
		weightkg: 45.0,
		color: "White",
		prevo: "Fanshee",
		
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	sporasol: {
		num: 13,
		name: "Sporasol",
		types: ["Grass","Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 60, atk: 30, def: 52, spa: 30, spd: 60, spe: 30},
		abilities: {0: "Leaf Guard", H: "Rain Dish"},
		heightm: 0.1,
		weightkg: 2.1,
		color: "White",
		
		evos: ["Bumbashoo"],
		eggGroups: ["Grass","Fairy"],
		
		
		
		
		
		
	},

	bumbashoo: {
		num: 14,
		name: "Bumbashoo",
		types: ["Grass","Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 72, atk: 50, def: 72, spa: 60, spd: 90, spe: 70},
		abilities: {0: "Leaf Guard", H: "Rain Dish"},
		heightm: 0.4,
		weightkg: 5.8,
		color: "White",
		prevo: "Sporasol",
		evos: ["Umbrelala"],
		eggGroups: ["Grass","Fairy"],
		
		
		
		
		
		
	},

	umbrelala: {
		num: 15,
		name: "Umbrelala",
		types: ["Grass","Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 92, atk: 65, def: 90, spa: 88, spd: 113, spe: 60},
		abilities: {0: "Drought", H: "Drizzle"},
		heightm: 0.9,
		weightkg: 8.6,
		color: "White",
		prevo: "Bumbashoo",
		
		eggGroups: ["Grass","Fairy"],
		
		
		
		
		
		
	},

	dimlit: {
		num: 16,
		name: "Dimlit",
		types: ["Rock"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "Red",
		
		evos: ["Glimmwit"],
		eggGroups: ["Mineral"],
		
		
		
		
		
		
	},

	glimmwit: {
		num: 17,
		name: "Glimmwit",
		types: ["Rock"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "Red",
		prevo: "Dimlit",
		evos: ["Nummsglow"],
		eggGroups: ["Mineral"],
		
		
		
		
		
		
	},

	nummsglow: {
		num: 18,
		name: "Nummsglow",
		types: ["Rock"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 78, def: 80, spa: 90, spd: 118, spe: 70},
		abilities: {0: "Glowstick", H: "Sturdy"},
		heightm: 1,
		weightkg: 1,
		color: "Red",
		prevo: "Glimmwit",
		
		eggGroups: ["Mineral"],
		
		
		
		
		
		
	},

	sentrode: {
		num: 19,
		name: "Sentrode",
		types: ["Steel","Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 50, atk: 45, def: 40, spa: 60, spd: 55, spe: 80},
		abilities: {0: "Analytic", H: "Motor Drive"},
		heightm: 0.3,
		weightkg: 17.8,
		color: "Gray",
		
		evos: ["Shokputz"],
		eggGroups: ["Mineral"],
		
		
		
		
		
		
	},

	shokputz: {
		num: 20,
		name: "Shokputz",
		types: ["Steel","Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 53, atk: 60, def: 70, spa: 85, spd: 65, spe: 100},
		abilities: {0: "Analytic", H: "Motor Drive"},
		heightm: 1.0,
		weightkg: 78.8,
		color: "Gray",
		prevo: "Sentrode",
		evos: ["Reknology"],
		eggGroups: ["Mineral"],
		
		
		
		
		
		
	},

	reknology: {
		num: 21,
		name: "Reknology",
		types: ["Steel","Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 56, atk: 90, def: 85, spa: 115, spd: 85, spe: 75},
		abilities: {0: "Analytic", H: "Motor Drive"},
		heightm: 1.8,
		weightkg: 136.4,
		color: "Gray",
		prevo: "Shokputz",
		
		eggGroups: ["Mineral"],
		
		
		
		
		
		
	},

	batorch: {
		num: 22,
		name: "Batorch",
		types: ["Fire","Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 59, atk: 50, def: 40, spa: 40, spd: 40, spe: 67},
		abilities: {0: "Flash Fire"},
		heightm: 0.3,
		weightkg: 2.8,
		color: "Red",
		
		evos: ["Vampyro"],
		eggGroups: ["Field","Flying"],
		
		
		
		
		
		
	},

	vampyro: {
		num: 23,
		name: "Vampyro",
		types: ["Fire","Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 85, atk: 60, def: 75, spa: 80, spd: 70, spe: 100},
		abilities: {0: "Flash Fire"},
		heightm: 1.2,
		weightkg: 8.7,
		color: "Red",
		prevo: "Batorch",
		
		eggGroups: ["Field","Flying"],
		
		
		
		
		
		
	},

	sliggibak: {
		num: 24,
		name: "Sliggibak",
		types: ["Poison","Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 77, atk: 30, def: 99, spa: 101, spd: 133, spe: 40},
		abilities: {0: "Poison Point", H: "Innards Out"},
		heightm: 0.4,
		weightkg: 12.5,
		color: "Yellow",
		
		
		eggGroups: ["Water 3"],
		
		
		
		
		
		
	},

	imisnake: {
		num: 25,
		name: "Imisnake",
		types: ["Grass","Poison"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 50, atk: 70, def: 42, spa: 43, spd: 57, spe: 73},
		abilities: {0: "Strong Jaw", H: "Arena Trap"},
		heightm: 0.6,
		weightkg: 3.5,
		color: "Green",
		
		evos: ["Resemboa"],
		eggGroups: ["Field","Grass"],
		
		
		
		
		
		
	},

	resemboa: {
		num: 26,
		name: "Resemboa",
		types: ["Grass","Poison"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 95, def: 60, spa: 60, spd: 90, spe: 115},
		abilities: {0: "Strong Jaw", H: "Arena Trap"},
		heightm: 2.1,
		weightkg: 36.4,
		color: "Green",
		prevo: "Imisnake",
		
		eggGroups: ["Field","Grass"],
		
		
		
		
		
		
	},

	minatlas: {
		num: 27,
		name: "Minatlas",
		types: ["Bug","Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 75, atk: 80, def: 70, spa: 50, spd: 43, spe: 25},
		abilities: {0: "Klutz"},
		heightm: 0.9,
		weightkg: 49.5,
		color: "Green",
		
		evos: ["Thornatlas"],
		eggGroups: ["Bug"],
		
		
		
		
		
		
	},

	thornatlas: {
		num: 28,
		name: "Thornatlas",
		types: ["Bug","Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 71, atk: 113, def: 110, spa: 53, spd: 63, spe: 94},
		abilities: {0: "Klutz"},
		heightm: 1.8,
		weightkg: 104.1,
		color: "Green",
		prevo: "Minatlas",
		
		eggGroups: ["Bug"],
		
		
		
		
		
		
	},

	squift: {
		num: 29,
		name: "Squift",
		types: ["Water","Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 58, atk: 62, def: 59, spa: 62, spd: 62, spe: 71},
		abilities: {0: "Technician", H: "Speed Boost"},
		heightm: 0.5,
		weightkg: 12.5,
		color: "Blue",
		
		evos: ["Seanobi"],
		eggGroups: ["Water 1","Water 2"],
		
		
		
		
		
		
	},

	seanobi: {
		num: 30,
		name: "Seanobi",
		types: ["Water","Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 73, atk: 92, def: 71, spa: 92, spd: 74, spe: 111},
		abilities: {0: "Technician", H: "Speed Boost"},
		heightm: 1.1,
		weightkg: 35.8,
		color: "Blue",
		prevo: "Squift",
		
		eggGroups: ["Water 1","Water 2"],
		
		
		
		
		
		
	},

	ambiggle: {
		num: 31,
		name: "Ambiggle",
		types: ["Bug"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 55, def: 65, spa: 55, spd: 75, spe: 95},
		abilities: {0: "Volatile"},
		heightm: 0.1,
		weightkg: 0.1,
		color: "Gray",
		
		
		eggGroups: ["Bug","Amorphous"],
		
		
		
		
		
		
	},

	ambigglefever: {
		num: 31,
		name: "Ambiggle-Fever",
		types: ["Bug","Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 60, def: 70, spa: 80, spd: 95, spe: 105},
		abilities: {0: "Volatile"},
		heightm: 0.1,
		weightkg: 0.1,
		color: "Gray",
		
		
		eggGroups: ["Bug","Amorphous"],
		
		
		
		
		
		
	},

	ambigglechill: {
		num: 31,
		name: "Ambiggle-Chill",
		types: ["Bug","Ice"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 60, def: 70, spa: 80, spd: 95, spe: 105},
		abilities: {0: "Volatile"},
		heightm: 0.1,
		weightkg: 0.1,
		color: "Gray",
		
		
		eggGroups: ["Bug","Amorphous"],
		
		
		
		
		
		
	},

	ambigglestun: {
		num: 31,
		name: "Ambiggle-Stun",
		types: ["Bug","Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 60, def: 70, spa: 80, spd: 95, spe: 105},
		abilities: {0: "Volatile"},
		heightm: 0.1,
		weightkg: 0.1,
		color: "Gray",
		
		
		eggGroups: ["Bug","Amorphous"],
		
		
		
		
		
		
	},

	ambigglenausea: {
		num: 31,
		name: "Ambiggle-Nausea",
		types: ["Bug","Poison"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 60, def: 70, spa: 80, spd: 95, spe: 105},
		abilities: {0: "Volatile"},
		heightm: 0.1,
		weightkg: 0.1,
		color: "Gray",
		
		
		eggGroups: ["Bug","Amorphous"],
		
		
		
		
		
		
	},

	ambiggleslumber: {
		num: 31,
		name: "Ambiggle-Slumber",
		types: ["Bug","Psychic"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 60, def: 70, spa: 80, spd: 95, spe: 105},
		abilities: {0: "Volatile"},
		heightm: 0.1,
		weightkg: 0.1,
		color: "Gray",
		
		
		eggGroups: ["Bug","Amorphous"],
		
		
		
		
		
		
	},

	koikoipawn: {
		num: 32,
		name: "Koikoi-Pawn",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 60, atk: 40, def: 45, spa: 40, spd: 35, spe: 30},
		abilities: {0: "Wimp Out", H: "Emergency Exit"},
		heightm: 0.2,
		weightkg: 17.8,
		color: "Brown",
		
		evos: ["Gomokoi-Pawn"],
		eggGroups: ["Water 2"],
		
		
		
		
		
		
	},

	koikoiking: {
		num: 32,
		name: "Koikoi-King",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 30, atk: 60, def: 40, spa: 45, spd: 40, spe: 35},
		abilities: {0: "Wimp Out", H: "Emergency Exit"},
		heightm: 0.2,
		weightkg: 17.8,
		color: "Brown",
		
		evos: ["Gomokoi-King"],
		eggGroups: ["Water 2"],
		
		
		
		
		
		
	},

	koikoirook: {
		num: 32,
		name: "Koikoi-Rook",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 35, atk: 30, def: 60, spa: 40, spd: 45, spe: 40},
		abilities: {0: "Wimp Out", H: "Emergency Exit"},
		heightm: 0.2,
		weightkg: 17.8,
		color: "Brown",
		
		evos: ["Gomokoi-Rook"],
		eggGroups: ["Water 2"],
		
		
		
		
		
		
	},

	koikoiqueen: {
		num: 32,
		name: "Koikoi-Queen",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 40, atk: 35, def: 30, spa: 60, spd: 40, spe: 45},
		abilities: {0: "Wimp Out", H: "Emergency Exit"},
		heightm: 0.2,
		weightkg: 17.8,
		color: "Brown",
		
		evos: ["Gomokoi-Queen"],
		eggGroups: ["Water 2"],
		
		
		
		
		
		
	},

	koikoibishop: {
		num: 32,
		name: "Koikoi-Bishop",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 45, atk: 40, def: 35, spa: 30, spd: 60, spe: 40},
		abilities: {0: "Wimp Out", H: "Emergency Exit"},
		heightm: 0.2,
		weightkg: 17.8,
		color: "Brown",
		
		evos: ["Gomokoi-Bishop"],
		eggGroups: ["Water 2"],
		
		
		
		
		
		
	},

	koikoiknight: {
		num: 32,
		name: "Koikoi-Knight",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 40, atk: 45, def: 40, spa: 35, spd: 30, spe: 60},
		abilities: {0: "Wimp Out", H: "Emergency Exit"},
		heightm: 0.2,
		weightkg: 17.8,
		color: "Brown",
		
		evos: ["Gomokoi-Knight"],
		eggGroups: ["Water 2"],
		
		
		
		
		
		
	},

	gomokoipawn: {
		num: 33,
		name: "Gomokoi-Pawn",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 120, atk: 100, def: 90, spa: 80, spd: 70, spe: 60},
		abilities: {0: "Tactical", H: "Emergency Exit"},
		heightm: 0.8,
		weightkg: 30.5,
		color: "Brown",
		prevo: "Koikoi-Pawn",
		
		eggGroups: ["Water 2"],
		
		
		
		
		
		
	},

	gomokoiking: {
		num: 33,
		name: "Gomokoi-King",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 60, atk: 120, def: 100, spa: 90, spd: 80, spe: 70},
		abilities: {0: "Tactical", H: "Emergency Exit"},
		heightm: 0.8,
		weightkg: 30.5,
		color: "Brown",
		prevo: "Koikoi-King",
		
		eggGroups: ["Water 2"],
		
		
		
		
		
		
	},

	gomokoirook: {
		num: 33,
		name: "Gomokoi-Rook",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 60, def: 120, spa: 100, spd: 90, spe: 80},
		abilities: {0: "Tactical", H: "Emergency Exit"},
		heightm: 0.8,
		weightkg: 30.5,
		color: "Brown",
		prevo: "Koikoi-Rook",
		
		eggGroups: ["Water 2"],
		
		
		
		
		
		
	},

	gomokoiqueen: {
		num: 33,
		name: "Gomokoi-Queen",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 70, def: 60, spa: 120, spd: 100, spe: 90},
		abilities: {0: "Tactical", H: "Emergency Exit"},
		heightm: 0.8,
		weightkg: 30.5,
		color: "Brown",
		prevo: "Koikoi-Queen",
		
		eggGroups: ["Water 2"],
		
		
		
		
		
		
	},

	gomokoibishop: {
		num: 33,
		name: "Gomokoi-Bishop",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 90, atk: 80, def: 70, spa: 60, spd: 120, spe: 100},
		abilities: {0: "Tactical", H: "Emergency Exit"},
		heightm: 0.8,
		weightkg: 30.5,
		color: "Brown",
		prevo: "Koikoi-Bishop",
		
		eggGroups: ["Water 2"],
		
		
		
		
		
		
	},

	gomokoiknight: {
		num: 33,
		name: "Gomokoi-Knight",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 90, def: 80, spa: 70, spd: 60, spe: 120},
		abilities: {0: "Tactical", H: "Emergency Exit"},
		heightm: 0.8,
		weightkg: 30.5,
		color: "Brown",
		prevo: "Koikoi-Knight",
		
		eggGroups: ["Water 2"],
		
		
		
		
		
		
	},

	castallop: {
		num: 34,
		name: "Castallop",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 50, atk: 20, def: 84, spa: 70, spd: 64, spe: 40},
		abilities: {0: "Reverberate", H: "Liquid Voice"},
		heightm: 0.2,
		weightkg: 1.2,
		color: "Red",
		
		evos: ["Cymbarine"],
		eggGroups: ["Mineral","Water 3"],
		
		
		
		
		
		
	},

	cymbarine: {
		num: 35,
		name: "Cymbarine",
		types: ["Water","Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 63, atk: 50, def: 117, spa: 110, spd: 100, spe: 60},
		abilities: {0: "Reverberate", H: "Liquid Voice"},
		heightm: 1.5,
		weightkg: 146.5,
		color: "Gray",
		prevo: "Castallop",
		
		eggGroups: ["Mineral","Water 3"],
		
		
		
		
		
		
	},

	gnawful: {
		num: 36,
		name: "Gnawful",
		types: ["Water","Rock"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 55, atk: 75, def: 65, spa: 40, spd: 55, spe: 60},
		abilities: {0: "Strong Jaw"},
		heightm: 0.7,
		weightkg: 21.3,
		color: "Brown",
		
		evos: ["Cragodile"],
		eggGroups: ["Monster","Water 1"],
		
		
		
		
		
		
	},

	cragodile: {
		num: 37,
		name: "Cragodile",
		types: ["Water","Rock"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 75, atk: 121, def: 95, spa: 55, spd: 75, spe: 89},
		abilities: {0: "Strong Jaw"},
		heightm: 2.6,
		weightkg: 67.1,
		color: "Brown",
		prevo: "Gnawful",
		
		eggGroups: ["Monster","Water 1"],
		
		
		
		
		
		
	},

	slicky: {
		num: 38,
		name: "Slicky",
		types: ["Poison"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 52, atk: 50, def: 57, spa: 45, spd: 52, spe: 52},
		abilities: {0: "Poison Touch"},
		heightm: 0.2,
		weightkg: 2.6,
		color: "Green",
		
		evos: ["Goomarsh"],
		eggGroups: ["Water 1"],
		
		
		
		
		
		
	},

	goomarsh: {
		num: 39,
		name: "Goomarsh",
		types: ["Poison"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 63, def: 80, spa: 58, spd: 65, spe: 65},
		abilities: {0: "Poison Touch"},
		heightm: 0.8,
		weightkg: 19.5,
		color: "Green",
		prevo: "Slicky",
		evos: ["Polymoor"],
		eggGroups: ["Water 1"],
		
		
		
		
		
		
	},

	polymoor: {
		num: 40,
		name: "Polymoor",
		types: ["Poison"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 110, atk: 73, def: 90, spa: 80, spd: 68, spe: 70},
		abilities: {0: "Poison Touch"},
		heightm: 1.4,
		weightkg: 84.9,
		color: "Green",
		prevo: "Goomarsh",
		
		eggGroups: ["Water 1"],
		
		
		
		
		
		
	},

	fooldya: {
		num: 41,
		name: "Fooldya",
		types: ["Bug"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 40, atk: 60, def: 60, spa: 40, spd: 65, spe: 45},
		abilities: {0: "Unnerve"},
		heightm: 0.1,
		weightkg: 0.7,
		color: "Red",
		
		evos: ["Dupedual"],
		eggGroups: ["Bug"],
		
		
		
		
		
		
	},

	dupedual: {
		num: 42,
		name: "Dupedual",
		types: ["Bug"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 85, def: 95, spa: 70, spd: 90, spe: 50},
		abilities: {0: "Unnerve"},
		heightm: 0.8,
		weightkg: 16.1,
		color: "Purple",
		prevo: "Fooldya",
		
		eggGroups: ["Bug"],
		
		
		
		
		
		
	},

	brughoul: {
		num: 43,
		name: "Brughoul",
		types: ["Ghost","Normal"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 40, atk: 25, def: 55, spa: 20, spd: 55, spe: 15},
		abilities: {0: "Plagiarist", H: "Trace"},
		heightm: 0.1,
		weightkg: 0.1,
		color: "White",
		
		evos: ["Vanghost"],
		eggGroups: ["Amorphous"],
		
		
		
		
		
		
	},

	vanghost: {
		num: 44,
		name: "Vanghost",
		types: ["Ghost","Normal"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 50, atk: 35, def: 75, spa: 40, spd: 75, spe: 25},
		abilities: {0: "Plagiarist", H: "Trace"},
		heightm: 0.4,
		weightkg: 0.2,
		color: "White",
		prevo: "Brughoul",
		evos: ["Picassoul"],
		eggGroups: ["Amorphous"],
		
		
		
		
		
		
	},

	picassoul: {
		num: 45,
		name: "Picassoul",
		types: ["Ghost","Normal"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 75, atk: 45, def: 125, spa: 60, spd: 125, spe: 30},
		abilities: {0: "Plagiarist", H: "Trace"},
		heightm: 0.9,
		weightkg: 0.3,
		color: "White",
		prevo: "Vanghost",
		
		eggGroups: ["Amorphous"],
		
		
		
		
		
		
	},

	jokai: {
		num: 46,
		name: "Jokai",
		types: ["Ghost","Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 67, def: 50, spa: 92, spd: 83, spe: 105},
		abilities: {0: "Illuminate", H: "Prankster"},
		heightm: 0.4,
		weightkg: 0.4,
		color: "Red",
		
		
		eggGroups: ["Amorphous"],
		
		
		
		
		
		
	},

	hanbone: {
		num: 47,
		name: "Hanbone",
		types: ["Ghost","Rock"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 32, atk: 30, def: 71, spa: 73, spd: 71, spe: 42},
		abilities: {0: "Dancer"},
		heightm: 0.8,
		weightkg: 21.5,
		color: "White",
		
		evos: ["Skullvis"],
		eggGroups: ["Humanlike"],
		
		
		
		
		
		
	},

	skullvis: {
		num: 48,
		name: "Skullvis",
		types: ["Ghost","Rock"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 52, atk: 46, def: 110, spa: 112, spd: 110, spe: 86},
		abilities: {0: "Dancer"},
		heightm: 1.3,
		weightkg: 67.2,
		color: "White",
		prevo: "Hanbone",
		
		eggGroups: ["Humanlike"],
		
		
		
		
		
		
	},

	frounder: {
		num: 49,
		name: "Frounder",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 90, atk: 31, def: 59, spa: 31, spd: 52, spe: 43},
		abilities: {0: "Illuminate", H: "Solar Power"},
		heightm: 0.2,
		weightkg: 0.3,
		color: "Blue",
		
		evos: ["Sunfoon"],
		eggGroups: ["Water 2"],
		
		
		
		
		
		
	},

	sunfoon: {
		num: 50,
		name: "Sunfoon",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 110, atk: 55, def: 70, spa: 45, spd: 60, spe: 50},
		abilities: {0: "Sunbathe", H: "Solar Power"},
		heightm: 1.2,
		weightkg: 60.5,
		color: "Blue",
		prevo: "Frounder",
		evos: ["Solasola"],
		eggGroups: ["Water 2"],
		
		
		
		
		
		
	},

	solasola: {
		num: 51,
		name: "Solasola",
		types: ["Water","Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 150, atk: 70, def: 80, spa: 50, spd: 70, spe: 60},
		abilities: {0: "Sunbathe", H: "Solar Power"},
		heightm: 3.1,
		weightkg: 144.6,
		color: "Blue",
		prevo: "Sunfoon",
		
		eggGroups: ["Water 2"],
		
		
		
		
		
		
	},

	snowki: {
		num: 52,
		name: "Snowki",
		types: ["Ice","Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 49, atk: 25, def: 42, spa: 49, spd: 44, spe: 83},
		abilities: {0: "Rivalry", H: "Huge Power"},
		heightm: 0.3,
		weightkg: 8.4,
		color: "White",
		
		evos: ["Snowkoro"],
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	snowkoro: {
		num: 53,
		name: "Snowkoro",
		types: ["Ice","Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 45, def: 70, spa: 84, spd: 72, spe: 101},
		abilities: {0: "Rivalry", H: "Huge Power"},
		heightm: 0.9,
		weightkg: 23.3,
		color: "White",
		prevo: "Snowki",
		
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	friwi: {
		num: 54,
		name: "Friwi",
		types: ["Ice","Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 63, atk: 51, def: 49, spa: 69, spd: 60, spe: 91},
		abilities: {0: "Serene Grace", H: "Snow Cloak"},
		heightm: 0.2,
		weightkg: 0.8,
		color: "White",
		
		evos: ["Decorane"],
		eggGroups: ["Flying"],
		
		
		
		
		
		
	},

	decorane: {
		num: 55,
		name: "Decorane",
		types: ["Ice","Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 75, atk: 76, def: 61, spa: 92, spd: 75, spe: 121},
		abilities: {0: "Serene Grace", H: "Snow Warning"},
		heightm: 1.1,
		weightkg: 16.9,
		color: "White",
		prevo: "Friwi",
		
		eggGroups: ["Flying"],
		
		
		
		
		
		
	},

	hopshok: {
		num: 56,
		name: "Hopshok",
		types: ["Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 50, atk: 83, def: 44, spa: 39, spd: 40, spe: 44},
		abilities: {0: "Volt Absorb", H: "Cloud Nine"},
		heightm: 0.7,
		weightkg: 27.2,
		color: "Gray",
		
		evos: ["Pounshok"],
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	pounshok: {
		num: 57,
		name: "Pounshok",
		types: ["Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 82, atk: 111, def: 78, spa: 70, spd: 72, spe: 78},
		abilities: {0: "Volt Absorb", H: "Cloud Nine"},
		heightm: 1.4,
		weightkg: 92.5,
		color: "Black",
		prevo: "Hopshok",
		
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	myoesee: {
		num: 58,
		name: "Myoesee",
		types: ["Psychic"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 99, atk: 64, def: 87, spa: 90, spd: 104, spe: 60},
		abilities: {0: "Forewarn"},
		heightm: 1.6,
		weightkg: 164.5,
		color: "White",
		
		
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	quilapila: {
		num: 59,
		name: "Quilapila",
		types: ["Bug"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 30, atk: 20, def: 60, spa: 60, spd: 60, spe: 40},
		abilities: {0: "Mana Leech"},
		heightm: 0.4,
		weightkg: 0.6,
		color: "White",
		
		evos: ["Magnumoth","Maskito"],
		eggGroups: ["Bug"],
		
		
		
		
		
		
	},

	magnumoth: {
		num: 60,
		name: "Magnumoth",
		types: ["Bug","Psychic"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 65, def: 80, spa: 80, spd: 110, spe: 65},
		abilities: {0: "Mana Leech"},
		heightm: 1.2,
		weightkg: 23.5,
		color: "White",
		prevo: "Quilapila",
		
		eggGroups: ["Bug"],
		
		
		
		
		
		
	},

	maskito: {
		num: 61,
		name: "Maskito",
		types: ["Bug","Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 100, def: 65, spa: 70, spd: 65, spe: 110},
		abilities: {0: "Shadower"},
		heightm: 0.9,
		weightkg: 12.2,
		color: "Black",
		prevo: "Quilapila",
		
		eggGroups: ["Bug"],
		
		
		
		
		
		
	},

	bolichi: {
		num: 62,
		name: "Bolichi",
		types: ["Steel","Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 75, def: 85, spa: 55, spd: 105, spe: 65},
		abilities: {0: "Ricochet", H: "Iron Barbs"},
		heightm: 0.1,
		weightkg: 13.0,
		color: "Gray",
		
		
		eggGroups: ["Mineral"],
		
		
		
		
		
		
	},

	minelk: {
		num: 63,
		name: "Minelk",
		types: ["Normal","Ice"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Slush Rush", H: "Sap Sipper"},
		heightm: 1.0,
		weightkg: 14.4,
		color: "Gray",
		
		evos: ["Elkler"],
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	elkler: {
		num: 64,
		name: "Elkler",
		types: ["Normal","Ice"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 112, atk: 87, def: 101, spa: 76, spd: 79, spe: 67},
		abilities: {0: "Slush Rush", H: "Sap Sipper"},
		heightm: 2.0,
		weightkg: 164.6,
		color: "Gray",
		prevo: "Minelk",
		
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	plattle: {
		num: 65,
		name: "Plattle",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Berserk", H: "Lightning Rod"},
		heightm: 0.6,
		weightkg: 18.6,
		color: "Blue",
		
		evos: ["Ornithor"],
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	ornithor: {
		num: 66,
		name: "Ornithor",
		types: ["Water","Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 83, atk: 100, def: 87, spa: 109, spd: 67, spe: 62},
		abilities: {0: "Berserk", H: "Lightning Rod"},
		heightm: 1.3,
		weightkg: 133.3,
		color: "Blue",
		prevo: "Plattle",
		
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	fangon: {
		num: 67,
		name: "Fangon",
		types: ["Dragon","Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 50, atk: 50, def: 60, spa: 50, spd: 40, spe: 50},
		abilities: {0: "Burning Spirit", H: "Reckless"},
		heightm: 0.4,
		weightkg: 20.4,
		color: "Red",
		
		evos: ["Flanket"],
		eggGroups: ["Dragon"],
		
		
		
		
		
		
	},

	flanket: {
		num: 68,
		name: "Flanket",
		types: ["Dragon","Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 65, atk: 75, def: 70, spa: 70, spd: 50, spe: 70},
		abilities: {0: "Burning Spirit", H: "Reckless"},
		heightm: 1.1,
		weightkg: 80.6,
		color: "Red",
		prevo: "Fangon",
		evos: ["Orienchant"],
		eggGroups: ["Dragon"],
		
		
		
		
		
		
	},

	orienchant: {
		num: 69,
		name: "Orienchant",
		types: ["Dragon","Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 90, def: 100, spa: 130, spd: 95, spe: 85},
		abilities: {0: "Burning Spirit", H: "Reckless"},
		heightm: 2.0,
		weightkg: 120.0,
		color: "Red",
		prevo: "Flanket",
		
		eggGroups: ["Dragon"],
		
		
		
		
		
		
	},

	tikare: {
		num: 70,
		name: "Tikare",
		types: ["Bug"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 28, atk: 35, def: 30, spa: 28, spd: 25, spe: 28},
		abilities: {0: "Triage", H: "Shield Dust"},
		heightm: 0.1,
		weightkg: 0.8,
		color: "Brown",
		
		evos: ["Nicepak"],
		eggGroups: ["Bug"],
		
		
		
		
		
		
	},

	nicepak: {
		num: 71,
		name: "Nicepak",
		types: ["Bug"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 45, atk: 28, def: 44, spa: 31, spd: 30, spe: 22},
		abilities: {0: "Triage", H: "Shield Dust"},
		heightm: 0.2,
		weightkg: 1.2,
		color: "White",
		prevo: "Tikare",
		evos: ["Nursaleve"],
		eggGroups: ["Bug"],
		
		
		
		
		
		
	},

	nursaleve: {
		num: 72,
		name: "Nursaleve",
		types: ["Bug","Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 82, atk: 45, def: 66, spa: 700, spd: 75, spe: 75},
		abilities: {0: "Triage", H: "Shield Dust"},
		heightm: 0.5,
		weightkg: 2.4,
		color: "White",
		prevo: "Nicepak",
		
		eggGroups: ["Bug"],
		
		
		
		
		
		
	},

	nooby: {
		num: 73,
		name: "Nooby",
		types: ["Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 64, atk: 68, def: 36, spa: 30, spd: 36, spe: 33},
		abilities: {0: "Thick Fat", H: "Dry Skin"},
		heightm: 0.5,
		weightkg: 26.3,
		color: "Brown",
		
		evos: ["Proteen"],
		eggGroups: ["Humanlike"],
		
		
		
		
		
		
	},

	proteen: {
		num: 74,
		name: "Proteen",
		types: ["Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 87, atk: 90, def: 65, spa: 40, spd: 65, spe: 60},
		abilities: {0: "Thick Fat", H: "Dry Skin"},
		heightm: 1.0,
		weightkg: 40.6,
		color: "Brown",
		prevo: "Nooby",
		evos: ["Dramatama"],
		eggGroups: ["Humanlike"],
		
		
		
		
		
		
	},

	dramatama: {
		num: 75,
		name: "Dramatama",
		types: ["Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 110, atk: 110, def: 75, spa: 60, spd: 75, spe: 70},
		abilities: {0: "Thick Fat", H: "Dry Skin"},
		heightm: 2.0,
		weightkg: 106.4,
		color: "Brown",
		prevo: "Proteen",
		
		eggGroups: ["Humanlike"],
		
		
		
		
		
		
	},

	veyel: {
		num: 76,
		name: "Veyel",
		types: ["Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Keen Eye"},
		heightm: 0.5,
		weightkg: 3.7,
		color: "White",
		
		evos: ["Smieel"],
		eggGroups: ["Water 1"],
		
		
		
		
		
		
	},

	smieel: {
		num: 77,
		name: "Smieel",
		types: ["Dark","Psychic"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Intimidate"},
		heightm: 1.1,
		weightkg: 7.2,
		color: "Black",
		prevo: "Veyel",
		
		eggGroups: ["Water 1"],
		
		
		
		
		
		
	},

	neesoks: {
		num: 78,
		name: "Neesoks",
		types: ["Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Klutz", H: "Limber"},
		heightm: 0.7,
		weightkg: 4.7,
		color: "Brown",
		
		evos: ["Skinky"],
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	skinky: {
		num: 79,
		name: "Skinky",
		types: ["Dark","Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Dazzling", H: "Limber"},
		heightm: 1.1,
		weightkg: 11.9,
		color: "Black",
		prevo: "Neesoks",
		
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	admirror: {
		num: 80,
		name: "Admirror",
		types: ["Ice","Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Reflection", H: "Magic Bounce"},
		heightm: 0.4,
		weightkg: 9.6,
		color: "Blue",
		
		evos: ["Majestice"],
		eggGroups: ["Amorphous","Mineral"],
		
		
		
		
		
		
	},

	majestice: {
		num: 81,
		name: "Majestice",
		types: ["Ice","Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Reflection", H: "Magic Bounce"},
		heightm: 2.0,
		weightkg: 35.8,
		color: "Blue",
		prevo: "Admirror",
		
		eggGroups: ["Amorphous","Mineral"],
		
		
		
		
		
		
	},

	camery: {
		num: 82,
		name: "Camery",
		types: ["Ground","Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Mailman", H: "Overcoat"},
		heightm: 1.2,
		weightkg: 46.3,
		color: "Brown",
		
		evos: ["Camellac"],
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	camellac: {
		num: 83,
		name: "Camellac",
		types: ["Ground","Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Mailman", H: "Overcoat"},
		heightm: 2.1,
		weightkg: 109.3,
		color: "Brown",
		prevo: "Camery",
		
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	moustash: {
		num: 84,
		name: "Moustash",
		types: ["Normal"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 59, atk: 45, def: 50, spa: 35, spd: 40, spe: 31},
		abilities: {0: "Materialist", H: "Fur Coat"},
		heightm: 0.2,
		weightkg: 4.8,
		color: "Brown",
		
		evos: ["Hampstor"],
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	hampstor: {
		num: 85,
		name: "Hampstor",
		types: ["Normal"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 85, def: 70, spa: 55, spd: 60, spe: 70},
		abilities: {0: "Materialist", H: "Fur Coat"},
		heightm: 0.7,
		weightkg: 9.8,
		color: "Brown",
		prevo: "Moustash",
		
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	archovy: {
		num: 86,
		name: "Archovy",
		types: ["Water","Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Skill Link", H: "Sniper"},
		heightm: 1,
		weightkg: 1,
		color: "Green",
		
		evos: ["Marksmelt"],
		eggGroups: ["Water 2"],
		
		
		
		
		
		
	},

	marksmelt: {
		num: 87,
		name: "Marksmelt",
		types: ["Water","Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Skill Link", H: "Sniper"},
		heightm: 1,
		weightkg: 1,
		color: "Green",
		prevo: "Archovy",
		
		eggGroups: ["Water 2"],
		
		
		
		
		
		
	},

	bulsye: {
		num: 88,
		name: "Bulsye",
		types: ["Fighting","Normal"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Sturdy", H: "Stamina"},
		heightm: 1,
		weightkg: 1,
		color: "Brown",
		
		evos: ["Murezhu"],
		eggGroups: ["Mineral"],
		
		
		
		
		
		
	},

	murezhu: {
		num: 89,
		name: "Murezhu",
		types: ["Fighting","Normal"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Sturdy", H: "Stamina"},
		heightm: 1,
		weightkg: 1,
		color: "Brown",
		prevo: "Bulsye",
		
		eggGroups: ["Mineral"],
		
		
		
		
		
		
	},

	signapse: {
		num: 90,
		name: "Signapse",
		types: ["Electric","Psychic"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Telepathy", H: "Volt Absorb"},
		heightm: 0.1,
		weightkg: 0.7,
		color: "White",
		
		
		eggGroups: ["Field","Fairy"],
		
		
		
		
		
		
	},

	poyolky: {
		num: 91,
		name: "Poyolky",
		types: ["Normal","Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 40, atk: 45, def: 35, spa: 28, spd: 45, spe: 50},
		abilities: {0: "Run Away"},
		heightm: 0.2,
		weightkg: 3.2,
		color: "Brown",
		
		evos: ["Hawkadoo"],
		eggGroups: ["Flying"],
		
		
		
		
		
		
	},

	hawkadoo: {
		num: 92,
		name: "Hawkadoo",
		types: ["Normal","Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 50, atk: 65, def: 50, spa: 48, spd: 60, spe: 80},
		abilities: {0: "Quick Feet"},
		heightm: 0.8,
		weightkg: 15.5,
		color: "Brown",
		prevo: "Poyolky",
		evos: ["Valoroost"],
		eggGroups: ["Flying"],
		
		
		
		
		
		
	},

	valoroost: {
		num: 93,
		name: "Valoroost",
		types: ["Fighting","Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 87, def: 100, spa: 60, spd: 80, spe: 80},
		abilities: {0: "Braveheart"},
		heightm: 1.2,
		weightkg: 28.0,
		color: "Brown",
		prevo: "Hawkadoo",
		
		eggGroups: ["Flying"],
		
		
		
		
		
		
	},

	orkid: {
		num: 94,
		name: "Orkid",
		types: ["Grass","Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Shadow Tag"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		evos: ["Orchette"],
		eggGroups: ["Grass","Fairy"],
		
		
		
		
		
		
	},

	orchette: {
		num: 95,
		name: "Orchette",
		types: ["Grass","Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Shadow Tag"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Orkid",
		
		eggGroups: ["Grass","Fairy"],
		
		
		
		
		
		
	},

	fyrena: {
		num: 96,
		name: "Fyrena",
		types: ["Fire","Ground"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 45, atk: 72, def: 50, spa: 68, spd: 42, spe: 68},
		abilities: {0: "Intimidate"},
		heightm: 1,
		weightkg: 1,
		color: "Brown",
		
		evos: ["Magmutt"],
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	magmutt: {
		num: 97,
		name: "Magmutt",
		types: ["Fire","Ground"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 115, def: 85, spa: 100, spd: 60, spe: 102},
		abilities: {0: "Intimidate"},
		heightm: 1,
		weightkg: 1,
		color: "Brown",
		prevo: "Fyrena",
		
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	smook: {
		num: 98,
		name: "Smook",
		types: ["Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Cute Charm"},
		heightm: 1,
		weightkg: 1,
		color: "Purple",
		
		evos: ["Sliquish"],
		eggGroups: ["Water 1","Water 2"],
		
		
		
		
		
		
	},

	sliquish: {
		num: 99,
		name: "Sliquish",
		types: ["Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Cute Charm"},
		heightm: 1,
		weightkg: 1,
		color: "Purple",
		prevo: "Smook",
		evos: ["Sluggoth","Sluggoon"],
		eggGroups: ["Water 1","Water 2"],
		
		
		
		
		
		
	},

	sluggoth: {
		num: 100,
		name: "Sluggoth",
		types: ["Dark","Dragon"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Cute Charm"},
		heightm: 1,
		weightkg: 1,
		color: "Purple",
		prevo: "Sliquish",
		
		eggGroups: ["Water 1","Water 2"],
		
		
		
		
		
		
	},

	sluggoon: {
		num: 101,
		name: "Sluggoon",
		types: ["Dark","Dragon"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Bodyguard"},
		heightm: 1,
		weightkg: 1,
		color: "Purple",
		prevo: "Sliquish",
		
		eggGroups: ["Water 1","Water 2"],
		
		
		
		
		
		
	},

	quiklaw: {
		num: 102,
		name: "Quiklaw",
		types: ["Ground","Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Quick Draw", 1: "Quick Fire", H: "Skill Link"},
		heightm: 1,
		weightkg: 1,
		color: "Brown",
		
		evos: ["Outklaw"],
		eggGroups: ["Water 3"],
		
		
		
		
		
		
	},

	outklaw: {
		num: 103,
		name: "Outklaw",
		types: ["Ground","Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Quick Draw", 1: "Quick Fire", H: "Skill Link"},
		heightm: 1,
		weightkg: 1,
		color: "Brown",
		prevo: "Quiklaw",
		
		eggGroups: ["Water 3"],
		
		
		
		
		
		
	},

	snooball: {
		num: 104,
		name: "Snooball",
		types: ["Ice"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 45, atk: 59, def: 76, spa: 60, spd: 65, spe: 21},
		abilities: {0: "Shell Armor"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		evos: ["Snooman"],
		eggGroups: ["Amorphous"],
		
		
		
		
		
		
	},

	snooman: {
		num: 105,
		name: "Snooman",
		types: ["Ice"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 57, atk: 74, def: 96, spa: 75, spd: 82, spe: 27},
		abilities: {0: "Shell Armor"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Snooball",
		evos: ["Snoofort"],
		eggGroups: ["Amorphous"],
		
		
		
		
		
		
	},

	snoofort: {
		num: 106,
		name: "Snoofort",
		types: ["Ice"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 72, atk: 93, def: 121, spa: 94, spd: 103, spe: 34},
		abilities: {0: "Shell Armor"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Snooman",
		
		eggGroups: ["Amorphous"],
		
		
		
		
		
		
	},

	slowth: {
		num: 107,
		name: "Slowth",
		types: ["Normal"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Patient"},
		heightm: 1,
		weightkg: 1,
		color: "Blue",
		
		evos: ["Slothargic"],
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	slothargic: {
		num: 108,
		name: "Slothargic",
		types: ["Normal"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Patient"},
		heightm: 1,
		weightkg: 1,
		color: "Blue",
		prevo: "Slowth",
		
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	atomix: {
		num: 109,
		name: "Atomix",
		types: ["Normal"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 50, atk: 50, def: 50, spa: 50, spd: 50, spe: 50},
		abilities: {0: "Viral", H: "Imposter"},
		heightm: 0.2,
		weightkg: 1.2,
		color: "White",
		
		
		eggGroups: ["Ditto"],
		
		
		
		
		
		
	},

	daggon: {
		num: 110,
		name: "Daggon",
		types: ["Dragon","Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 51, atk: 68, def: 45, spa: 68, spd: 45, spe: 31},
		abilities: {0: "Mold Breaker"},
		heightm: 1,
		weightkg: 1,
		color: "Purple",
		
		evos: ["Dynasord"],
		eggGroups: ["Dragon","Monster"],
		
		
		
		
		
		
	},

	dynasord: {
		num: 111,
		name: "Dynasord",
		types: ["Dragon","Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 68, atk: 90, def: 60, spa: 60, spd: 60, spe: 41},
		abilities: {0: "Mold Breaker"},
		heightm: 1,
		weightkg: 1,
		color: "Purple",
		prevo: "Daggon",
		evos: ["Rexcaliber-Sheathed"],
		eggGroups: ["Dragon","Monster"],
		
		
		
		
		
		
	},

	rexcalibersheathed: {
		num: 112,
		name: "Rexcaliber-Sheathed",
		types: ["Dragon","Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 90, atk: 95, def: 120, spa: 65, spd: 110, spe: 55},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "Purple",
		prevo: "Dynasord",
		
		eggGroups: ["Dragon","Monster"],
		
		
		
		
		
		
	},

	rexcaliberunsheathed: {
		num: 112,
		name: "Rexcaliber-Unsheathed",
		types: ["Dragon","Steel"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 90, atk: 155, def: 85, spa: 75, spd: 75, spe: 100},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "Purple",
		
		
		eggGroups: ["Dragon","Monster"],
		
		
		
		
		
		
	},

	sparfish: {
		num: 113,
		name: "Sparfish",
		types: ["Water","Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 76, atk: 124, def: 87, spa: 64, spd: 71, spe: 55},
		abilities: {0: "Suction Cups", H: "Regenerator"},
		heightm: 1,
		weightkg: 1,
		color: "Blue",
		
		
		eggGroups: ["Water 3"],
		
		
		
		
		
		
	},

	dryzard: {
		num: 114,
		name: "Dryzard",
		types: ["Ground"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 44, atk: 58, def: 66, spa: 44, spd: 58, spe: 66},
		abilities: {0: "Water Compaction", H: "Dry Skin"},
		heightm: 1,
		weightkg: 1,
		color: "Brown",
		
		evos: ["Dehydrake"],
		eggGroups: ["Dragon"],
		
		
		
		
		
		
	},

	dehydrake: {
		num: 115,
		name: "Dehydrake",
		types: ["Ground"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 66, atk: 84, def: 92, spa: 67, spd: 75, spe: 92},
		abilities: {0: "Water Compaction", H: "Dry Skin"},
		heightm: 1,
		weightkg: 1,
		color: "Brown",
		prevo: "Dryzard",
		
		eggGroups: ["Dragon"],
		
		
		
		
		
		
	},

	kappunk: {
		num: 116,
		name: "Kappunk",
		types: ["Poison"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 46, atk: 52, def: 36, spa: 70, spd: 51, spe: 53},
		abilities: {0: "Black Magic"},
		heightm: 1,
		weightkg: 1,
		color: "Brown",
		
		evos: ["Voodood"],
		eggGroups: ["Flying"],
		
		
		
		
		
		
	},

	voodood: {
		num: 117,
		name: "Voodood",
		types: ["Poison","Psychic"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 61, atk: 70, def: 48, spa: 93, spd: 68, spe: 71},
		abilities: {0: "Black Magic"},
		heightm: 1,
		weightkg: 1,
		color: "Green",
		prevo: "Kappunk",
		evos: ["Hagayaga"],
		eggGroups: ["Flying"],
		
		
		
		
		
		
	},

	hagayaga: {
		num: 118,
		name: "Hagayaga",
		types: ["Poison","Psychic"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 81, atk: 93, def: 64, spa: 124, spd: 90, spe: 95},
		abilities: {0: "Black Magic"},
		heightm: 1,
		weightkg: 1,
		color: "Green",
		prevo: "Voodood",
		
		eggGroups: ["Flying"],
		
		
		
		
		
		
	},

	flanbon: {
		num: 119,
		name: "Flanbon",
		types: ["Poison","Ground"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 61, atk: 55, def: 67, spa: 65, spd: 77, spe: 41},
		abilities: {0: "Gooey", H: "Weak Armor"},
		heightm: 1,
		weightkg: 1,
		color: "Yellow",
		
		evos: ["Terramisu"],
		eggGroups: ["Water 1"],
		
		
		
		
		
		
	},

	terramisu: {
		num: 120,
		name: "Terramisu",
		types: ["Poison","Ground"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 82, atk: 70, def: 100, spa: 87, spd: 124, spe: 55},
		abilities: {0: "Gooey", H: "Weak Armor"},
		heightm: 1,
		weightkg: 1,
		color: "Yellow",
		prevo: "Flanbon",
		
		eggGroups: ["Water 1"],
		
		
		
		
		
		
	},

	elemur: {
		num: 121,
		name: "Elemur",
		types: ["Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 41, atk: 57, def: 39, spa: 70, spd: 38, spe: 55},
		abilities: {0: "Own Tempo", H: "Galvanize"},
		heightm: 1,
		weightkg: 1,
		color: "Gray",
		
		evos: ["Gleemur"],
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	gleemur: {
		num: 122,
		name: "Gleemur",
		types: ["Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 54, atk: 77, def: 52, spa: 94, spd: 50, spe: 73},
		abilities: {0: "Noise Maker", H: "Galvanize"},
		heightm: 1,
		weightkg: 1,
		color: "Gray",
		prevo: "Elemur",
		evos: ["Skreemur"],
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	skreemur: {
		num: 123,
		name: "Skreemur",
		types: ["Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 72, atk: 102, def: 69, spa: 125, spd: 67, spe: 97},
		abilities: {0: "Noise Maker", H: "Galvanize"},
		heightm: 1,
		weightkg: 1,
		color: "Gray",
		prevo: "Gleemur",
		
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	budifoal: {
		num: 124,
		name: "Budifoal",
		types: ["Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 55, atk: 63, def: 44, spa: 67, spd: 65, spe: 63},
		abilities: {0: "Natural Cure"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		evos: ["Bloomare"],
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	bloomare: {
		num: 125,
		name: "Bloomare",
		types: ["Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 92, atk: 70, def: 65, spa: 115, spd: 86, spe: 76},
		abilities: {0: "Natural Cure"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Budifoal",
		
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	bronxy: {
		num: 126,
		name: "Bronxy",
		types: ["Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 55, atk: 67, def: 65, spa: 63, spd: 44, spe: 63},
		abilities: {0: "Adrenaline"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		evos: ["Behemox"],
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	behemox: {
		num: 127,
		name: "Behemox",
		types: ["Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 92, atk: 115, def: 86, spa: 70, spd: 65, spe: 76},
		abilities: {0: "Adrenaline"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Bronxy",
		
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	saunhaug: {
		num: 128,
		name: "Saunhaug",
		types: ["Ground","Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 132, atk: 70, def: 70, spa: 74, spd: 63, spe: 34},
		abilities: {0: "Water Compaction"},
		heightm: 1.2,
		weightkg: 90.7,
		color: "Pink",
		
		
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	crestendo: {
		num: 129,
		name: "Crestendo",
		types: ["Rock","Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 54, atk: 48, def: 44, spa: 96, spd: 45, spe: 66},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "Pink",
		
		evos: ["Melodyna"],
		eggGroups: ["Monster","Dragon"],
		
		
		
		
		
		
	},

	melodyna: {
		num: 130,
		name: "Melodyna",
		types: ["Rock","Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 76, atk: 68, def: 62, spa: 134, spd: 63, spe: 92},
		abilities: {0: "Symphony"},
		heightm: 1,
		weightkg: 1,
		color: "Pink",
		prevo: "Crestendo",
		
		eggGroups: ["Monster","Dragon"],
		
		
		
		
		
		
	},

	corraptor: {
		num: 131,
		name: "Corraptor",
		types: ["Rock","Poison"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 54, atk: 87, def: 43, spa: 48, spd: 41, spe: 82},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "Black",
		
		evos: ["Nefaraptor"],
		eggGroups: ["Monster","Dragon"],
		
		
		
		
		
		
	},

	nefaraptor: {
		num: 132,
		name: "Nefaraptor",
		types: ["Rock","Poison"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 75, atk: 121, def: 60, spa: 67, spd: 58, spe: 114},
		abilities: {0: "Lagging Venom"},
		heightm: 1,
		weightkg: 1,
		color: "Black",
		prevo: "Corraptor",
		
		eggGroups: ["Monster","Dragon"],
		
		
		
		
		
		
	},

	taigla: {
		num: 133,
		name: "Taigla",
		types: ["Ice"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Frost Fur"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		evos: ["Pumafrost"],
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	pumafrost: {
		num: 134,
		name: "Pumafrost",
		types: ["Ice","Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 72, atk: 103, def: 72, spa: 83, spd: 84, spe: 108},
		abilities: {0: "Frost Fur"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Taigla",
		
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	fereeze: {
		num: 135,
		name: "Fereeze",
		types: ["Ice"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 66, atk: 80, def: 64, spa: 74, spd: 64, spe: 103},
		abilities: {0: "Cool Down"},
		heightm: 1,
		weightkg: 1,
		color: "Blue",
		
		
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	pandit: {
		num: 136,
		name: "Pandit",
		types: ["Dark","Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "Black",
		
		evos: ["Bearglar"],
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	bearglar: {
		num: 137,
		name: "Bearglar",
		types: ["Dark","Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "Black",
		prevo: "Pandit",
		
		eggGroups: ["Field"],
		
		
		
		
		
		
	},

	iggnit: {
		num: 138,
		name: "Iggnit",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		evos: ["Kerofin"],
		eggGroups: ["Monster","Water 1"],
		
		
		
		
		
		
	},

	kerofin: {
		num: 139,
		name: "Kerofin",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Iggnit",
		evos: ["Interlotl"],
		eggGroups: ["Monster","Water 1"],
		
		
		
		
		
		
	},

	inferlotl: {
		num: 140,
		name: "Inferlotl",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 92, def: 101, spa: 101, spd: 79, spe: 86},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Kerofin",
		
		eggGroups: ["Monster","Water 1"],
		
		
		
		
		
		
	},

	ravenge: {
		num: 141,
		name: "Ravenge",
		types: ["Ghost","Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 58, atk: 86, def: 57, spa: 75, spd: 57, spe: 111},
		abilities: {0: "Stakeout"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	pompoke: {
		num: 142,
		name: "Pompoke",
		types: ["Fighting","Ground"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 56, atk: 83, def: 67, spa: 41, spd: 47, spe: 40},
		abilities: {0: "Damp", 1: "Tough Claws", H: "Water Absorb"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		evos: ["Ogroak"],
		eggGroups: ["Water 1"],
		
		
		
		
		
		
	},

	ogroak: {
		num: 143,
		name: "Ogroak",
		types: ["Fighting","Ground"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 86, atk: 126, def: 103, spa: 63, spd: 72, spe: 62},
		abilities: {0: "Shatter Club", 1: "Tough Claws", H: "Water Absorb"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Pipoke",
		
		eggGroups: ["Water 1"],
		
		
		
		
		
		
	},

	humbuzz: {
		num: 144,
		name: "Humbuzz",
		types: ["Bug","Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 40, atk: 45, def: 40, spa: 45, spd: 40, spe: 60},
		abilities: {0: "Honey Gather"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		evos: ["Beezooka","Beemuze"],
		eggGroups: ["Bug"],
		
		
		
		
		
		
	},

	beezooka: {
		num: 145,
		name: "Beezooka",
		types: ["Bug","Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 80, atk: 81, def: 65, spa: 81, spd: 45, spe: 145},
		abilities: {0: "Honey Maker"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Humbuzz",
		
		eggGroups: ["Bug"],
		
		
		
		
		
		
	},

	beemuze: {
		num: 146,
		name: "Beemuze",
		types: ["Bug","Electric"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 91, atk: 67, def: 67, spa: 100, spd: 115, spe: 57},
		abilities: {0: "Interference"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Humbuzz",
		
		eggGroups: ["Bug"],
		
		
		
		
		
		
	},

	rogguard: {
		num: 147,
		name: "Rogguard",
		types: ["Rock"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 50, atk: 65, def: 75, spa: 65, spd: 75, spe: 45},
		abilities: {0: "Stone Guardian"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		evos: ["Zentinel-Earth","Zentinel-Sky"],
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	zentinalearth: {
		num: 148,
		name: "Zentinal-Earth",
		types: ["Rock","Dragon"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 90, atk: 100, def: 120, spa: 70, spd: 75, spe: 80},
		abilities: {0: "Stone Guardian"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Rogguard",
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	zentinalsky: {
		num: 148,
		name: "Zentinal-Sky",
		types: ["Rock","Dragon"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 90, atk: 70, def: 75, spa: 100, spd: 120, spe: 80},
		abilities: {0: "Stone Guardian"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Rogguard",
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	chantaray: {
		num: 149,
		name: "Chantaray",
		types: ["Psychic","Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 43, atk: 39, def: 43, spa: 67, spd: 59, spe: 59},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		evos: ["Enchantaray"],
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	enchantaray: {
		num: 150,
		name: "Enchantaray",
		types: ["Psychic","Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 71, atk: 65, def: 71, spa: 111, spd: 98, spe: 99},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Chantaray",
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	yokkameo: {
		num: 153,
		name: "Yokkameo",
		types: ["Normal"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 40, atk: 40, def: 40, spa: 40, spd: 40, spe: 40},
		abilities: {0: "Adaptability"},
		heightm: 1,
		weightkg: 1,
		color: "Blue",
		
		evos: ["Pogguest"],
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	pogguest: {
		num: 154,
		name: "Pogguest",
		types: ["Normal"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70},
		abilities: {0: "Adaptability"},
		heightm: 1,
		weightkg: 1,
		color: "Green",
		prevo: "Yokkameo",
		evos: ["Hyperiogg"],
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	hyperiogg: {
		num: 155,
		name: "Hyperiogg",
		types: ["Normal"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 90, atk: 90, def: 90, spa: 90, spd: 90, spe: 90},
		abilities: {0: "Megadapt"},
		heightm: 1,
		weightkg: 1,
		color: "Pink",
		prevo: "Pogguest",
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	jinghoul: {
		num: 156,
		name: "Jinghoul",
		types: ["Psychic","Normal"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Beast Boost"},
		heightm: 1,
		weightkg: 1,
		color: "Yellow",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	azuryx: {
		num: 157,
		name: "Azuryx",
		types: ["Grass","Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Spring Tide"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	vermilyx: {
		num: 158,
		name: "Vermilyx",
		types: ["Fire","Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Summer Tide"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	pallyx: {
		num: 159,
		name: "Pallyx",
		types: ["Ground","Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Autumn Tide"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	ouroska: {
		num: 160,
		name: "Ouroska",
		types: ["Steel","Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 137, def: 133, spa: 110, spd: 100, spe: 90},
		abilities: {0: "Metallify"},
		heightm: 9.9,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	boroska: {
		num: 161,
		name: "Boroska",
		types: ["Rock","Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 110, def: 133, spa: 90, spd: 137, spe: 100},
		abilities: {0: "Petrify"},
		heightm: 9.6,
		weightkg: 1,
		color: "Black",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	shivatna: {
		num: 162,
		name: "Shivatna",
		types: ["Fighting","Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 120, atk: 150, def: 85, spa: 85, spd: 150, spe: 80},
		abilities: {0: "Balance Holder"},
		heightm: 10.5,
		weightkg: 1,
		color: "Green",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	ebonyx: {
		num: 163,
		name: "Ebonyx",
		types: ["Ice","Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Winter Tide"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	kamizzama: {
		num: 164,
		name: "Kamizzama",
		types: ["Ground","Dragon"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 76, atk: 104, def: 80, spa: 119, spd: 126, spe: 95},
		abilities: {0: "Flame Body"},
		heightm: 4.3,
		weightkg: 1,
		color: "Yellow",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	seraphine: {
		num: 165,
		name: "Seraphine",
		types: ["Poison","Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 120, atk: 95, def: 70, spa: 100, spd: 150, spe: 65},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "Blue",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	ophamine: {
		num: 166,
		name: "Ophamine",
		types: ["Poison","Psychic"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 120, atk: 100, def: 85, spa: 130, spd: 125, spe: 40},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "Green",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	tengyuma: {
		num: 167,
		name: "Tengyuma",
		types: ["Dark","Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Lightning Rod"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	navaroc: {
		num: 168,
		name: "Navaroc",
		types: ["Rock","Psychic"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "Green",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	hajiminewmoon: {
		num: 169,
		name: "Hajimi-New Moon",
		types: ["Psychic","Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 75, def: 125, spa: 75, spd: 125, spe: 100},
		abilities: {0: "Moon Phase"},
		heightm: 1,
		weightkg: 1,
		color: "Black",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	hajimifullmoon: {
		num: 169,
		name: "Hajimi-Full Moon",
		types: ["Psychic","Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 100, atk: 125, def: 75, spa: 125, spd: 75, spe: 100},
		abilities: {0: "Moon Phase"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	hopponit: {
		num: 1,
		name: "Hopponit",
		types: ["Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Overgrow"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	buddhop: {
		num: 2,
		name: "Buddhop",
		types: ["Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Overgrow"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	meditoad: {
		num: 3,
		name: "Meditoad",
		types: ["Grass","Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Overgrow"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	lavur: {
		num: 4,
		name: "Lavur",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Blaze"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	mohaut: {
		num: 5,
		name: "Mohaut",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Blaze"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	pompadire: {
		num: 6,
		name: "Pompadire",
		types: ["Fire","Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Blaze"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	pintcha: {
		num: 7,
		name: "Pintcha",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Torrent"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	crabalier: {
		num: 8,
		name: "Crabalier",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Torrent"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	skaladin: {
		num: 9,
		name: "Skaladin",
		types: ["Water","Poison"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Torrent"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	calforie: {
		num: 10,
		name: "Calforie",
		types: ["Fighting"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		evos: ["Bultter"],
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	bultter: {
		num: 11,
		name: "Bultter",
		types: ["Fighting","Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Calforie",
		evos: ["Taurgarine"],
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	taurgarine: {
		num: 12,
		name: "Taurgarine",
		types: ["Fighting","Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Bultter",
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	terooboo: {
		num: 13,
		name: "Terooboo",
		types: ["Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		evos: ["Zellha"],
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	zellha: {
		num: 14,
		name: "Zellha",
		types: ["Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Terooboo",
		evos: ["Soullha"],
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	soullha: {
		num: 15,
		name: "Soullha",
		types: ["Ghost","Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Zellha",
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	snowble: {
		num: 16,
		name: "Snowble",
		types: ["Ice","Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		evos: ["Cupengy"],
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	cupengy: {
		num: 17,
		name: "Cupengy",
		types: ["Ice","Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Snowble",
		evos: ["Auroyal"],
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	auroyal: {
		num: 18,
		name: "Auroyal",
		types: ["Ice","Fairy"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Klutz"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		prevo: "Cupengy",
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	monana: {
		num: 19,
		name: "Monana",
		types: ["Normal","Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Harvest", H: "Gluttony"},
		heightm: 1,
		weightkg: 1,
		color: "Pink",
		
		evos: ["Kabukey"],
		eggGroups: ["Field","Humanlike"],
		
		
		
		
		
		
	},

	kabukey: {
		num: 20,
		name: "Kabukey",
		types: ["Normal","Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Harvest", H: "Gluttony"},
		heightm: 1,
		weightkg: 1,
		color: "Pink",
		prevo: "Monana",
		
		eggGroups: ["Field","Humanlike"],
		
		
		
		
		
		
	},

	bat1: {
		num: 1,
		name: "Bat1",
		types: ["Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Overgrow"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	bat2: {
		num: 2,
		name: "Bat2",
		types: ["Grass","Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Overgrow"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	bat3: {
		num: 3,
		name: "Bat3",
		types: ["Grass","Flying"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Overgrow"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	snake1: {
		num: 4,
		name: "Snake1",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Blaze"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	snake2: {
		num: 5,
		name: "Snake2",
		types: ["Fire"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Blaze"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	snake3: {
		num: 6,
		name: "Snake3",
		types: ["Fire","Dragon"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Blaze"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	croc1: {
		num: 7,
		name: "Croc1",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Torrent"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	croc2: {
		num: 8,
		name: "Croc2",
		types: ["Water"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Torrent"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},

	croc3: {
		num: 9,
		name: "Croc3",
		types: ["Water","Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Torrent"},
		heightm: 1,
		weightkg: 1,
		color: "White",
		
		
		eggGroups: ["Undiscovered"],
		
		
		
		
		
		
	},



};