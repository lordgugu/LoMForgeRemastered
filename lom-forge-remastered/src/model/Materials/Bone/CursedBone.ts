import { Bone, Material } from 'model/Materials'

export const CursedBone: Material = {
  id: 'CursedBone',
  name: 'CursedBone',
  category: Bone,
  growthControl: 20,
  weaponAttributes: {
    sharpness: 43,
    weight: 32,
    force: 36,
    technique: 36
  },
  armorAttributes: {
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
    sala: 9,
    gnome: 7,
    jinn: 9,
    undine: 7
  },
  priceCoefficient: 270
}
