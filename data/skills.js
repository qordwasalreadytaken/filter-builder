// All character class skills organized by class and skill tree
// Each skill has: name (display name), id (skill ID for SK## or SKILL("name") in filters)
// Source: Path of Diablo wiki - https://pathofdiablo.com/wiki/Talk:Loot_Filtration_Codes#Skill_Codes

const classSkills = {
    general: {
        universal: [
            { name: "Cold Skills", id: null, stat: 437 },
            { name: "Elemental & Poison Skills", id: null, stat: 495 },
            { name: "Fire Skills", id: null, stat: 436 }
//            { name: "Lightning Skills", id: null, stat: ??? }
//            { name: "Summon Skills", id: null, stat: ??? }
            // More universal skills can be added here
        ]
    },
    
    amazon: {
        bow: [
            { name: "Magic Arrow", id: 6 },
            { name: "Fire Arrow", id: 7 },
            { name: "Cold Arrow", id: 11 },
            { name: "Multiple Shot", id: 12 },
            { name: "Exploding Arrow", id: 16 },
            { name: "Ice Arrow", id: 21 },
            { name: "Guided Arrow", id: 22 },
            { name: "Strafe", id: 26 },
            { name: "Immolation Arrow", id: 27 },
            { name: "Freezing Arrow", id: 31 }
        ],
        passive: [
            { name: "Inner Sight", id: 8 },
            { name: "Lethal Strike", id: 9 },
            { name: "Dodge", id: 13 },
            { name: "Avoid", id: 18 },
            { name: "Penetrate", id: 23 },
            { name: "Decoy", id: 28 },
            { name: "Evade", id: 29 },
            { name: "Valkyrie", id: 32 },
            { name: "Pierce", id: 33 }
        ],
        javelin: [
            { name: "Jab", id: 10 },
            { name: "Power Strike", id: 14 },
            { name: "Poison Javelin", id: 15 },
            { name: "Molten Strike", id: 19 },
            { name: "Lightning Bolt", id: 20 },
            { name: "Charged Strike", id: 24 },
            { name: "Plague Javelin", id: 25 },
            { name: "Fend", id: 30 },
            { name: "Lightning Strike", id: 34 },
            { name: "Lightning Fury", id: 35 }
        ]
    },
    
    sorceress: {
        cold: [
            { name: "Ice Bolt", id: 39 },
            { name: "Frigerate", id: 40 },
            { name: "Frost Nova", id: 44 },
            { name: "Ice Blast", id: 45 },
            { name: "Shiver Armor", id: 50 },
            { name: "Glacial Spike", id: 55 },
            { name: "Blizzard", id: 59 },
            { name: "Chilling Armor", id: 60 },
            { name: "Frozen Orb", id: 64 },
            { name: "Cold Mastery", id: 65 },
            { name: "Freezing Pulse", id: 469 }
        ],
        lightning: [
            { name: "Charged Bolt", id: 38 },
            { name: "Static Field", id: 42 },
            { name: "Telekinesis", id: 43 },
            { name: "Nova", id: 48 },
            { name: "Lightning Surge", id: 49 },
            { name: "Teleport", id: 53 },
            { name: "Chain Lightning", id: 54 },
            { name: "Discharge", id: 57 },
            { name: "Energy Shield", id: 58 },
            { name: "Lightning Mastery", id: 63 },
            { name: "Thunder Storm", id: 457 }
        ],
        fire: [
            { name: "Fire Bolt", id: 36 },
            { name: "Warmth", id: 37 },
            { name: "Inferno", id: 41 },
            { name: "Immolate", id: 46 },
            { name: "Fire Ball", id: 47 },
            { name: "Fire Wall", id: 51 },
            { name: "Enflame", id: 52 },
            { name: "Meteor", id: 56 },
            { name: "Fire Mastery", id: 61 },
            { name: "Hydra", id: 62 }
        ]
    },
    
    necromancer: {
        summoning: [
            { name: "Summon Mastery", id: 69 },
            { name: "Raise Skeleton Warrior", id: 70 },
            { name: "Clay Golem", id: 75 },
            { name: "Convocation", id: 79 },
            { name: "Raise Skeletal Mage", id: 80 },
            { name: "Desecrate", id: 83 },
            { name: "Blood Golem", id: 85 },
            { name: "Flesh Offering", id: 88 },
            { name: "Bone Offering", id: 89 },
            { name: "Iron Golem", id: 90 },
            { name: "Fire Golem", id: 94 },
            { name: "Revive", id: 95 }
        ],
        poison: [
            { name: "Teeth", id: 67 },
            { name: "Bone Armor", id: 68 },
            { name: "Deadly Poison", id: 73 },
            { name: "Corpse Explosion", id: 74 },
            { name: "Bone Wall", id: 78 },
            { name: "Bone Spear", id: 84 },
            { name: "Poison Nova", id: 92 },
            { name: "Bone Spirit", id: 93 }
        ],
        curses: [
            { name: "Amplify Damage", id: 66 },
            { name: "Dim Vision", id: 71 },
            { name: "Weaken", id: 72 },
            { name: "Iron Maiden", id: 76 },
            { name: "Terror", id: 77 },
            { name: "Confuse", id: 81 },
            { name: "Life Tap", id: 82 },
            { name: "Attract", id: 86 },
            { name: "Decrepify", id: 87 },
            { name: "Lower Resist", id: 91 },
            { name: "Hemorrhage", id: 477 }
        ]
    },
    
    paladin: {
        combat: [
            { name: "Sacrifice", id: 96 },
            { name: "Smite", id: 97 },
            { name: "Holy Bolt", id: 101 },
            { name: "Zeal", id: 106 },
            { name: "Charge", id: 107 },
            { name: "Vengeance", id: 111 },
            { name: "Blessed Hammer", id: 112 },
            { name: "Absolution", id: 116 },
            { name: "Holy Shield", id: 117 },
            { name: "Fist of the Heavens", id: 121 },
            { name: "Dashing Strike", id: 473 }
        ],
        offensive: [
            { name: "Might", id: 98 },
            { name: "Holy Fire", id: 102 },
            { name: "Precision", id: 103 },
            { name: "Blessed Aim", id: 108 },
            { name: "Concentration", id: 113 },
            { name: "Holy Freeze", id: 114 },
            { name: "Holy Shock", id: 118 },
            { name: "Sanctuary", id: 119 },
            { name: "Fanaticism", id: 122 },
            { name: "Conviction", id: 123 }
        ],
        defensive: [
            { name: "Prayer", id: 99 },
            { name: "Resist Fire", id: 100 },
            { name: "Defiance", id: 104 },
            { name: "Resist Cold", id: 105 },
            { name: "Cleansing", id: 109 },
            { name: "Resist Lightning", id: 110 },
            { name: "Vigor", id: 115 },
            { name: "Meditation", id: 120 },
            { name: "Redemption", id: 124 },
            { name: "Salvation", id: 125 }
        ]
    },
    
    barbarian: {
        warcries: [
            { name: "Howl", id: 130 },
            { name: "Find Potion", id: 131 },
            { name: "Taunt", id: 137 },
            { name: "Shout", id: 138 },
            { name: "Find Item", id: 146 },
            { name: "Battle Orders", id: 149 },
            { name: "Grim Ward", id: 150 },
            { name: "War Cry", id: 154 },
            { name: "Battle Command", id: 155 }
        ],
        combat: [
            { name: "Bash", id: 126 },
            { name: "Ethereal Throw", id: 133 },
            { name: "Whirling Axes", id: 134 },
            { name: "Double Swing", id: 136 },
            { name: "Stun", id: 139 },
//            { name: "Power Throw", id: 140 },
            { name: "Leap", id: 143 },
            { name: "Concentrate", id: 144 },
            { name: "Frenzy", id: 147 },
            { name: "Whirlwind", id: 151 },
            { name: "Cleave", id: 152 },
            { name: "Puncture", id: 474 },
            { name: "Counter Attack", id: 475 }
        ],
        masteries: [
            { name: "Edged Weapon Mastery", id: 127 },
            { name: "Pole Weapon Mastery", id: 128 },
            { name: "Blunt Weapon Mastery", id: 129 },
//            { name: "Thrown Weapon Mastery", id: 13535 },
//            { name: "Increased Stamina", id: 141 },
            { name: "Iron Skin", id: 145 },
            { name: "Increased Speed", id: 148 },
            { name: "Natural Resistance", id: 153 }
        ]
    },
    
    druid: {
        summoning: [
            { name: "Raven", id: 221 },
            { name: "Poison Creeper", id: 222 },
            { name: "Oak Sage", id: 226 },
            { name: "Summon Spirit Wolf", id: 227 },
            { name: "Carrion Vine", id: 231 },
            { name: "Heart of Wolverine", id: 236 },
            { name: "Summon Dire Wolf", id: 237 },
            { name: "Solar Creeper", id: 241 },
            { name: "Spirit of Barbs", id: 246 },
            { name: "Summon Grizzly", id: 247 }
        ],
        shapeshifting: [
            { name: "Werewolf", id: 223 },
            { name: "Lycanthropy", id: 224 },
            { name: "Werebear", id: 228 },
            { name: "Feral Rage", id: 232 },
            { name: "Maul", id: 233 },
            { name: "Rabies", id: 238 },
            { name: "Fire Claws", id: 239 },
            { name: "Hunger", id: 242 },
            { name: "Shock Wave", id: 243 },
            { name: "Fury", id: 248 }
        ],
        elemental: [
            { name: "Firestorm", id: 225 },
            { name: "Molten Boulder", id: 229 },
            { name: "Arctic Blast", id: 230 },
            { name: "Fissure", id: 234 },
            { name: "Cyclone Armor", id: 235 },
            { name: "Twister", id: 240 },
            { name: "Volcano", id: 244 },
            { name: "Tornado", id: 245 },
            { name: "Flame Dash", id: 468 },
            { name: "Armageddon", id: 249 },
            { name: "Hurricane", id: 250 }
        ]
    },
    
    assassin: {
        traps: [
            { name: "Fire Blast", id: 251 },
            { name: "Shock Web", id: 256 },
            { name: "Blade Throw", id: 257 },
            { name: "Charged Bolt Sentry",  },
            { name: "Blade Fury", id: 266 },
            { name: "Lightning Sentry", id: 271 },
            { name: "Wake of Inferno", id: 272 },
            { name: "Death Sentry", id: 276 },
            { name: "Blade Shield", id: 277 }
        ],
        shadow: [
            { name: "Claw Mastery", id: 252 },
            { name: "Psychic Hammer", id: 253 },
            { name: "Burst of Speed", id: 258 },
            { name: "Weapon Block", id: 263 },
            { name: "Cloak of Shadows", id: 264 },
            { name: "Fade", id: 267 },
            { name: "Shadow Warrior", id: 268 },
            { name: "Mind Blast", id: 273 },
            { name: "Venom", id: 278 },
            { name: "Shadow Master", id: 279 }
        ],
        martial: [
            { name: "Tiger Strike", id: 254 },
            { name: "Dragon Talon", id: 255 },
            { name: "Fists of Fire", id: 259 },
            { name: "Dragon Claw", id: 260 },
            { name: "Cobra Strike", id: 265 },
            { name: "Claws of Thunder", id: 269 },
            { name: "Blades of Ice", id: 274 },
            { name: "Dragon Flight", id: 275 },
//            { name: "Phoenix Strike", id: 281 }
        ]
    }
};

