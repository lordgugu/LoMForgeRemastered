import { Material, Scales } from 'model/Materials'

export const FishScales: Material = {
  id: 'FishScales',
  name: 'FishScales',
  category: Scales,
  growthControl: 20,
  weaponAttributes: {
    sharp: 8,
    heavy: 8,
    force: 7,
    tech: 7
  },
  armorAttributes: {
    strike: 9,
    slash: 9,
    pierce: 8,
    magic: 4
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 8,
    aura: 8,
    sala: 8,
    gnome: 8,
    jinn: 8,
    undine: 6
  },
  priceCoefficient: 120
}
