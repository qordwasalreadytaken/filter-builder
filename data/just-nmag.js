// NMAG Runeword Bases
// socketTier: 'premium' = tan sockets (someone wants this), 'standard' = grey (meh/common), omitted = black (junk/early)
// We're only counting things that can be a runeword base, so none with a max of one socket

        // CL7
        const nmagAmazonWeapons = [
            // Zon Spears
            { name: "Matriarchal Spear", code: "amd", quality: "elite", max_sockets: 6 },
            { name: "Matriarchal Pike", code: "ame", quality: "elite", max_sockets: 6 },
            { name: "Ceremonial Spear", code: "am8", quality: "exceptional", max_sockets: 6 },
            { name: "Ceremonial Pike", code: "am9", quality: "exceptional", max_sockets: 6 },
            { name: "Maiden Spear", code: "am3", quality: "normal", max_sockets: 6 },
            { name: "Maiden Pike", code: "am4", quality: "normal", max_sockets: 6 },
//            { name: "Maiden Javelin", code: "am5", quality: "normal", max_sockets: 0 },
//            { name: "Ceremonial Javelin", code: "ama", quality: "exceptional", max_sockets: 0 },
//            { name: "Matriarchal Javelin", code: "amf", quality: "elite", max_sockets: 0 },
            // Zon Bows
            { name: "Ashwood Bow", code: "am6", quality: "elite", max_sockets: 5, socketTier: "premium" },
            { name: "Ceremonial Bow", code: "am7", quality: "elite", max_sockets: 5, socketTier: "premium" },
            { name: "Matriarchal Bow", code: "amb", quality: "elite", max_sockets: 5, socketTier: "premium" },
            { name: "Grand Matron Bow", code: "amc", quality: "elite", max_sockets: 5, socketTier: "premium" },
            { name: "Stag Bow", code: "am1", quality: "normal", max_sockets: 5 },
            { name: "Reflex Bow", code: "am2", quality: "normal", max_sockets: 5 },
        ];
        
        // CL5
        const nmagAssassinClaws = [
            { name: "Suwayyah", code: "7ar", quality: "elite", max_sockets: 3 },
            { name: "Wrist Sword", code: "7wb", quality: "elite", max_sockets: 3 },
            { name: "War Fist", code: "7xf", quality: "elite", max_sockets: 2 },
            { name: "Battle Cestus", code: "7cs", quality: "elite", max_sockets: 2 },
            { name: "Feral Claws", code: "7lw", quality: "elite", max_sockets: 3 },
            { name: "Runic Talons", code: "7tw", quality: "elite", max_sockets: 3 },
            { name: "Scissors Suwayyah", code: "7qr", quality: "elite", max_sockets: 3 },
            { name: "Quhab", code: "9ar", quality: "exceptional", max_sockets: 3 },
            { name: "Wrist Spike", code: "9wb", quality: "exceptional", max_sockets: 2 },
            { name: "Fascia", code: "9xf", quality: "exceptional", max_sockets: 2 },
            { name: "Hand Scythe", code: "9cs", quality: "exceptional", max_sockets: 2 },
            { name: "Greater Claws", code: "9lw", quality: "exceptional", max_sockets: 3 },
            { name: "Greater Talons", code: "9tw", quality: "exceptional", max_sockets: 3 },
            { name: "Scissors Quhab", code: "9qr", quality: "exceptional", max_sockets: 3 },
            { name: "Katar", code: "ktr", quality: "normal", max_sockets: 2 },
            { name: "Wrist Blade", code: "wrb", quality: "normal", max_sockets: 2 },
            { name: "Hatchet Hands", code: "axf", quality: "normal", max_sockets: 2 },
            { name: "Cestus", code: "ces", quality: "normal", max_sockets: 2 },
            { name: "Claws", code: "clw", quality: "normal", max_sockets: 3 },
            { name: "Blade Talons", code: "btl", quality: "normal", max_sockets: 3 },
            { name: "Scissors Katar", code: "skr", quality: "normal", max_sockets: 3 },
        ];

        // CL2
        const nmagBarbarianHelms = [
            { name: "Carnage Helm", code: "bab", quality: "elite", max_sockets: 3 },
            { name: "Fury Visor", code: "bac", quality: "elite", max_sockets: 3 },
            { name: "Destroyer Helm", code: "bad", quality: "elite", max_sockets: 3 },
            { name: "Conqueror Crown", code: "bae", quality: "elite", max_sockets: 3 },
            { name: "Guardian Crown", code: "baf", quality: "elite", max_sockets: 3 },
            { name: "Jawbone Visor", code: "ba6", quality: "exceptional", max_sockets: 3 },
            { name: "Lion Helm", code: "ba7", quality: "exceptional", max_sockets: 3 },
            { name: "Rage Mask", code: "ba8", quality: "exceptional", max_sockets: 3 },
            { name: "Savage Helmet", code: "ba9", quality: "exceptional", max_sockets: 3 },
            { name: "Slayer Guard", code: "baa", quality: "exceptional", max_sockets: 3 },
            { name: "Jawbone Cap", code: "ba1", quality: "normal", max_sockets: 3 },
            { name: "Fanged Helm", code: "ba2", quality: "normal", max_sockets: 3 },
            { name: "Horned Helm", code: "ba3", quality: "normal", max_sockets: 3 },
            { name: "Assault Helmet", code: "ba4", quality: "normal", max_sockets: 3 },
            { name: "Avenger Guard", code: "ba5", quality: "normal", max_sockets: 3 },
        ];

        // CL1
        const nmagDruidPelts = [
            { name: "Blood Spirit", code: "drb", quality: "elite", max_sockets: 3 },
            { name: "Sun Spirit", code: "drc", quality: "elite", max_sockets: 3 },
            { name: "Earth Spirit", code: "drd", quality: "elite", max_sockets: 3 },
            { name: "Sky Spirit", code: "dre", quality: "elite", max_sockets: 3 },
            { name: "Alpha Helm", code: "dr6", quality: "exceptional", max_sockets: 3 },
            { name: "Griffon Headdress", code: "dr7", quality: "exceptional", max_sockets: 3 },
            { name: "Hunters Guise", code: "dr8", quality: "exceptional", max_sockets: 3 },
            { name: "Sacred Feathers", code: "dr9", quality: "exceptional", max_sockets: 3 },
            { name: "Totemic Mask", code: "dra", quality: "exceptional", max_sockets: 3 },
            { name: "Wolf Head", code: "dr1", quality: "normal", max_sockets: 3 },
            { name: "Hawk Helm", code: "dr2", quality: "normal", max_sockets: 3 },
            { name: "Antlers", code: "dr3", quality: "normal", max_sockets: 3 },
            { name: "Falcon Mask", code: "dr4", quality: "normal", max_sockets: 3 },
            { name: "Spirit Mask", code: "dr5", quality: "normal", max_sockets: 3 },
        ];

        // CL4, WP12
        const nmagNecroHeads = [
            // Heads
            { name: "Minion Skull", code: "neb", quality: "elite", max_sockets: 2 },
            { name: "Overseer Skull", code: "ned", quality: "elite", max_sockets: 2 },
            { name: "Succubae Skull", code: "nee", quality: "elite", max_sockets: 2 },
            { name: "Bloodlord Skull", code: "nef", quality: "elite", max_sockets: 2 },
            { name: "Hellspawn Skull", code: "neg", quality: "elite", max_sockets: 2 },
            { name: "Mummified Trophy", code: "ne6", quality: "exceptional", max_sockets: 2 },
            { name: "Fetish Trophy", code: "ne7", quality: "exceptional", max_sockets: 2 },
            { name: "Sexton Trophy", code: "ne8", quality: "exceptional", max_sockets: 2 },
            { name: "Cantor Trophy", code: "ne9", quality: "exceptional", max_sockets: 2 },
            { name: "Hierophant Trophy", code: "nea", quality: "exceptional", max_sockets: 2 },
            { name: "Preserved Head", code: "ne1", quality: "normal", max_sockets: 2 },
            { name: "Zombie Head", code: "ne2", quality: "normal", max_sockets: 2 },
            { name: "Unraveller Head", code: "ne3", quality: "normal", max_sockets: 2 },
            { name: "Gargoyle Head", code: "ne4", quality: "normal", max_sockets: 2 },
            { name: "Demon Head", code: "ne5", quality: "normal", max_sockets: 2 },
        ];
        const nmagNecroWands = [
            // Wands
            { name: "Polished Wand", code: "7wn", quality: "elite", max_sockets: 2 },
            { name: "Ghost Wand", code: "7yw", quality: "elite", max_sockets: 2 },
            { name: "Lich Wand", code: "7bw", quality: "elite", max_sockets: 2 },
            { name: "Unearthed Wand", code: "7gw", quality: "elite", max_sockets: 2 },
            { name: "Burnt Wand", code: "9wn", quality: "exceptional", max_sockets: 1 },
            { name: "Petrified Wand", code: "9yw", quality: "exceptional", max_sockets: 2 },
            { name: "Tomb Wand", code: "9bw", quality: "exceptional", max_sockets: 2 },
            { name: "Grave Wand", code: "9gw", quality: "exceptional", max_sockets: 2 },
//            { name: "Wand", code: "wnd", quality: "normal", max_sockets: 1 },
//            { name: "Yew Wand", code: "ywn", quality: "normal", max_sockets: 1 },
            { name: "Bone Wand", code: "bwn", quality: "normal", max_sockets: 2 },
            { name: "Grim Wand", code: "gwn", quality: "normal", max_sockets: 2 },
        ];

        // CL3, WP13
        const nmagPaladinShields = [
            // Pally Shields
            { name: "Sacred Rondache", code: "pac", quality: "elite", max_sockets: 4 },
            { name: "Sacred Targe", code: "pab", quality: "elite", max_sockets: 4 },
            { name: "Kurast Shield", code: "pad", quality: "elite", max_sockets: 4 },
            { name: "Zakarum Shield", code: "pae", quality: "elite", max_sockets: 4 },
            { name: "Vortex Shield", code: "paf", quality: "elite", max_sockets: 4 },
            { name: "Akaran Rondache", code: "pa7", quality: "exceptional", max_sockets: 4 },
            { name: "Akaran Targe", code: "pa6", quality: "exceptional", max_sockets: 4 },
            { name: "Royal Shield", code: "paa", quality: "exceptional", max_sockets: 4 },
            { name: "Protector Shield", code: "pa8", quality: "exceptional", max_sockets: 4 },
            { name: "Gilded Shield", code: "pa9", quality: "exceptional", max_sockets: 4 },
            { name: "Rondache", code: "pa2", quality: "normal", max_sockets: 4 },
            { name: "Targe", code: "pa1", quality: "normal", max_sockets: 4 },
        ];
        const nmagPaladinScepters = [
            // Scepters
            { name: "Seraph Rod", code: "7qs", quality: "elite", max_sockets: 3 },
            { name: "Mighty Scepter", code: "7sc", quality: "elite", max_sockets: 2 },
            { name: "Divine Scepter", code: "9ws", quality: "exceptional", max_sockets: 5, socketTier: "premium" },
            { name: "Holy Water Sprinkler", code: "9qs", quality: "exceptional", max_sockets: 3 },
            { name: "Rune Scepter", code: "9sc", quality: "exceptional", max_sockets: 2 },
            { name: "War Scepter", code: "wsp", quality: "normal", max_sockets: 5, socketTier: "premium" },
            { name: "Grand Scepter", code: "gsc", quality: "normal", max_sockets: 3 },
            { name: "Scepter", code: "scp", quality: "normal", max_sockets: 2 },
        ];

        // CL5, WP11
        const nmagSorcOrbsNStaves = [
            // Sorc orbs
            { name: "Dimensional Shard", code: "obf", quality: "elite", max_sockets: 3, socketTier: "premium" },
            { name: "Heavenly Stone", code: "obb", quality: "elite", max_sockets: 2 },
            { name: "Eldritch Orb", code: "obc", quality: "elite", max_sockets: 2 },
            { name: "Demon Heart", code: "obd", quality: "elite", max_sockets: 2 },
            { name: "Vortex Orb", code: "obe", quality: "elite", max_sockets: 2 },
            { name: "Swirling Crystal", code: "oba", quality: "exceptional", max_sockets: 3, socketTier: "premium" },
            { name: "Glowing Orb", code: "ob6", quality: "exceptional", max_sockets: 2 },
            { name: "Crystalline Globe", code: "ob7", quality: "exceptional", max_sockets: 2 },
            { name: "Cloudy Sphere", code: "ob8", quality: "exceptional", max_sockets: 2 },
            { name: "Sparkling Ball", code: "ob9", quality: "exceptional", max_sockets: 2 },
            { name: "Jareds Stone", code: "ob5", quality: "normal", max_sockets: 3, socketTier: "premium" },
            { name: "Eagle Orb", code: "ob1", quality: "normal", max_sockets: 2 },
            { name: "Sacred Globe", code: "ob2", quality: "normal", max_sockets: 2 },
            { name: "Smoked Sphere", code: "ob3", quality: "normal", max_sockets: 2 },
            { name: "Clasped Orb", code: "ob4", quality: "normal", max_sockets: 2 },
            // Staves
            { name: "Archon Staff", code: "6ws", quality: "elite", max_sockets: 6 },
            { name: "Elder Staff", code: "6cs", quality: "elite", max_sockets: 4 },
            { name: "Shillelagh", code: "6bs", quality: "elite", max_sockets: 4 },
            { name: "Walking Stick", code: "6ss", quality: "elite", max_sockets: 2 },
            { name: "Stalagmite", code: "6ls", quality: "elite", max_sockets: 3 },
            { name: "Rune Staff", code: "8ws", quality: "exceptional", max_sockets: 6 },
            { name: "Cedar Staff", code: "8cs", quality: "exceptional", max_sockets: 4 },
            { name: "Gothic Staff", code: "8bs", quality: "exceptional", max_sockets: 4 },
            { name: "Jo Staff", code: "8ss", quality: "exceptional", max_sockets: 2 },
            { name: "Quarterstaff", code: "8ls", quality: "exceptional", max_sockets: 3 },
            { name: "War Staff", code: "wst", quality: "normal", max_sockets: 6 },
            { name: "Gnarled Staff", code: "cst", quality: "normal", max_sockets: 4 },
            { name: "Battle Staff", code: "bst", quality: "normal", max_sockets: 4 },
            { name: "Long Staff", code: "lst", quality: "normal", max_sockets: 3 },
            { name: "Short Staff", code: "sst", quality: "normal", max_sockets: 2 },
        ];

        // WP1
        const nmagAxes = [
            // Elite
            { name: "Berserker Axe", code: "7wa", quality: "elite", max_sockets: 6, socketTier: "premium" },
            { name: "Champion Axe", code: "7ga", quality: "elite", max_sockets: 6 },
            { name: "Decapitator", code: "7bt", quality: "elite", max_sockets: 5 },
            { name: "Feral Axe", code: "7la", quality: "elite", max_sockets: 4 },
            { name: "Glorious Axe", code: "7gi", quality: "elite", max_sockets: 6 },
            { name: "Silver Edged Axe", code: "7ba", quality: "elite", max_sockets: 5 },
            { name: "Small Crescent", code: "7ax", quality: "elite", max_sockets: 4 },
            { name: "Tomahawk", code: "7ha", quality: "elite", max_sockets: 2 },
            { name: "War Spike", code: "7mp", quality: "elite", max_sockets: 6 },
            { name: "Ettin Axe", code: "72a", quality: "elite", max_sockets: 5 },
            // Exceptional
            { name: "Ancient Axe", code: "9gi", quality: "exceptional", max_sockets: 6 },
            { name: "Bearded Axe", code: "9ba", quality: "exceptional", max_sockets: 5 },
            { name: "Cleaver", code: "9ax", quality: "exceptional", max_sockets: 4 },
            { name: "Crowbill", code: "9mp", quality: "exceptional", max_sockets: 6 },
            { name: "Gothic Axe", code: "9ga", quality: "exceptional", max_sockets: 6 },
            { name: "Hatchet", code: "9ha", quality: "exceptional", max_sockets: 2 },
            { name: "Military Axe", code: "9la", quality: "exceptional", max_sockets: 4 },
            { name: "Naga", code: "9wa", quality: "exceptional", max_sockets: 6 },
            { name: "Tabar", code: "9bt", quality: "exceptional", max_sockets: 5 },
            { name: "Twin Axe", code: "92a", quality: "exceptional", max_sockets: 5 },
            // Normal
            { name: "Axe", code: "axe", quality: "normal", max_sockets: 4 },
            { name: "Battle Axe", code: "btx", quality: "normal", max_sockets: 5 },
            { name: "Broad Axe", code: "bax", quality: "normal", max_sockets: 5 },
            { name: "Double Axe", code: "2ax", quality: "normal", max_sockets: 5 },
            { name: "Giant Axe", code: "gix", quality: "normal", max_sockets: 6 },
            { name: "Great Axe", code: "gax", quality: "normal", max_sockets: 6 },
            { name: "Hand Axe", code: "hax", quality: "normal", max_sockets: 2 },
            { name: "Large Axe", code: "lax", quality: "normal", max_sockets: 4 },
            { name: "Military Pick", code: "mpi", quality: "normal", max_sockets: 6 },
            { name: "War Axe", code: "wax", quality: "normal", max_sockets: 6 },
        ];

        // WP2
        const nmagMaces = [
            // Elite
            { name: "Devil Star", code: "7mt", quality: "elite", max_sockets: 3 },
            { name: "Legendary Mallet", code: "7wh", quality: "elite", max_sockets: 4 },
            { name: "Ogre Maul", code: "7m7", quality: "elite", max_sockets: 6 },
            { name: "Reinforced Mace", code: "7ma", quality: "elite", max_sockets: 2 },
            { name: "Thunder Maul", code: "7gm", quality: "elite", max_sockets: 6 },
            { name: "Tyrant Club", code: "7sp", quality: "elite", max_sockets: 3 },
            { name: "Truncheon", code: "7cl", quality: "elite", max_sockets: 2 },
            { name: "Scourge", code: "7fl", quality: "elite", max_sockets: 5 },
            // Exceptional
            { name: "Barbed Club", code: "9sp", quality: "exceptional", max_sockets: 3 },
            { name: "Battle Hammer", code: "9wh", quality: "exceptional", max_sockets: 4 },
            { name: "Cudgel", code: "9cl", quality: "exceptional", max_sockets: 2 },
            { name: "Flanged Mace", code: "9ma", quality: "exceptional", max_sockets: 2 },
            { name: "Jagged Star", code: "9mt", quality: "exceptional", max_sockets: 3 },
            { name: "Knout", code: "9fl", quality: "exceptional", max_sockets: 5 },
            { name: "Martel de Fer", code: "9gm", quality: "exceptional", max_sockets: 6 },
            { name: "War Club", code: "9m9", quality: "exceptional", max_sockets: 6 },
            // Normal
            { name: "Club", code: "clb", quality: "normal", max_sockets: 2 },
            { name: "Flail", code: "fla", quality: "normal", max_sockets: 5 },
            { name: "Great Maul", code: "gma", quality: "normal", max_sockets: 6 },
            { name: "Mace", code: "mac", quality: "normal", max_sockets: 2 },
            { name: "Maul", code: "mau", quality: "normal", max_sockets: 6 },
            { name: "Morning Star", code: "mst", quality: "normal", max_sockets: 3 },
            { name: "Spiked Club", code: "spc", quality: "normal", max_sockets: 2 },
            { name: "War Hammer", code: "whm", quality: "normal", max_sockets: 4 },
        ];

        // WP3
        const nmagSwords = [
            // Elite
            { name: "Balrog Blade", code: "7gs", quality: "elite", max_sockets: 4 },
            { name: "Champion Sword", code: "7b7", quality: "elite", max_sockets: 4 },
            { name: "Colossus Blade", code: "7gd", quality: "elite", max_sockets: 6, socketTier: "premium" },
            { name: "Colossus Sword", code: "7fb", quality: "elite", max_sockets: 5, socketTier: "premium" },
            { name: "Conquest Sword", code: "7bs", quality: "elite", max_sockets: 4 },
            { name: "Cryptic Sword", code: "7ls", quality: "elite", max_sockets: 4 },
            { name: "Elegant Blade", code: "7sb", quality: "elite", max_sockets: 2 },
            { name: "Falcata", code: "7ss", quality: "elite", max_sockets: 2 },
            { name: "Highland Blade", code: "7cm", quality: "elite", max_sockets: 4 },
            { name: "Hydra Edge", code: "7fc", quality: "elite", max_sockets: 2 },
            { name: "Legend Sword", code: "72h", quality: "elite", max_sockets: 3 },
            { name: "Mythical Sword", code: "7wd", quality: "elite", max_sockets: 3 },
            { name: "Phase Blade", code: "7cr", quality: "elite", max_sockets: 6, socketTier: "premium" },
            // Exceptional
            { name: "Ancient Sword", code: "9wd", quality: "exceptional", max_sockets: 3 },
            { name: "Battle Sword", code: "9bs", quality: "exceptional", max_sockets: 4 },
            { name: "Cutlass", code: "9sm", quality: "exceptional", max_sockets: 2 },
            { name: "Dacian Falx", code: "9cm", quality: "exceptional", max_sockets: 4 },
            { name: "Dimensional Blade", code: "9cr", quality: "exceptional", max_sockets: 6 },
            { name: "Espandon", code: "92h", quality: "exceptional", max_sockets: 3 },
            { name: "Executioner Sword", code: "9gd", quality: "exceptional", max_sockets: 6 },
            { name: "Gothic Sword", code: "9b9", quality: "exceptional", max_sockets: 4 },
            { name: "Rune Sword", code: "9ls", quality: "exceptional", max_sockets: 4 },
            { name: "Shamshir", code: "9sb", quality: "exceptional", max_sockets: 2 },
            { name: "Tusk Sword", code: "9gs", quality: "exceptional", max_sockets: 4 },
            { name: "Tulwar", code: "9fc", quality: "exceptional", max_sockets: 2 },
            { name: "Zweihander", code: "9fb", quality: "exceptional", max_sockets: 5 },
            // Normal
            { name: "Bastard Sword", code: "bsw", quality: "normal", max_sockets: 4 },
            { name: "Broad Sword", code: "bsd", quality: "normal", max_sockets: 4 },
            { name: "Claymore", code: "clm", quality: "normal", max_sockets: 4 },
            { name: "Crystal Sword", code: "crs", quality: "normal", max_sockets: 6 },
            { name: "Falchion", code: "flc", quality: "normal", max_sockets: 2 },
            { name: "Flamberge", code: "flb", quality: "normal", max_sockets: 5 },
            { name: "Giant Sword", code: "gis", quality: "normal", max_sockets: 4 },
            { name: "Great Sword", code: "gsd", quality: "normal", max_sockets: 6 },
            { name: "Long Sword", code: "lsd", quality: "normal", max_sockets: 4 },
            { name: "Saber", code: "sbr", quality: "normal", max_sockets: 2 },
            { name: "Scimitar", code: "scm", quality: "normal", max_sockets: 2 },
            { name: "Short Sword", code: "ssd", quality: "normal", max_sockets: 2 },
            { name: "Two-handed Sword", code: "2hs", quality: "normal", max_sockets: 3 },
            { name: "War Sword", code: "wsd", quality: "normal", max_sockets: 3 },
        ];

        // WP4
        const nmagDaggers = [
            { name: "Fanged Knife", code: "7kr", quality: "elite", max_sockets: 3 },
            { name: "Legend Spike", code: "7bl", quality: "elite", max_sockets: 2 },
            { name: "Cinquedeas", code: "9kr", quality: "exceptional", max_sockets: 3 },
            { name: "Stiletto", code: "9bl", quality: "exceptional", max_sockets: 2 },
            { name: "Kris", code: "kri", quality: "normal", max_sockets: 3 },
            { name: "Blade", code: "bld", quality: "normal", max_sockets: 2 },
//            { name: "Dagger", code: "dgr", quality: "normal", max_sockets: 1 },
//            { name: "Dirk", code: "dir", quality: "normal", max_sockets: 1 },
//            { name: "Poignard", code: "9dg", quality: "exceptional", max_sockets: 1 },
//            { name: "Rondel", code: "9di", quality: "exceptional", max_sockets: 1 },
//            { name: "Bone Knife", code: "7dg", quality: "elite", max_sockets: 1 },
//            { name: "Mithril Point", code: "7di", quality: "elite", max_sockets: 1 },
        ];

        // WP7
        const nmagSpears = [
            // Elite
            { name: "Ghost Spear", code: "7st", quality: "elite", max_sockets: 6 },
            { name: "Hyperion Spear", code: "7sr", quality: "elite", max_sockets: 3 },
            { name: "Mancatcher", code: "7br", quality: "elite", max_sockets: 5 },
            { name: "Matriarchal Spear", code: "amd", quality: "elite", max_sockets: 6 },
            { name: "Stygian Pike", code: "7tr", quality: "elite", max_sockets: 4 },
            { name: "War Pike", code: "7p7", quality: "elite", max_sockets: 6, socketTier: "premium" },
            // Exceptional
            { name: "Fuscina", code: "9tr", quality: "exceptional", max_sockets: 4, req_level: 24, req_strength: 77, req_dexterity: 25 },
            { name: "Lance", code: "9p9", quality: "exceptional", max_sockets: 6 },
            { name: "War Fork", code: "9br", quality: "exceptional", max_sockets: 5 },
            { name: "War Spear", code: "9sr", quality: "exceptional", max_sockets: 3 },
            { name: "Yari", code: "9st", quality: "exceptional", max_sockets: 6 },
            // Normal
            { name: "Brandistock", code: "brn", quality: "normal", max_sockets: 5 },
            { name: "Pike", code: "pik", quality: "normal", max_sockets: 6 },
            { name: "Spear", code: "spr", quality: "normal", max_sockets: 3 },
            { name: "Spetum", code: "spt", quality: "normal", max_sockets: 6 },
            { name: "Trident", code: "tri", quality: "normal", max_sockets: 4 },
        ];

        // WP8
        const nmagPolearms = [
            // Elite
            { name: "Colossus Voulge", code: "7vo", quality: "elite", max_sockets: 4, req_level: 48, req_strength: 210, req_dexterity: 55 },
            { name: "Cryptic Axe", code: "7pa", quality: "elite", max_sockets: 5, socketTier: "premium", req_level: 59, req_strength: 165, req_dexterity: 103 },
            { name: "Giant Thresher", code: "7wc", quality: "elite", max_sockets: 6, socketTier: "premium", req_level: 66, req_strength: 188, req_dexterity: 140 },
            { name: "Great Poleaxe", code: "7h7", quality: "elite", max_sockets: 6, req_level: 63, req_strength: 179, req_dexterity: 99 },
            { name: "Mancatcher", code: "7br", quality: "elite", max_sockets: 5, socketTier: "premium", req_level: 55, req_strength: 132, req_dexterity: 134 },
            { name: "Thresher", code: "7s8", quality: "elite", max_sockets: 5, socketTier: "premium", req_level: 53, req_strength: 152, req_dexterity: 118 },
            // Exceptional
            { name: "Battle Scythe", code: "9s8", quality: "exceptional", max_sockets: 5, req_level: 25, req_strength: 82, req_dexterity: 82 },
            { name: "Bec-de-Corbin", code: "9h9", quality: "exceptional", max_sockets: 6, req_level: 25, req_strength: 133, req_dexterity: 91 },
            { name: "Bill", code: "9vo", quality: "exceptional", max_sockets: 4, req_level: 25, req_strength: 95 },
            { name: "Grim Scythe", code: "9wc", quality: "exceptional", max_sockets: 6 },
            { name: "Lance", code: "9p9", quality: "exceptional", max_sockets: 6, req_level: 25, req_strength: 110, req_dexterity: 88 },
            { name: "Partizan", code: "9pa", quality: "exceptional", max_sockets: 5, req_level: 23, req_strength: 113, req_dexterity: 67 },
            { name: "War Fork", code: "9br", quality: "exceptional", max_sockets: 5, req_level: 25, req_strength: 80, req_dexterity: 95 },
            // Normal
            { name: "Bardiche", code: "bar", quality: "normal", max_sockets: 3 },
            { name: "Brandistock", code: "brn", quality: "normal", max_sockets: 5 },
            { name: "Halberd", code: "hal", quality: "normal", max_sockets: 6, req_strength: 75, req_dexterity: 47 },
            { name: "Pike", code: "pik", quality: "normal", max_sockets: 6, req_strength: 60, req_dexterity: 45 },
            { name: "Poleaxe", code: "pax", quality: "normal", max_sockets: 5, req_strength: 62 },
            { name: "Scythe", code: "scy", quality: "normal", max_sockets: 5, req_strength: 41, req_dexterity: 41 },
            { name: "Voulge", code: "vou", quality: "normal", max_sockets: 4 },
            { name: "War Scythe", code: "wsc", quality: "normal", max_sockets: 6, req_strength: 80, req_dexterity: 80 },
        ];

        // WP9, WP10
        const nmagBows = [
            // Elite
            { name: "Blade Bow", code: "6hb", quality: "elite", max_sockets: 4 },
            { name: "Colossus Crossbow", code: "6hx", quality: "elite", max_sockets: 6 },
            { name: "Crusader Bow", code: "6l7", quality: "elite", max_sockets: 6 },
            { name: "Demon Crossbow", code: "6rx", quality: "elite", max_sockets: 5 },
            { name: "Diamond Bow", code: "6s7", quality: "elite", max_sockets: 5 },
            { name: "Gorgon Crossbow", code: "6mx", quality: "elite", max_sockets: 4 },
            { name: "Great Bow", code: "6cb", quality: "elite", max_sockets: 4 },
            { name: "Hydra Bow", code: "6lw", quality: "elite", max_sockets: 6, socketTier: "premium" },
            { name: "Pellet Bow", code: "6lx", quality: "elite", max_sockets: 3 },
            { name: "Shadow Bow", code: "6lb", quality: "elite", max_sockets: 5 },
            { name: "Spider Bow", code: "6sb", quality: "elite", max_sockets: 3 },
            { name: "Ward Bow", code: "6sw", quality: "elite", max_sockets: 5 },
            // Exceptional
            { name: "Arbalest", code: "8lx", quality: "exceptional", max_sockets: 3 },
            { name: "Ballista", code: "8hx", quality: "exceptional", max_sockets: 6 },
            { name: "Cedar Bow", code: "8lb", quality: "exceptional", max_sockets: 5 },
            { name: "Chu-Ko-Nu", code: "8rx", quality: "exceptional", max_sockets: 5 },
            { name: "Double Bow", code: "8cb", quality: "exceptional", max_sockets: 4 },
            { name: "Edge Bow", code: "8sb", quality: "exceptional", max_sockets: 3 },
            { name: "Gothic Bow", code: "8lw", quality: "exceptional", max_sockets: 6 },
            { name: "Long Siege Bow", code: "8l8", quality: "exceptional", max_sockets: 6 },
            { name: "Razor Bow", code: "8hb", quality: "exceptional", max_sockets: 4 },
            { name: "Rune Bow", code: "8sw", quality: "exceptional", max_sockets: 5 },
            { name: "Short Siege Bow", code: "8s8", quality: "exceptional", max_sockets: 5 },
            { name: "Siege Crossbow", code: "8mx", quality: "exceptional", max_sockets: 4 },
            // Normal
            { name: "Composite Bow", code: "cbw", quality: "normal", max_sockets: 4 },
            { name: "Crossbow", code: "mxb", quality: "normal", max_sockets: 4 },
            { name: "Heavy Crossbow", code: "hxb", quality: "normal", max_sockets: 6 },
            { name: "Hunters Bow", code: "hbw", quality: "normal", max_sockets: 4 },
            { name: "Light Crossbow", code: "lxb", quality: "normal", max_sockets: 3 },
            { name: "Long Battle Bow", code: "lbb", quality: "normal", max_sockets: 6 },
            { name: "Long Bow", code: "lbw", quality: "normal", max_sockets: 5 },
            { name: "Long War Bow", code: "lwb", quality: "normal", max_sockets: 6 },
            { name: "Repeating Crossbow", code: "rxb", quality: "normal", max_sockets: 5 },
            { name: "Short Battle Bow", code: "sbb", quality: "normal", max_sockets: 5 },
            { name: "Short Bow", code: "sbw", quality: "normal", max_sockets: 3 },
            { name: "Short War Bow", code: "swb", quality: "normal", max_sockets: 5 },
        ];

        // EQ2
        const nmagArmor = [
            // Elite
            { name: "Archon Plate", code: "utp", quality: "elite", max_sockets: 4, socketTier: "premium" },
            { name: "Balrog Skin", code: "upl", quality: "elite", max_sockets: 4 },
            { name: "Boneweave", code: "uhn", quality: "elite", max_sockets: 4 },
            { name: "Diamond Mail", code: "ung", quality: "elite", max_sockets: 4 },
            { name: "Dusk Shroud", code: "uui", quality: "elite", max_sockets: 4, socketTier: "premium" },
            { name: "Great Hauberk", code: "urs", quality: "elite", max_sockets: 4 },
            { name: "Hellforge Plate", code: "ult", quality: "elite", max_sockets: 4 },
            { name: "Kraken Shell", code: "uld", quality: "elite", max_sockets: 4 },
            { name: "Lacquered Plate", code: "uth", quality: "elite", max_sockets: 4 },
            { name: "Loricated Mail", code: "ucl", quality: "elite", max_sockets: 4 },
            { name: "Sacred Armor", code: "uar", quality: "elite", max_sockets: 4 },
            { name: "Scarab Husk", code: "ula", quality: "elite", max_sockets: 4 },
            { name: "Shadow Plate", code: "uul", quality: "elite", max_sockets: 4 },
            { name: "Wire Fleece", code: "utu", quality: "elite", max_sockets: 4 },
            { name: "Wyrmhide", code: "uea", quality: "elite", max_sockets: 4 },
            // Exceptional
            { name: "Chaos Armor", code: "xul", quality: "exceptional", max_sockets: 4 },
            { name: "Cuirass", code: "xrs", quality: "exceptional", max_sockets: 3 },
            { name: "Demonhide Armor", code: "xla", quality: "exceptional", max_sockets: 2 },
            { name: "Embossed Plate", code: "xth", quality: "exceptional", max_sockets: 4 },
            { name: "Ghost Armor", code: "xui", quality: "exceptional", max_sockets: 2 },
            { name: "Linked Mail", code: "xng", quality: "exceptional", max_sockets: 3 },
            { name: "Mage Plate", code: "xtp", quality: "exceptional", max_sockets: 3, socketTier: "premium" },
            { name: "Mesh Armor", code: "xhn", quality: "exceptional", max_sockets: 3 },
            { name: "Ornate Plate", code: "xar", quality: "exceptional", max_sockets: 4 },
            { name: "Russet Armor", code: "xpl", quality: "exceptional", max_sockets: 3 },
            { name: "Serpentskin Armor", code: "xea", quality: "exceptional", max_sockets: 2 },
            { name: "Sharktooth Armor", code: "xld", quality: "exceptional", max_sockets: 3 },
            { name: "Templar Coat", code: "xlt", quality: "exceptional", max_sockets: 3 },
            { name: "Tigulated Mail", code: "xcl", quality: "exceptional", max_sockets: 3 },
            { name: "Trellised Armor", code: "xtu", quality: "exceptional", max_sockets: 2 },
            // Normal
            { name: "Ancient Armor", code: "aar", quality: "normal", max_sockets: 4 },
            { name: "Breast Plate", code: "brs", quality: "normal", max_sockets: 3 },
            { name: "Chain Mail", code: "chn", quality: "normal", max_sockets: 2 },
            { name: "Field Plate", code: "fld", quality: "normal", max_sockets: 2 },
            { name: "Full Plate Mail", code: "ful", quality: "normal", max_sockets: 4 },
            { name: "Gothic Plate", code: "gth", quality: "normal", max_sockets: 4 },
            { name: "Hard Leather Armor", code: "hla", quality: "normal", max_sockets: 2 },
            { name: "Leather Armor", code: "lea", quality: "normal", max_sockets: 2 },
            { name: "Light Plate", code: "ltp", quality: "normal", max_sockets: 3 },
            { name: "Plate Mail", code: "plt", quality: "normal", max_sockets: 2 },
            { name: "Quilted Armor", code: "qui", quality: "normal", max_sockets: 2 },
            { name: "Ring Mail", code: "rng", quality: "normal", max_sockets: 3 },
            { name: "Scale Mail", code: "scl", quality: "normal", max_sockets: 2 },
            { name: "Splint Mail", code: "spl", quality: "normal", max_sockets: 2 },
            { name: "Studded Leather", code: "stu", quality: "normal", max_sockets: 2 },
        ];

        // EQ3
        const nmagShields = [
            // Elite
            { name: "Aegis", code: "uow", quality: "elite", max_sockets: 4 },
            { name: "Blade Barrier", code: "upk", quality: "elite", max_sockets: 3 },
            { name: "Heater", code: "uuc", quality: "elite", max_sockets: 2 },
            { name: "Hyperion", code: "urg", quality: "elite", max_sockets: 3 },
            { name: "Luna", code: "uml", quality: "elite", max_sockets: 2 },
            { name: "Monarch", code: "uit", quality: "elite", max_sockets: 4, socketTier: "premium" },
            { name: "Troll Nest", code: "ush", quality: "elite", max_sockets: 3 },
            { name: "Ward", code: "uts", quality: "elite", max_sockets: 4 },
            // Exceptional
            { name: "Ancient Shield", code: "xts", quality: "exceptional", max_sockets: 3 },
            { name: "Barbed Shield", code: "xpk", quality: "exceptional", max_sockets: 2 },
            { name: "Defender", code: "xuc", quality: "exceptional", max_sockets: 1 },
            { name: "Dragon Shield", code: "xit", quality: "exceptional", max_sockets: 3 },
            { name: "Grim Shield", code: "xsh", quality: "exceptional", max_sockets: 2 },
            { name: "Pavise", code: "xow", quality: "exceptional", max_sockets: 3 },
            { name: "Round Shield", code: "xml", quality: "exceptional", max_sockets: 2 },
            { name: "Scutum", code: "xrg", quality: "exceptional", max_sockets: 3 },
            // Normal
            { name: "Aerin Shield", code: "pa4", quality: "normal", max_sockets: 4 },
            { name: "Bone Shield", code: "bsh", quality: "normal", max_sockets: 2 },
            { name: "Crown Shield", code: "pa5", quality: "normal", max_sockets: 4 },
            { name: "Gothic Shield", code: "gts", quality: "normal", max_sockets: 3 },
            { name: "Heraldic Shield", code: "pa3", quality: "normal", max_sockets: 4 },
            { name: "Kite Shield", code: "kit", quality: "normal", max_sockets: 3 },
            { name: "Large Shield", code: "lrg", quality: "normal", max_sockets: 3 },
            { name: "Small Shield", code: "sml", quality: "normal", max_sockets: 2 },
            { name: "Spiked Shield", code: "spk", quality: "normal", max_sockets: 2 },
            { name: "Tower Shield", code: "tow", quality: "normal", max_sockets: 3 },
        ];

        // EQ1, EQ7
        const nmagHelms = [
            // Circlets
            { name: "Tiara", code: "ci2", quality: "exceptional", max_sockets: 3, req_level: 52 },
            { name: "Diadem", code: "ci3", quality: "elite", max_sockets: 3, req_level: 64 },
            { name: "Circlet", code: "ci0", quality: "normal", max_sockets: 2 },
            { name: "Coronet", code: "ci1", quality: "normal", max_sockets: 2 },
            // Elite
            { name: "Armet", code: "ulm", quality: "elite", max_sockets: 2 },
            { name: "Bone Visage", code: "uh9", quality: "elite", max_sockets: 3, req_level: 63, req_strength: 106 },
            { name: "Corona", code: "urn", quality: "elite", max_sockets: 3, req_level: 66, req_strength: 174 },
            { name: "Demonhead", code: "usk", quality: "elite", max_sockets: 3, req_level: 55, req_strength: 102 },
            { name: "Giant Conch", code: "uhl", quality: "elite", max_sockets: 2 },
            { name: "Hydraskull", code: "ukp", quality: "elite", max_sockets: 2 },
            { name: "Shako", code: "uap", quality: "elite", max_sockets: 2 },
            { name: "Spired Helm", code: "uhm", quality: "elite", max_sockets: 3 },
            // Exceptional
            { name: "Basinet", code: "xhl", quality: "exceptional", max_sockets: 2, req_level: 25, req_strength: 82 },
            { name: "Casque", code: "xlm", quality: "exceptional", max_sockets: 2 },
            { name: "Death Mask", code: "xsk", quality: "exceptional", max_sockets: 3, req_level: 25, req_strength: 55 },
            { name: "Grim Helm", code: "xh9", quality: "exceptional", max_sockets: 2 },
            { name: "Grand Crown", code: "xrn", quality: "exceptional", max_sockets: 3, req_level: 25, req_strength: 103 },
            { name: "Sallet", code: "xkp", quality: "exceptional", max_sockets: 2 },
            { name: "War Hat", code: "xap", quality: "exceptional", max_sockets: 2 },
            { name: "Winged Helm", code: "xhm", quality: "exceptional", max_sockets: 3 },
            // Normal
            { name: "Bone Helm", code: "bhm", quality: "normal", max_sockets: 2, req_strength: 25 },
            { name: "Cap", code: "cap", quality: "normal", max_sockets: 2 },
            { name: "Crown", code: "crn", quality: "normal", max_sockets: 3, req_strength: 55 },
            { name: "Full Helm", code: "fhl", quality: "normal", max_sockets: 2 },
            { name: "Great Helm", code: "ghm", quality: "normal", max_sockets: 3, req_strength: 63 },
            { name: "Helm", code: "hlm", quality: "normal", max_sockets: 2, req_strength: 26 },
            { name: "Mask", code: "msk", quality: "normal", max_sockets: 3, req_strength: 23 },
            { name: "Skull Cap", code: "skp", quality: "normal", max_sockets: 2 },
        ];

