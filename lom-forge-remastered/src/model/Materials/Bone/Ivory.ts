import { Material } from 'model/Materials'
import { Bone } from 'model/Materials/Bone'

export const Ivory: Material = {
  id: 'Ivory',
  name: 'Ivory',
  category: Bone,
  growthControl: 20,
  weaponAttributes: {
    sharp: 28,
    heavy: 21,
    force: 24,
    tech: 24
  },
  equipmentAttributes: {
    strike: 18,
    slash: 30,
    pierce: 12,
    magic: 18
  },
  resistances: {
    wisp: 7,
    shade: 6,
    dryad: 7,
    aura: 7,
    salamander: 8,
    gnome: 6,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 240
}
