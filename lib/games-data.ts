export interface Game {
  id: number
  title: string
  slug: string
  category: string
  description: string
  longDescription: string
  features: string[]
  platforms: string[]
  releaseDate: string
  developer: string
  publisher: string
  rating: string
  systemRequirements?: {
    minimum: {
      os: string
      processor: string
      memory: string
      graphics: string
      storage: string
    }
    recommended: {
      os: string
      processor: string
      memory: string
      graphics: string
      storage: string
    }
  }
  screenshots: number[]
}

export const games: Game[] = [
  {
    id: 1,
    title: "Cyber Assault",
    slug: "cyber-assault",
    category: "Action / FPS",
    description:
      "A fast-paced first-person shooter set in a dystopian cyberpunk future where players battle against rogue AI and corporate mercenaries.",
    longDescription:
      "Cyber Assault is a high-octane first-person shooter that thrusts players into a dystopian cyberpunk future where megacorporations rule with an iron fist and rogue AI threatens humanity's existence. As an elite operative with cutting-edge cybernetic enhancements, you'll navigate neon-lit streets, towering skyscrapers, and underground facilities, engaging in intense firefights against corporate mercenaries and AI-controlled drones.\n\nThe game features a robust progression system that allows players to upgrade their cybernetic implants, unlock new abilities, and customize their arsenal of futuristic weapons. With a branching narrative that responds to player choices, each playthrough offers a unique experience with multiple possible endings.\n\nThe multiplayer mode includes team-based objectives, deathmatch arenas, and a unique 'Infiltration' mode where players must hack into enemy systems while defending their own.",
    features: [
      "Immersive single-player campaign with branching storylines",
      "Extensive cybernetic upgrade system",
      "Arsenal of customizable futuristic weapons",
      "Dynamic environments with destructible elements",
      "Competitive and cooperative multiplayer modes",
      "Ray-traced lighting and advanced particle effects",
      "Adaptive AI that learns from player tactics",
    ],
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    releaseDate: "2023",
    developer: "RockRex Games",
    publisher: "RockRex Entertainment",
    rating: "M (Mature)",
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 1060 6GB / AMD RX 580",
        storage: "50 GB available space",
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-10700K / AMD Ryzen 7 3700X",
        memory: "16 GB RAM",
        graphics: "NVIDIA RTX 3060 / AMD RX 6700 XT",
        storage: "50 GB SSD",
      },
    },
    screenshots: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    title: "Fantasy Realms",
    slug: "fantasy-realms",
    category: "RPG / Adventure",
    description:
      "An epic open-world RPG where players explore vast magical landscapes, battle mythical creatures, and shape their destiny through meaningful choices.",
    longDescription:
      "Fantasy Realms is an expansive open-world role-playing game set in the mystical land of Eldoria, a realm where magic flows through every living thing and ancient prophecies are coming to life. As the Chosen One, a hero with latent magical abilities, players will embark on an epic journey across diverse landscapes—from lush enchanted forests and towering mountain ranges to scorching deserts and frozen tundras.\n\nThe game features a deep character customization system, allowing players to choose from multiple races and classes, each with unique abilities and progression paths. As you explore the world, you'll encounter a rich cast of characters, form alliances, and make enemies. Every decision you make shapes the narrative and the world around you, with multiple possible outcomes to major storylines.\n\nCombat in Fantasy Realms combines real-time action with tactical elements, allowing players to pause and plan their approach to battles. Master arcane spells, deadly weapon skills, and powerful artifacts to overcome the many challenges that await in this vast and immersive fantasy world.",
    features: [
      "Vast open world with diverse biomes and hidden secrets",
      "Deep character customization with multiple races and classes",
      "Choice-driven narrative with meaningful consequences",
      "Dynamic weather and day/night cycle affecting gameplay",
      "Crafting system for weapons, armor, and magical items",
      "Companion system with relationship development",
      "Housing and base-building mechanics",
    ],
    platforms: ["PC", "PlayStation 5", "Xbox Series X", "Nintendo Switch"],
    releaseDate: "2022",
    developer: "RockRex Games",
    publisher: "RockRex Entertainment",
    rating: "T (Teen)",
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6600 / AMD Ryzen 3 1300X",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 970 / AMD RX 570",
        storage: "70 GB available space",
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-8700K / AMD Ryzen 5 3600X",
        memory: "16 GB RAM",
        graphics: "NVIDIA RTX 2070 / AMD RX 5700 XT",
        storage: "70 GB SSD",
      },
    },
    screenshots: [1, 2, 3, 4, 5],
  },
  {
    id: 3,
    title: "Speed Demons",
    slug: "speed-demons",
    category: "Racing / Arcade",
    description:
      "An adrenaline-fueled racing game featuring customizable vehicles, destructible environments, and gravity-defying tracks across exotic locations.",
    longDescription:
      "Speed Demons is the ultimate adrenaline rush for racing enthusiasts, combining arcade-style gameplay with stunning visuals and physics-based destruction. Race through meticulously designed tracks set in exotic locations around the world, from bustling city streets and desert canyons to tropical islands and futuristic metropolises.\n\nThe game features an extensive vehicle customization system, allowing players to modify everything from performance parts and handling characteristics to visual styling and special abilities. Unlock new vehicles across various classes—from nimble sports cars and rugged off-roaders to experimental prototype vehicles with unique capabilities.\n\nSpeed Demons offers multiple game modes, including a story-driven career mode, quick races, time trials, and multiplayer competitions. The innovative track design includes dynamic weather, day/night cycles, and destructible environments that change throughout the race, ensuring no two laps are ever the same.",
    features: [
      "Over 50 customizable vehicles across multiple classes",
      "25 unique tracks with dynamic weather and time-of-day changes",
      "Destructible environments that evolve during races",
      "Physics-based collision and damage system",
      "Nitro boost and special abilities unique to each vehicle class",
      "Split-screen local multiplayer and online competitions",
      "Seasonal content updates with new tracks and vehicles",
    ],
    platforms: ["PC", "PlayStation 5", "Xbox Series X", "Mobile"],
    releaseDate: "2023",
    developer: "RockRex Games",
    publisher: "RockRex Entertainment",
    rating: "E (Everyone)",
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-6100 / AMD Ryzen 3 1200",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 960 / AMD RX 470",
        storage: "45 GB available space",
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i5-9600K / AMD Ryzen 5 3600",
        memory: "16 GB RAM",
        graphics: "NVIDIA RTX 2060 / AMD RX 5600 XT",
        storage: "45 GB SSD",
      },
    },
    screenshots: [1, 2, 3, 4, 5],
  },
  {
    id: 4,
    title: "Stellar Conquest",
    slug: "stellar-conquest",
    category: "Strategy / Sci-Fi",
    description:
      "A 4X space strategy game where players build galactic empires, research advanced technologies, and engage in diplomatic or military conquest.",
    longDescription:
      "Stellar Conquest is a deep 4X strategy game (eXplore, eXpand, eXploit, eXterminate) that puts you in control of an emerging interstellar civilization. Beginning with a single planet, you'll guide your species to the stars, colonizing new worlds, researching advanced technologies, building mighty fleets, and interacting with other alien civilizations through diplomacy or warfare.\n\nThe game features a procedurally generated galaxy with diverse star systems, planets, and anomalies to discover. Each playthrough offers a unique experience with different alien species, resources, and cosmic events. Customize your civilization with different government types, cultural traits, and ethical values that influence gameplay and available strategies.\n\nResearch dozens of technologies across multiple scientific disciplines, design your own spacecraft, manage your economy, and engage in turn-based tactical combat. Will you pursue peaceful coexistence through trade and alliances, or dominate the galaxy through military might? The choice is yours in this expansive space strategy epic.",
    features: [
      "Procedurally generated galaxies with unique star systems and planets",
      "Multiple victory conditions (Scientific, Diplomatic, Military, Economic)",
      "Deep technology research tree with branching paths",
      "Ship designer with modular components and weapon systems",
      "Complex diplomacy system with treaties, trade, and espionage",
      "Turn-based tactical space combat with strategic depth",
      "Civilization customization with unique traits and government types",
    ],
    platforms: ["PC"],
    releaseDate: "2022",
    developer: "RockRex Games",
    publisher: "RockRex Entertainment",
    rating: "E10+ (Everyone 10+)",
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-4460 / AMD Ryzen 3 1200",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 760 / AMD Radeon R9 280",
        storage: "20 GB available space",
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GTX 1660 / AMD RX 580",
        storage: "20 GB SSD",
      },
    },
    screenshots: [1, 2, 3, 4, 5],
  },
  {
    id: 5,
    title: "Mystic Puzzles",
    slug: "mystic-puzzles",
    category: "Puzzle / Adventure",
    description:
      "A beautiful puzzle adventure game where players solve intricate challenges to uncover the secrets of an ancient civilization.",
    longDescription:
      "Mystic Puzzles is a visually stunning puzzle adventure that transports players to the forgotten ruins of an ancient civilization known as the Luminari. As Professor Eleanor Clarke, a renowned archaeologist with a mysterious connection to the Luminari, you'll explore breathtaking environments filled with intricate puzzles, hidden chambers, and cryptic messages left behind by this advanced society.\n\nThe game features a variety of puzzle types that challenge different thinking skills—from spatial reasoning and pattern recognition to logic and mathematical problems. Each puzzle is seamlessly integrated into the environment and narrative, revealing more about the Luminari culture and their ultimate fate as you progress.\n\nWith its atmospheric soundtrack, detailed environments, and emotional storytelling, Mystic Puzzles offers an immersive experience that appeals to both puzzle enthusiasts and adventure game fans. The intuitive hint system ensures that players of all skill levels can enjoy the journey while still feeling the satisfaction of solving challenging puzzles.",
    features: [
      "Beautiful hand-crafted environments with stunning visual effects",
      "Diverse puzzle types requiring different problem-solving approaches",
      "Engaging narrative revealed through environmental storytelling",
      "Adaptive hint system for players of all skill levels",
      "Collectible artifacts that provide additional lore and backstory",
      "Atmospheric soundtrack that evolves with the narrative",
      "Multiple endings based on puzzle-solving approaches",
    ],
    platforms: ["PC", "Mobile", "Nintendo Switch"],
    releaseDate: "2023",
    developer: "RockRex Games",
    publisher: "RockRex Entertainment",
    rating: "E (Everyone)",
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-3220 / AMD FX-4300",
        memory: "4 GB RAM",
        graphics: "NVIDIA GTX 650 / AMD Radeon HD 7750",
        storage: "15 GB available space",
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i5-6500 / AMD Ryzen 3 2200G",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 1050 / AMD RX 560",
        storage: "15 GB SSD",
      },
    },
    screenshots: [1, 2, 3, 4, 5],
  },
  {
    id: 6,
    title: "Zombie Outbreak",
    slug: "zombie-outbreak",
    category: "Survival / Horror",
    description:
      "A tense survival horror game where players must scavenge resources, craft weapons, and survive against hordes of the undead in a post-apocalyptic world.",
    longDescription:
      "Zombie Outbreak drops players into a world ravaged by a mysterious virus that has turned most of humanity into ravenous undead creatures. As one of the few survivors with natural immunity, you must navigate through abandoned cities, desolate countryside, and underground facilities to uncover the truth behind the outbreak while fighting to stay alive.\n\nThe game emphasizes survival mechanics, requiring players to manage hunger, thirst, fatigue, and health while scavenging for limited resources. Craft weapons and tools from salvaged materials, build and fortify shelters, and make difficult moral choices when encountering other survivors who may be allies or threats.\n\nThe dynamic day/night cycle dramatically affects gameplay—during daylight hours, zombies are slower and less aggressive, allowing for more exploration and resource gathering. But when darkness falls, the infected become more numerous, faster, and more lethal, forcing players to adopt stealth tactics or prepare for intense combat situations.",
    features: [
      "Realistic survival mechanics with resource management",
      "Extensive crafting system for weapons, tools, and shelter",
      "Dynamic day/night cycle affecting zombie behavior",
      "Procedurally generated environments for high replayability",
      "Choice-driven narrative with multiple endings",
      "Realistic infection system with symptoms and treatments",
      "Cooperative multiplayer mode for up to 4 players",
    ],
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    releaseDate: "2022",
    developer: "RockRex Games",
    publisher: "RockRex Entertainment",
    rating: "M (Mature)",
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-4670K / AMD Ryzen 3 1300X",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 970 / AMD RX 570",
        storage: "40 GB available space",
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-8700K / AMD Ryzen 5 3600",
        memory: "16 GB RAM",
        graphics: "NVIDIA RTX 2060 / AMD RX 5700",
        storage: "40 GB SSD",
      },
    },
    screenshots: [1, 2, 3, 4, 5],
  },
]

export function getGameById(id: number): Game | undefined {
  return games.find((game) => game.id === id)
}

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug)
}

export const getAllGames = (): Game[] => {
  return games
}
