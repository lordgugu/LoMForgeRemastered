import { Stone } from 'model/Materials'

export const GaiasTears: Stone = {
  name: "Gaia's Tears",
  category: 'Stone',
  growthControl: 20,
  weaponAttributes: {
    sharpness: 48,
    weight: 9,
    force: 86,
    technique: 67
  },
  armorAttributes: {
    strike: 28,
    slash: 36,
    pierce: 48,
    magic: 60
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 9,
    aura: 7,
    sala: 10,
    gnome: 6,
    jinn: 10,
    undine: 6
  },
  priceCoefficient: 1950
}
