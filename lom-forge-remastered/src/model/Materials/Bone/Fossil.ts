import { Bone, MaterialProps } from 'model/Materials'

export const Fossil: MaterialProps = {
  originalName: 'Fossil',
  category: Bone,
  growthControl: 20,
  weaponAttributes: {
    sharpness: 57,
    weight: 43,
    force: 48,
    technique: 48
  },
  armorAttributes: {
    strike: 36,
    slash: 60,
    pierce: 24,
    magic: 36
  },
  resistances: {
    wisp: 9,
    shade: 6,
    dryad: 8,
    aura: 8,
    sala: 10,
    gnome: 6,
    jinn: 10,
    undine: 6
  },
  priceCoefficient: 540
}
