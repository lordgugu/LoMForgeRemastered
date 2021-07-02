import { MaterialProps, Stone } from 'model/Materials'

export const PedanStone: MaterialProps = {
  originalName: 'PedanStone',
  category: Stone,
  growthControl: 24,
  weaponAttributes: {
    sharpness: 36,
    weight: 7,
    force: 64,
    technique: 50
  },
  armorAttributes: {
    strike: 21,
    slash: 27,
    pierce: 36,
    magic: 45
  },
  resistances: {
    wisp: 7,
    shade: 8,
    dryad: 9,
    aura: 7,
    sala: 7,
    gnome: 7,
    jinn: 11,
    undine: 7
  },
  priceCoefficient: 1350
}
