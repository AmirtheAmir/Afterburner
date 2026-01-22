// src/data/cars.ts
export type GearType = "Manual" | "Auto";

export type Car = {
  id: string;
  name: string;
  brand: string;
  gear: GearType;
  priceUSD: number;
  color: string;
  details: string;
  imageSrc: string;
};

export const cars: Car[] = [
  {
    id: "tumbler",
    name: "Batmobile Tumbler",
    brand: "Wayne Enterprises",
    gear: "Auto",
    priceUSD: 16200000,
    color: "Graphite Black",
    details:
      "Gained fame in Batman Begins (2005), Designed as a military prototype adapted by Bruce Wayne.",
    imageSrc: "/images/tumbler.png",
  },
  {
    id: "mach-five",
    name: "Mach Five",
    brand: "Speed Motors",
    gear: "Manual",
    priceUSD: 2800000,
    color: "Pure White",
    details:
      "Iconic car from Speed Racer (1967 anime, 2008 film), Known for advanced gadgets.",
    imageSrc: "/images/mach_five.png",
  },
  {
    id: "optimus",
    name: "Optimus Prime",
    brand: "Peterbilt 379",
    gear: "Auto",
    priceUSD: 179000,
    color: "Blue Gloss",
    details:
      "Appeared in Transformers (2007), Became one of cinema’s most recognizable heroic vehicles.",
    imageSrc: "/images/optimus.png",
  },
  {
    id: "delorean",
    name: "DMC-12",
    brand: "DeLorean",
    gear: "Manual",
    priceUSD: 150000,
    color: "Stainless Steel",
    details:
      "First appeared in Back to the Future (1985), Modified into a time machine by Doc Brown.",
    imageSrc: "/images/delorean.png",
  },
  {
    id: "db5",
    name: "DB5",
    brand: "Aston Martin",
    gear: "Manual",
    priceUSD: 1650000,
    color: "Silver Birch",
    details:
      "Famous from Goldfinger (1964), Became James Bond’s signature car.",
    imageSrc: "/images/aston.png",
  },
  {
    id: "testarossa",
    name: "Testarossa 1997",
    brand: "Ferrari",
    gear: "Manual",
    priceUSD: 196000,
    color: "Pearl White",
    details:
      "Famous from Miami Vice (1984 TV), later re-popularized through The Wolf of Wall Street.",
    imageSrc: "/images/ferrari.png",
  },
  {
    id: "mustang",
    name: "Mustang Boss 429",
    brand: "Ford",
    gear: "Manual",
    priceUSD: 310000,
    color: "Grabber Steel",
    details:
      "First appeared in John Wick (2014). Driven by John Wick (Keanu Reeves).",
    imageSrc: "/images/mustang.png",
  },
  {
    id: "chevy",
    name: "Chevy Camaro SS",
    brand: "Chevrolet",
    gear: "Manual",
    priceUSD: 95000,
    color: "Black Matt",
    details:
      "Appeared in multiple films; iconic as a first-gen American muscle car.",
    imageSrc: "/images/chevy.png",
  },
  {
    id: "spinner",
    name: "Spinner",
    brand: "LAPD",
    gear: "Auto",
    priceUSD: 550000,
    color: "Dark Blue Accents",
    details:
      "Introduced in Blade Runner (1982), Became a defining symbol of cyberpunk sci-fi design.",
    imageSrc: "/images/spinner.png",
  },
  {
    id: "nsx",
    name: "NSX Roadster",
    brand: "Acura",
    gear: "Auto",
    priceUSD: 170000,
    color: "Silver Gloss",
    details:
      "Featured in The Avengers (2012). Represented Tony Stark’s modern, tech-focused persona.",
    imageSrc: "/images/acura.png",
  },
  {
    id: "light-cycle",
    name: "Light Cycle 5th Gen",
    brand: "ENCOM",
    gear: "Manual",
    priceUSD: 260000,
    color: "Blue Tron",
    details:
      "Appeared in TRON: Legacy (2010), Famous for high-speed light-trail battles.",
    imageSrc: "/images/light_cycle.png",
  },
];
