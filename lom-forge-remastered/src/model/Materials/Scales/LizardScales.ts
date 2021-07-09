import { Material, Scales } from 'model/Materials'

export const LizardScales: Material = {
  id: 'LizardScales',
  name: 'LizardScales',
  category: Scales,
  growthControl: 20,
  weaponAttributes: {
    sharp: 16,
    heavy: 17,
    force: 14,
    tech: 14
  },
  equipmentAttributes: {
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
    salamander: 7,
    gnome: 8,
    jinn: 8,
    undine: 9
  },
  priceCoefficient: 240
}
