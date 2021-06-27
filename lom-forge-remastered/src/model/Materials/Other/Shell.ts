import { Other } from 'model/Materials'

export const Shell: Other = {
  name: 'Shell',
  category: undefined,
  growthControl: 14,
  weaponAttributes: {
    sharpness: 20,
    weight: 24,
    force: 16,
    technique: 14
  },
  armorAttributes: {
    strike: 26,
    slash: 10,
    pierce: 36,
    magic: 10
  },
  resistances: {
    wisp: 8,
    shade: 7,
    dryad: 9,
    aura: 8,
    sala: 9,
    gnome: 7,
    jinn: 9,
    undine: 6
  },
  priceCoefficient: 90
}
