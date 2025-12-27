dataSetVersion = "2025-12-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Species",
    key: "species",
    tooltip: "Check this to restrict to characters of a particular species.",
    checked: true,
    sub: [
      { name: "Human", tooltip: "Includes all human characters (e.g. Rose, Dirk, Harry). Includes Yiffy.", key: "human" },
      { name: "Troll", tooltip: "Includes all troll characters (e.g. Terezi, Vrissy, Swifer)", key: "troll" },
      { name: "Cherub", tooltip: "Includes all cherub characters (e.g. all three Calliopes)", key: "cherub" },
      { name: "Nymph", tooltip: "Includes all nymph characters (e.g. Ly'lac, Meemaw, Dagger)", key: "nymph" },
      { name: "Satyr", tooltip: "Includes all satyr characters (e.g. Swiss, CT, TC)", key: "satyr" },
      { name: "Carapacian", tooltip: "Includes all carapacian characters (e.g. Colluding Dunce, Bec Noir, MD)", key: "carap", checked: false },
      { name: "Consort", tooltip: "Includes all consort characters (None so far)", key: "consort", checked: false },
      { name: "Denizen", tooltip: "Includes all denizen characters (e.g. Seth)", key: "denizen", checked: false },
      { name: "Sprite", tooltip: "Includes all sprite characters (e.g. Jasprose, Davepeta, Fefeta)", key: "sprite" },
      { name: "Leprechaun", tooltip: "Includes all leprechaun characters (e.g. Crowbar, Sawbuck, Clover)", key: "leprechaun", checked: false },
      { name: "Experiment", tooltip: "Includes all of Rosebot and Ult!Dirk's experiments (not including nymphs and satrys)", key: "exp", checked: false },
      { name: "Other", tooltip: "Includes all characters that don't fit into the above groups (e.g. Mindmom, Doc Scratch)", key: "other", checked: false }
    ]
  },
  {
    name: "Filter by Story",
    key: "story",
    tooltip: "Check this to restrict to characters of a particular branch of the story.",
    checked: true,
    sub: [
      { name: "Meat", tooltip: "Only includes characters that appear in the Meat timeline. Excludes new Deltritus characters.", key: "meat" },
      { name: "Delta Session", tooltip: "Only includes characters that first appear on Deltritus (e.g. Experiments, Ly'lac, Swiss) and Shurb characters (e.g. Noir, Dunce, Seth).", key: "delta" },
      { name: "Candy", tooltip: "Only includes characters that appear in the Candy timeline. Excludes the Plot Point characters.", key: "candy" },
      { name: "Plot Point", tooltip: "Only includes characters that appear in the Plot Point.", key: "pp" },
      { name: "Fanontinuum", tooltip: "Only includes characters that appear in the Fanontinuum.", key: "fanon", checked: false },
      { name: "Catnapped", tooltip: "Only includes characters that appear in the Bonus Story Catnapped.", key: "catnap", checked: false },
      { name: "Diamonds, Dames, and Dads", tooltip: "Only includes characters that appear in the Bonus Story Diamonds, Dames, and Dads.", key: "ddd", checked: false },
      { name: "A Threat, Sensed", tooltip: "Only includes characters that appear in the Bonus Story A Threat, Sensed.", key: "threat", checked: false },
      { name: "The Influencers", tooltip: "Only includes characters that appear in the Bonus Story The Influencers.", key: "influence", checked: false }
    ]
  },
  {
    name: "Exclude Minor Characters",
    key: "minor",
    tooltip: "Check this box to exclude the characters that only appear in one scene.",
    checked: true
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Ultimate Dirk Strider",
    img: "ultdirk.png",
    opts: {
      species: ["human"],
      story: ["meat", "threat"],
      minor: false
    }
  },
  {
    name: "Jake English (Candy)",
    img: "cjake.png",
    opts: {
      species: ["human"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Brain Ghost Dirk (Candy)",
    img: "cbgd.png",
    opts: {
      species: ["human"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Jane Crocker (Candy)",
    img: "cjane.png",
    opts: {
      species: ["human"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Vriska Maryam-Lalonde",
    img: "vrissy.png",
    opts: {
      species: ["troll"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Vriska Serket",
    img: "vriska.png",
    opts: {
      species: ["troll"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Tavros Crocker",
    img: "tavvy.png",
    opts: {
      species: ["human"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Gamzee Makara",
    img: "gamzee.png",
    opts: {
      species: ["troll"],
      story: ["candy"],
      minor: true
    }
  },
  {
    name: "Harry Anderson Egbert",
    img: "harry.png",
    opts: {
      species: ["human"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Kanaya Maryam (Meat)",
    img: "mkanaya.png",
    opts: {
      species: ["troll"],
      story: ["meat"],
      minor: false
    }
  },
  {
    name: "Roxy Lalonde (Meat)",
    img: "mroxy.png",
    opts: {
      species: ["human"],
      story: ["meat"],
      minor: false
    }
  },
  {
    name: "Karkat Vantas (Meat)",
    img: "mkarkat.png",
    opts: {
      species: ["troll"],
      story: ["meat"],
      minor: false
    }
  },
  {
    name: "Rosebot",
    img: "mrose.png",
    opts: {
      species: ["human"],
      story: ["meat", "threat"],
      minor: false
    }
  },
  {
    name: "The First Experiment",
    img: "exp1.png",
    opts: {
      species: ["exp"],
      story: ["delta"],
      minor: true
    }
  },
  {
    name: "Jade Harley (Meat)",
    img: "mjade.png",
    opts: {
      species: ["human"],
      story: ["meat"],
      minor: false
    }
  },
  {
    name: "Swifer Eggmop (Candy)",
    img: "cswifer.png",
    opts: {
      species: ["troll"],
      story: ["candy"],
      minor: true
    }
  },
  {
    name: "Roxy Lalonde (Candy)",
    img: "croxy.png",
    opts: {
      species: ["human"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "John Egbert (Candy)",
    img: "cjohn.png",
    opts: {
      species: ["human"],
      story: ["meat"],
      minor: false
    }
  },
  {
    name: "Rose Lalonde (Candy)",
    img: "crose.png",
    opts: {
      species: ["human"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Kanaya Maryam (Candy)",
    img: "ckanaya.png",
    opts: {
      species: ["troll"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Alfonz",
    img: "alfonz.png",
    opts: {
      species: ["troll"],
      story: ["candy"],
      minor: true
    }
  },
  {
    name: "Jade Harley (Candy)",
    img: "cjade.png",
    opts: {
      species: ["human"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Yiffany Longstocking Lalonde Harley",
    img: "yiffy.png",
    opts: {
      species: ["human"],
      story: ["candy", "threat"],
      minor: false
    }
  },
  {
    name: "Bunny Experiment",
    img: "exp2.png",
    opts: {
      species: ["exp"],
      story: ["delta"],
      minor: true
    }
  },
  {
    name: "Dutton Experiment",
    img: "exp3.png",
    opts: {
      species: ["exp"],
      story: ["delta"],
      minor: true
    }
  },
  {
    name: "Horse Experiment",
    img: "exp4.png",
    opts: {
      species: ["exp"],
      story: ["delta"],
      minor: true
    }
  },
  {
    name: "Licker Experiment",
    img: "exp5.png",
    opts: {
      species: ["exp"],
      story: ["delta"],
      minor: true
    }
  },
  {
    name: "Foxgrub Experiment",
    img: "exp6.png",
    opts: {
      species: ["exp"],
      story: ["delta"],
      minor: true
    }
  },
  {
    name: "Octopus Experiment",
    img: "exp7.png",
    opts: {
      species: ["exp"],
      story: ["delta"],
      minor: true
    }
  },
  {
    name: "Horse Monster Experiment",
    img: "exp8.png",
    opts: {
      species: ["exp"],
      story: ["delta"],
      minor: true
    }
  },
  {
    name: "Davebot",
    img: "cdave.png",
    opts: {
      species: ["human"],
      story: ["candy", "meat"],
      minor: false
    }
  },
  {
    name: "Aradia Megido",
    img: "aradia.png",
    opts: {
      species: ["troll"],
      story: ["candy", "meat"],
      minor: false
    }
  },
  {
    name: "Sollux Captor",
    img: "sollux.png",
    opts: {
      species: ["troll"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Dead Teen Jade",
    img: "3jade.png",
    opts: {
      species: ["human"],
      story: ["candy"],
      minor: true
    }
  },
  {
    name: "CrockerCorp Goons",
    img: "ccorpgoons.png",
    opts: {
      species: ["human"],
      story: ["candy"],
      minor: true
    }
  },
  {
    name: "Dave Strider (Meat)",
    img: "mdave.png",
    opts: {
      species: ["human"],
      story: ["meat"],
      minor: false
    }
  },
  {
    name: "Calliope (Candy)",
    img: "ccallie.png",
    opts: {
      species: ["cherub"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "G'luyrb, of Portents Most Grim",
    img: "exp9.png",
    opts: {
      species: ["exp"],
      story: ["delta"],
      minor: true
    }
  },
  {
    name: "Terezi Pyrope",
    img: "terezi.png",
    opts: {
      species: ["troll"],
      story: ["meat"],
      minor: false
    }
  },
  {
    name: "John Egbert (Meat)",
    img: "mjohn.png",
    opts: {
      species: ["human"],
      story: ["meat"],
      minor: true
    }
  },
  {
    name: "Meenah Peixes",
    img: "meenah.png",
    opts: {
      species: ["troll"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "Harry's Rabbit",
    img: "harrysrabbit.png",
    opts: {
      species: ["other"],
      story: ["candy"],
      minor: true
    }
  },
  {
    name: "Alt. Calliope",
    img: "allie.png",
    opts: {
      species: ["cherub"],
      story: ["meat", "candy"],
      minor: false
    }
  },
  {
    name: "Karkat Vantas (Candy)",
    img: "ckarkat.png",
    opts: {
      species: ["troll"],
      story: ["candy"],
      minor: false
    }
  },
  {
    name: "LOBsTERs",
    img: "LOBsTERs.png",
    opts: {
      species: ["troll", "human", "carap", "consort"],
      story: ["candy"],
      minor: true
    }
  },
  {
    name: "Aradia Megido (Plot Point)",
    img: "pparadiabot.png",
    opts: {
      species: ["troll"],
      story: ["pp"],
      minor: false
    }
  },
  {
    name: "Davepetasprite^2",
    img: "davepeta.png",
    opts: {
      species: ["sprite", "human", "troll"],
      story: ["pp"],
      minor: false
    }
  },
  {
    name: "Doc Scratch",
    img: "ppscratch.png",
    opts: {
      species: ["other"],
      story: ["pp"],
      minor: false
    }
  },
  {
    name: "Erisolsprite",
    img: "erisol.png",
    opts: {
      species: ["sprite", "troll"],
      story: ["pp"],
      minor: false
    }
  },
  {
    name: "Fefetasprite",
    img: "fefeta.png",
    opts: {
      species: ["sprite", "troll"],
      story: ["pp"],
      minor: false
    }
  },
  {
    name: "Gcatavrosprite",
    img: "gcatavros.png",
    opts: {
      species: ["sprite", "troll", "other"],
      story: ["pp"],
      minor: false
    }
  }
];
