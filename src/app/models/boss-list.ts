import { Boss } from "./boss";

export class BossList {
  public static list: Boss[] = [
    {
      id: 1,
      name: "Asylum Demon",
      preReq: []
    },
    {
      id: 2,
      name: "Bell Gargoyle",
      preReq: [21]
    },
    {
      id: 3,
      name: "Capra Demon",
      preReq: [21]
    },
    {
      id: 4,
      name: "Ceaseless Discharge",
      preReq: [6]
    },
    {
      id: 5,
      name: "Centipede Demon",
      preReq: [9]
    },
    {
      id: 6,
      name: "Chaos Witch Quelaag",
      preReq: [21]
    },
    {
      id: 7,
      name: "Crossbreed Priscilla",
      preReq: [14]
    },
    {
      id: 8,
      name: "Dark Sun Gwyndolin",
      preReq: [14]
    },
    {
      id: 9,
      name: "Demon Firesage",
      preReq: [4, 17]
    },
    {
      id: 10,
      name: "Four Kings",
      preReq: [12]
    },
    {
      id: 11,
      name: "Gaping Dragon",
      preReq: [3]
    },
    {
      id: 12,
      name: "Great Grey Wolf Sif",
      preReq: [21]
    },
    {
      id: 13,
      name: "Gwyn Lord of Cinder",
      preReq: [999]
    },
    {
      id: 14,
      name: "Iron Golem",
      preReq: [2, 6]
    },
    {
      id: 15,
      name: "Moonlight Butterfly",
      preReq: [21]
    },
    {
      id: 16,
      name: "Nito",
      preReq: [17, 18]
    },
    {
      id: 17,
      name: "Ornstein and Smough",
      preReq: [14]
    },
    {
      id: 18,
      name: "Pinwheel",
      preReq: [1]
    },
    {
      id: 19,
      name: "Seath the Scaleless",
      preReq: [17]
    },
    {
      id: 20,
      name: "Stray Demon",
      preReq: [1]
    },
    {
      id: 21,
      name: "Taurus Demon",
      preReq: [1]
    },
    {
      id: 22,
      name: "The Bed of Chaos",
      preReq: [4, 17]
    },
    {
      id: 23,
      name: "Artorias the Abysswalker",
      preReq: [26]
    },
    {
      id: 24,
      name: "Black Dragon Kalameet",
      preReq: [26]
    },
    {
      id: 25,
      name: "Manus, Father of the Abyss",
      preReq: [23]
    },
    {
      id: 26,
      name: "Sanctuary Guardian",
      preReq: [17]
    }
  ]
}
