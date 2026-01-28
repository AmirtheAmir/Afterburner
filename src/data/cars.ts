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
      "Armored tactical Batmobile built for extreme urban combat.",
    imageSrc: "/images/tumbler.png",
  },
  {
    id: "delorean",
    name: "DMC 12",
    brand: "DeLorean",
    gear: "Manual",
    priceUSD: 150000,
    color: "Stainless Steel",
    details:
      "Appeared in Back to the Future (1985), Modified into a time machine by Doc Brown.",
    imageSrc: "/images/delorean.png",
  },
  {
    id: "revuelto",
    name: "Revuelto",
    brand: "Lamborghini",
    gear: "Auto",
    priceUSD: 660000,
    color: "Nero Noctis Black",
    details:
      "Hybrid V12 flagship redefining Lamborghini performance.",
    imageSrc: "/images/lamborghini.png",
  },
  {
    id: "db5",
    name: "DB5",
    brand: "Aston Martin",
    gear: "Manual",
    priceUSD: 1650000,
    color: "Silver Birch",
    details:
    "Classic British grand tourer made famous by James Bond.",
    imageSrc: "/images/aston_martin.png",
  },
  {
    id: "optimus",
    name: "Optimus Prime",
    brand: "Peterbilt 379",
    gear: "Auto",
    priceUSD: 179000,
    color: "Midnight Cyber Black",
    details:
      "Transformer leader disguised as a heavy-duty truck.",
    imageSrc: "/images/peterbilt.png",
  },
  {
    id: "testarossa",
    name: "Testarossa 1997",
    brand: "Ferrari",
    gear: "Manual",
    priceUSD: 196000,
    color: "Pearl White",
    details:
      "Famous from Miami Vice (1984 TV) driven by Sonny Crockett.",
    imageSrc: "/images/ferrari.png",
  },
  {
    id: "spinner",
    name: "Spinner",
    brand: "LAPD",
    gear: "Auto",
    priceUSD: 550000,
    color: "Dark Blue Accents",
    details:
      "Futuristic flying police vehicle which was introduced in Blade Runner.",
    imageSrc: "/images/lapd.png",
  },
  {
    id: "chevy",
    name: "SS 632 Restomod",
    brand: "Chevrolet",
    gear: "Manual",
    priceUSD: 360000,
    color: "Inferno Tangerine",
    details:
      "Classic Camaro rebuilt with modern supercharged power.",
    imageSrc: "/images/chevrolet.png",
  },
  {
    id: "mach-six",
    name: "Mach 6",
    brand: "Speed Motors",
    gear: "Manual",
    priceUSD: 2800000,
    color: "Pure White",
    details:
      "Advanced racing machine with adaptive combat technology.",
    imageSrc: "/images/speed_motor.png",
  },
  {
    id: "gt40",
    name: "GT40 Mk II",
    brand: "Ford",
    gear: "Manual",
    priceUSD: 4100000,
    color: "Fog Silver",
    details:
      "Legendary endurance racer that defeated Ferrari at Le Mans.",
    imageSrc: "/images/ford.png",
  },
  {
    id: "mustang",
    name: "Mustang Boss 429",
    brand: "Ford",
    gear: "Manual",
    priceUSD: 310000,
    color: "Obsidian Graphite",
    details:
      "Legendary muscle car built for NASCAR homologation.",
    imageSrc: "/images/ford_mustang.png",
  },
  {
    id: "humvee",
    name: "HMMWV M998",
    brand: "AM General",
    gear: "Auto",
    priceUSD: 260000,
    color: "NATO Tactical Black",
    details:
      "Military-grade off-road vehicle built for combat terrain.",
    imageSrc: "/images/humvee.png",
  },
];
