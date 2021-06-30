import { MaterialProps, Scales } from 'model/Materials'

export const SnakeScales: MaterialProps = {
  id: 30,
  originalName: 'SnakeScales',
  category: Scales,
  growthControl: 20,
  weaponAttributes: {
    sharpness: 24,
    weight: 26,
    force: 21,
    technique: 21
  },
  armorAttributes: {
    strike: 28,
    slash: 28,
    pierce: 24,
    magic: 12
  },
  resistances: {
    wisp: 9,
    shade: 7,
    dryad: 8,
    aura: 8,
    sala: 8,
    gnome: 7,
    jinn: 8,
    undine: 7
  },
  priceCoefficient: 360
}
