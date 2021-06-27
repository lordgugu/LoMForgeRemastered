import { Aerolite } from 'model/Materials'

export const SwifteRock: Aerolite = {
  name: 'Swifte Rock',
  category: 'Aerolite',
  growthControl: 16,
  weaponAttributes: {
    sharpness: 50,
    weight: 37,
    force: 75,
    technique: 80
  },
  armorAttributes: {
    strike: 50,
    slash: 45,
    pierce: 60,
    magic: 80
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
  priceCoefficient: 1800
}
