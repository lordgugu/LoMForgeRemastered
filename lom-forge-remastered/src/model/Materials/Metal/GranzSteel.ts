import { Material } from 'model/Materials'
import { Metal } from 'model/Materials/Metal'

export const GranzSteel: Material = {
  id: 'GranzSteel',
  name: 'GranzSteel',
  category: Metal,
  growthControl: 24,
  weaponAttributes: {
    sharp: 20,
    heavy: 20,
    force: 20,
    tech: 20
  },
  equipmentAttributes: {
    strike: 20,
    slash: 20,
    pierce: 20,
    magic: 20
  },
  resistances: {
    wisp: 9,
    shade: 9,
    dryad: 9,
    aura: 9,
    salamander: 9,
    gnome: 9,
    jinn: 9,
    undine: 9
  },
  priceCoefficient: 600
}
