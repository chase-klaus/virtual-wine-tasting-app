export interface IWineType {
  grape?: string[],
  style: string,
  drinkingTemperature: string, 
  countries: string[], 
  dominantFlavors: string[],
  possibleFlavors: IPossibleFlavors,
}

export interface IPossibleFlavors {
  fruits: string[],
  dryFruits: string[],
  florals: string[],
  herbs: string[],
  spices: string[],
  earthFlavors: string[],
  others: string[],
}

const malbec:IWineType = {
  grape: ["Malbec"],
  style: "Red",
  drinkingTemperature: "Room Temperature",
  countries: [
    "Argentina",
    "France",
    "Chile",
    "USA",
    "South Africa",
    "Australia",
    "Italy",
  ],
  dominantFlavors: ["Plum", "Blueberry", "Vanilla", "Tobacco", "Cocoa"],
  possibleFlavors: {
    fruits: ["Cherry", "Black Raspberry"],
    dryFruits: ["Raisin", "Prune"],
    florals: ["Wild Iris"],
    herbs: ["Sage", "Yerba Mate"],
    spices: ["Cinnamon", "Baking Spices", "Milk Chocolate"],
    earthFlavors: ["Clay Pot"],
    others: [],
  },
};

const pinotnoir:IWineType = {
  grape: ["Pinot Noir"],
  style: "Red",
  drinkingTemperature: "Cellar Temperature",
  countries: [
    "Argentina",
    "France",
    "Chile",
    "USA",
    "South Africa",
    "Australia",
    "Italy",
  ],
  dominantFlavors: ["Cranberry", "Cherry", "Raspberry", "Clove", "Mushroom"],
  possibleFlavors: {
    fruits: [
      "Pomegranate",
      "Strawberry",
      "Blood Orange",
      "Plum",
      "Blueberry",
      "Plum Sauce",
    ],
    dryFruits: [],
    florals: ["Iris", "Violet", "Hibiscus", "Rose", "Potpourri"],
    herbs: ["Dried Herbes"],
    spices: [
      "Cinnamon",
      "Baking Spices",
      "Milk Chocolate",
      "Brown Sugar",
      "Cola",
      "Allspice",
    ],
    earthFlavors: [
      "Truffle",
      "Potting Soil",
      "Dried Leaves",
      "Tobacco",
      "Gun Smoke",
      "Cocoa",
    ],
    others: ["Cream", "Toasted Bread"],
  },
};

const merlot:IWineType = {
  grape: ["Merlot"],
  style: "Red",
  drinkingTemperature: "Room Temperature",
  countries: ["Spain", "France", "Chile", "USA", "Australia", "Italy"],
  dominantFlavors: [
    "Raspberry",
    "Black Cherry",
    "Sugar Plum",
    "Chocolate",
    "Cedar",
  ],
  possibleFlavors: {
    fruits: [
      "Huckleberry",
      "Red Currant",
      "Cherry",
      "Red Plum",
      "Blueberry",
      "Blackberry",
    ],
    dryFruits: ["Fig", "Fruit Cake"],
    florals: ["Violet"],
    herbs: ["Bay Leaf", "Sage", "Anise"],
    spices: [
      "Toffee",
      "Coffee",
      "Cedar",
      "Incense",
      "Baking Spices",
      "Chocolate",
      "Vanilla",
    ],
    earthFlavors: ["Clay Pot", "New Leather", "Potting Soil"],
    others: ["Cream"],
  },
};

