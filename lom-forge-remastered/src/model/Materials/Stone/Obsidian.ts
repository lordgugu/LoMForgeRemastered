import { Material, Stone } from 'model/Materials'

export const Obsidian: Material = {
  id: 'Obsidian',
  name: 'Obsidian',
  category: Stone,
  growthControl: 32,
  weaponAttributes: {
    sharp: 24,
    heavy: 4,
    force: 43,
    tech: 33
  },
  armorAttributes: {
    strike: 14,
    slash: 18,
    pierce: 24,
    magic: 30
  },
  resistances: {
    wisp: 8,
    shade: 6,
    dryad: 9,
    aura: 7,
    salamander: 7,
    gnome: 6,
    jinn: 10,
    undine: 8
  },
  priceCoefficient: 660
}
