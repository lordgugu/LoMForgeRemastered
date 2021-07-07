import { Fabric, Material } from 'model/Materials'

export const ToppleCotton: Material = {
  id: 'ToppleCotton',
  name: 'ToppleCotton',
  category: Fabric,
  growthControl: 10,
  weaponAttributes: {
    sharp: 18,
    heavy: 1,
    force: 1,
    tech: 1
  },
  armorAttributes: {
    strike: 9,
    slash: 9,
    pierce: 9,
    magic: 9
  },
  resistances: {
    wisp: 6,
    shade: 8,
    dryad: 6,
    aura: 10,
    salamander: 10,
    gnome: 7,
    jinn: 7,
    undine: 6
  },
  priceCoefficient: 30
}
