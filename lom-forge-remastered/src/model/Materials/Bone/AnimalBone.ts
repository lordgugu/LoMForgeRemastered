import { Bone, MaterialProps } from 'model/Materials'

export const AnimalBone: MaterialProps = {
  originalName: 'AnimalBone',
  category: Bone,
  growthControl: 20,
  weaponAttributes: {
    sharpness: 14,
    weight: 10,
    force: 12,
    technique: 12
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
