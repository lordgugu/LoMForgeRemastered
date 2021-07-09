import { Material, Scales } from 'model/Materials'

export const SnakeScales: Material = {
  id: 'SnakeScales',
  name: 'SnakeScales',
  category: Scales,
  growthControl: 20,
  weaponAttributes: {
    sharp: 24,
    heavy: 26,
    force: 21,
    tech: 21
  },
  equipmentAttributes: {
    strike: 28,
    slash: 28,
    pierce: 24,
    magic: 12
  },
  resistances: {
    wisp: 9,
    shade: 7,
    dryad: 8,
    aura: 8,
    salamander: 8,
    gnome: 7,
    jinn: 8,
    undine: 7
  },
  priceCoefficient: 360
}
