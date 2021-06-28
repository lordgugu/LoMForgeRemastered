import { MaterialProps, Wood } from 'model/Materials'

export const HollyWood: MaterialProps = {
  name: 'Holly Wood',
  category: Wood,
  growthControl: 14,
  weaponAttributes: {
    sharpness: 15,
    weight: 9,
    force: 21,
    technique: 6
  },
  armorAttributes: {
    strike: 24,
    slash: 7,
    pierce: 10,
    magic: 13
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
  priceCoefficient: 360
}
