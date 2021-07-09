import { Material } from 'model/Materials'
import { Bone } from 'model/Materials/Bone'

export const CursedBone: Material = {
  id: 'CursedBone',
  name: 'CursedBone',
  category: Bone,
  growthControl: 20,
  weaponAttributes: {
    sharp: 43,
    heavy: 32,
    force: 36,
    tech: 36
  },
  equipmentAttributes: {
    strike: 27,
    slash: 45,
    pierce: 18,
    magic: 27
  },
  resistances: {
    wisp: 9,
    shade: 5,
    dryad: 9,
    aura: 7,
    salamander: 9,
    gnome: 7,
    jinn: 9,
    undine: 7
  },
  priceCoefficient: 270
}
