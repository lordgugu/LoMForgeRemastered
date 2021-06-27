import { Aerolite } from 'model/Materials'

export const JacobiniRock: Aerolite = {
  name: 'Jacobini Rock',
  category: 'Aerolite',
  growthControl: 16,
  weaponAttributes: {
    sharpness: 15,
    weight: 11,
    force: 22,
    technique: 24
  },
  armorAttributes: {
    strike: 15,
    slash: 13,
    pierce: 18,
    magic: 24
  },
  resistances: {
    wisp: 7,
    shade: 8,
    dryad: 10,
    aura: 7,
    sala: 7,
    gnome: 8,
    jinn: 9,
    undine: 8
  },
  priceCoefficient: 360
}
