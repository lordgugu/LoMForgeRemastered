import { Wood } from 'model/Materials'

export const AshWood: Wood = {
  name: 'Ash Wood',
  category: 'Wood',
  growthControl: 11,
  weaponAttributes: {
    sharpness: 30,
    weight: 18,
    force: 42,
    technique: 12
  },
  armorAttributes: {
    strike: 48,
    slash: 15,
    pierce: 21,
    magic: 27
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
  priceCoefficient: 1050
}
