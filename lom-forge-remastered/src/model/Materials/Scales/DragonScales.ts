import { Material, Scales } from 'model/Materials'

export const DragonScales: Material = {
  id: 'DragonScales',
  name: 'DragonScales',
  category: Scales,
  growthControl: 14,
  weaponAttributes: {
    sharpness: 60,
    weight: 66,
    force: 54,
    technique: 54
  },
  armorAttributes: {
    strike: 72,
    slash: 72,
    pierce: 60,
    magic: 30
  },
  resistances: {
    wisp: 7,
    shade: 7,
    dryad: 7,
    aura: 7,
    sala: 6,
    gnome: 7,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 3000
}
