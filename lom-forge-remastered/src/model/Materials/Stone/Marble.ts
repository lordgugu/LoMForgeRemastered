import { MaterialProps, Stone } from 'model/Materials'

export const Marble: MaterialProps = {
  name: 'Marble',
  category: Stone,
  growthControl: 28,
  weaponAttributes: {
    sharpness: 12,
    weight: 2,
    force: 21,
    technique: 16
  },
  armorAttributes: {
    strike: 7,
    slash: 9,
    pierce: 12,
    magic: 15
  },
  resistances: {
    wisp: 7,
    shade: 8,
    dryad: 9,
    aura: 7,
    sala: 7,
    gnome: 6,
    jinn: 10,
    undine: 7
  },
  priceCoefficient: 300
}
