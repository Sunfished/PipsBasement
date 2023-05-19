// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"
Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
export const Formats: FormatList = [
];
--------------------------------------------------------------------------------
If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [
	// Smogon Pet Mods ///////////////////////////////////////////////////////////////////
	{
		section: "Gen 9 Mods",
		column: 1,
	},
	
	{
		name: "[Gen 9] Fakemon Kitchen",
		desc: `Test Description`,
		threads: [
			`None`,
		],
		mod: 'pipmons',
		ruleset: ['Standard'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Baton Pass'],
		unbanlist: ['Athleetah'],
	},
	
	{
		section: "Other Mods",
		column: 1,
	},
	
];
