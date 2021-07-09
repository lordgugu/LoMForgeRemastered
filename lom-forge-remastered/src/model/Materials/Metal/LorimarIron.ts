import { Material } from 'model/Materials'
import { Metal } from 'model/Materials/Metal'

export const LorimarIron: Material = {
  id: 'LorimarIron',
  name: 'LorimarIron',
  category: Metal,
  growthControl: 16,
  weaponAttributes: {
    sharp: 45,
    heavy: 45,
    force: 45,
    tech: 45
  },
  equipmentAttributes: {
    strike: 45,
    slash: 45,
    pierce: 45,
    magic: 45
  },
  resistances: {
    wisp: 7,
    shade: 9,
    dryad: 9,
    aura: 9,
    salamander: 9,
    gnome: 9,
    jinn: 9,
    undine: 9
  },
  priceCoefficient: 1800
}
