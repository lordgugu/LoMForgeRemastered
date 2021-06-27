import { Aerolite } from 'model/Materials'

export const AnkhRock: Aerolite = {
  name: 'Ankh Rock',
  category: 'Aerolite',
  growthControl: 16,
  weaponAttributes: {
    sharpness: 25,
    weight: 18,
    force: 37,
    technique: 40
  },
  armorAttributes: {
    strike: 25,
    slash: 22,
    pierce: 30,
    magic: 40
  },
  resistances: {
    wisp: 7,
    shade: 8,
    dryad: 10,
    aura: 7,
    sala: 7,
    gnome: 8,
    jinn: 9,
    undine: 8
  },
  priceCoefficient: 660
}
