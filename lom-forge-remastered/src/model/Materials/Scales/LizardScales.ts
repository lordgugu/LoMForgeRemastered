import { Material, Scales } from 'model/Materials'

export const LizardScales: Material = {
  id: 'LizardScales',
  name: 'LizardScales',
  category: Scales,
  growthControl: 20,
  weaponAttributes: {
    sharpness: 16,
    weight: 17,
    force: 14,
    technique: 14
  },
  armorAttributes: {
    strike: 19,
    slash: 19,
    pierce: 16,
    magic: 8
  },
  resistances: {
    wisp: 7,
    shade: 9,
    dryad: 8,
    aura: 8,
    sala: 7,
    gnome: 8,
    jinn: 8,
    undine: 9
  },
  priceCoefficient: 240
}
