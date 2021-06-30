import { MaterialProps, Wood } from 'model/Materials'

export const OakWood: MaterialProps = {
  id: 12,
  originalName: 'OakWood',
  category: Wood,
  growthControl: 16,
  weaponAttributes: {
    sharpness: 10,
    weight: 6,
    force: 14,
    technique: 4
  },
  armorAttributes: {
    strike: 16,
    slash: 5,
    pierce: 7,
    magic: 9
  },
  resistances: {
    wisp: 7,
    shade: 8,
    dryad: 6,
    aura: 9,
    sala: 10,
    gnome: 7,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 150
}
