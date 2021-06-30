import { MaterialProps, Wood } from 'model/Materials'

export const BaobabWood: MaterialProps = {
  id: 14,
  originalName: 'BaobabWood',
  category: Wood,
  growthControl: 24,
  weaponAttributes: {
    sharpness: 20,
    weight: 12,
    force: 28,
    technique: 8
  },
  armorAttributes: {
    strike: 32,
    slash: 10,
    pierce: 14,
    magic: 18
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
  priceCoefficient: 660
}