// Skill group codes - these represent entire skill categories and trees
// Can be used for filtering items with bonuses to multiple skills at once
// Source: Path of Diablo wiki - https://pathofdiablo.com/wiki/Talk:Loot_Filtration_Codes#Skill_Codes

const skillGroups = {
    // All skills
    ALLSK: { name: "All Skills", code: "ALLSK" },
    
    // Class skill groups
    CLSK0: { name: "Amazon Skills", code: "CLSK0" },
    CLSK1: { name: "Sorceress Skills", code: "CLSK1" },
    CLSK2: { name: "Necromancer Skills", code: "CLSK2" },
    CLSK3: { name: "Paladin Skills", code: "CLSK3" },
    CLSK4: { name: "Barbarian Skills", code: "CLSK4" },
    CLSK5: { name: "Druid Skills", code: "CLSK5" },
    CLSK6: { name: "Assassin Skills", code: "CLSK6" },
    
    // Amazon skill tree groups
    TABSK0: { name: "Amazon: Bow & Crossbow", code: "TABSK0", class: "amazon", tree: "bow" },
    TABSK1: { name: "Amazon: Passive & Magic", code: "TABSK1", class: "amazon", tree: "passive" },
    TABSK2: { name: "Amazon: Javelin & Spear", code: "TABSK2", class: "amazon", tree: "javelin" },
    
    // Sorceress skill tree groups
    TABSK8: { name: "Sorceress: Fire", code: "TABSK8", class: "sorceress", tree: "fire" },
    TABSK9: { name: "Sorceress: Lightning", code: "TABSK9", class: "sorceress", tree: "lightning" },
    TABSK10: { name: "Sorceress: Cold", code: "TABSK10", class: "sorceress", tree: "cold" },
    
    // Necromancer skill tree groups
    TABSK16: { name: "Necromancer: Curses", code: "TABSK16", class: "necromancer", tree: "curses" },
    TABSK17: { name: "Necromancer: Poison & Bone", code: "TABSK17", class: "necromancer", tree: "poison" },
    TABSK18: { name: "Necromancer: Summoning", code: "TABSK18", class: "necromancer", tree: "summoning" },
    
    // Paladin skill tree groups
    TABSK24: { name: "Paladin: Combat", code: "TABSK24", class: "paladin", tree: "combat" },
    TABSK25: { name: "Paladin: Offensive Auras", code: "TABSK25", class: "paladin", tree: "offensive" },
    TABSK26: { name: "Paladin: Defensive Auras", code: "TABSK26", class: "paladin", tree: "defensive" },
    
    // Barbarian skill tree groups
    TABSK32: { name: "Barbarian: Combat", code: "TABSK32", class: "barbarian", tree: "combat" },
    TABSK33: { name: "Barbarian: Masteries", code: "TABSK33", class: "barbarian", tree: "masteries" },
    TABSK34: { name: "Barbarian: Warcries", code: "TABSK34", class: "barbarian", tree: "warcries" },
    
    // Druid skill tree groups
    TABSK40: { name: "Druid: Summoning", code: "TABSK40", class: "druid", tree: "summoning" },
    TABSK41: { name: "Druid: Shapeshifting", code: "TABSK41", class: "druid", tree: "shapeshifting" },
    TABSK42: { name: "Druid: Elemental", code: "TABSK42", class: "druid", tree: "elemental" },
    
    // Assassin skill tree groups
    TABSK48: { name: "Assassin: Traps", code: "TABSK48", class: "assassin", tree: "traps" },
    TABSK49: { name: "Assassin: Shadow Disciplines", code: "TABSK49", class: "assassin", tree: "shadow" },
    TABSK50: { name: "Assassin: Martial Arts", code: "TABSK50", class: "assassin", tree: "martial" }
};