const cabernetsauvignon: IWineType = {
  grape: ["Cabernet Sauvignon"],
  style: "Red",
  drinkingTemperature: "Room Temperatur",
  countries: [
    "France",
    "Chile",
    "USA",
    "Australia",
    "Spain",
    "Argentina",
    "Italy",
    "South Afirca",
  ],
  dominantFlavors: [
    "Black Cherry",
    "Black Currant",
    "Red Bell Pepper",
    "Baking Spices",
    "Cedar",
  ],
  possibleFlavors:{
    fruits: [
      "Cranberry",
      "Red Currant",
      "Raspberry",
      "Boysenberry",
      "Black Plum",
      "Berry Jam",
    ],
    dryFruits: ["Prune", "Fig"],
    florals: ["Violet", "Eucalyptus"],
    herbs: ["Mint", "Oregano", "Black Pepper", "Dried Herbs", "Jalapeño"],
    spices: [
      "Coffee",
      "Mocha",
      "Cocoa Nib",
      "Vanilla",
      "Nutmeg",
      "Toffee",
      "",
      "Pipe Tobacco",
    ],
    earthFlavors: [
      "Wet Gravel",
      "Graphite",
      "Pencil Lead",
      "Clay Dust",
      "Charcoal",
    ],
    others: ["Smoke", "Leather"],
  },
};

const syrah:IWineType = {
  grape: ["Syrah"],
  style: "Red",
  drinkingTemperature: "Room Temperature",
  countries: [
    "France",
    "Australia",
    "Spain",
    "Argentina",
    "South Africa",
    "USA",
    "Italy",
    "Chile",
    "Portugal",
  ],
  dominantFlavors: [
    "Blueberry",
    "Plum",
    "Milk Chocolate",
    "Tobacco",
    "Green Peppercorn",
  ],
  possibleFlavors: {
    fruits: [
      "Red Plum",
      "Red Cherry",
      "Boysenberry",
      "Black Currant",
      "Black Cherry",
      "Black Raspberry",
      "Plum Sauce",
      "Acai Berry",
      "Black Olive",
    ],
    dryFruits: ["Fruit Cake", "Dried Cranberry"],
    florals: ["Lavender", "Eucalyptus"],
    herbs: ["Sage"],
    spices: [
      "Tobacco Leaf",
      "Cardamom",
      "Star Anis",
      "Licorice",
      "Clove",
      "Vanilla",
      "Milk Chocolate",
      "Allspice",
      "Espresso",
      "Black Pepper",
    ],
    earthFlavors: ["Tar", "Graphite"],
    others: [
      "Bacon Fat",
      "Cured Meat",
      "Leather",
      "Cream",
      "Smoke",
      "Cigar Box",
    ],
  },
};

const gewürztraminer:IWineType = {
  grape: ["Gewürztraminer"],
  style: "White",
  drinkingTemperature: "Cold",
  countries: ["France", "Germany", "Italy", "Austria", "Australia", "Hungeria"],
  dominantFlavors: ["Lychee", "Rose", "Pink Grapefruit", "Tangerine", "Guava"],
  possibleFlavors: {
    fruits: [
      "Lemon Zest",
      "Orange Zest",
      "Tangerine",
      "Mirabelle",
      "White Nectarine",
    ],
    dryFruits: [""],
    florals: [""],
    herbs: ["Tarragon"],
    spices: ["Exotic Spices", "Honey", "Candid Ginger"],
    earthFlavors: ["Salt"],
    others: ["Smoke", "Oily", "Creamy"],
  },
};

const riesling:IWineType = {
  style: "White",
  drinkingTemperature: "Cold",
  countries: ["Germany", "USA", "Australia", "France", "Hungaria"],
  dominantFlavors: ["Lime", "Green Apple", "Beeswax", "Jasmine", "Petroleum"],
  possibleFlavors: {
    fruits: [
      "Lemon",
      "Citrus Zest",
      "Pink Grapefruit",
      "Green Apple",
      "Pear",
      "Nectarine",
      "Apricot",
      "Guava",
      "Mango",
      "Green Papaya",
      "Star Fruit",
      "White Cherry",
      "Strawberry",
    ],
    dryFruits: [""],
    florals: ["Jasmine"],
    herbs: ["Ginger", "Thai Basil", "Rosemary"],
    spices: ["Cinnamon", "Nutmeg", "Vanilla"],
    earthFlavors: ["Chalk", "Wet Slate"],
    others: [""],
  },
};



const WineDB = {
  malbec: malbec,
  pinotnoir: pinotnoir,
  merlot: merlot,
  cabernetsauvignon: cabernetsauvignon,
  syrah: syrah,
  gewürztraminer: gewürztraminer,
  riesling: riesling,
};

export default WineDB;
