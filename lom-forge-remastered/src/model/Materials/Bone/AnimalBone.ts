import { Bone, Material } from 'model/Materials'

export const AnimalBone: Material = {
  id: 'AnimalBone',
  name: 'AnimalBone',
  category: Bone,
  growthControl: 20,
  weaponAttributes: {
    sharp: 14,
    heavy: 10,
    force: 12,
    tech: 12
  },
  armorAttributes: {
    strike: 9,
    slash: 15,
    pierce: 6,
    magic: 9
  },
  resistances: {
    wisp: 9,
    shade: 6,
    dryad: 8,
    aura: 8,
    sala: 8,
    gnome: 8,
    jinn: 8,
    undine: 8
  },
  priceCoefficient: 60
}
