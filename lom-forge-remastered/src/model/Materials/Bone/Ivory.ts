import { Bone } from 'model/Materials'

export const Ivory: Bone = {
  name: 'Ivory',
  category: 'Bone',
  growthControl: 20,
  weaponAttributes: {
    sharpness: 28,
    weight: 21,
    force: 24,
    technique: 24
  },
  armorAttributes: {
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
    sala: 8,
    gnome: 6,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 240
}
