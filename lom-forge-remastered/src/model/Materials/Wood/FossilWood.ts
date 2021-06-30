import { MaterialProps, Wood } from 'model/Materials'

export const FossilWood: MaterialProps = {
  id: 19,
  originalName: 'FossilWood',
  category: Wood,
  growthControl: 22,
  weaponAttributes: {
    sharpness: 40,
    weight: 24,
    force: 56,
    technique: 16
  },
  armorAttributes: {
    strike: 64,
    slash: 20,
    pierce: 28,
    magic: 36
  },
  resistances: {
    wisp: 7,
    shade: 6,
    dryad: 6,
    aura: 9,
    sala: 10,
    gnome: 6,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 1500
}
