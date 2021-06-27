import { Aerolite } from 'model/Materials'

export const NemesisRock: Aerolite = {
  name: 'Nemesis Rock',
  category: 'Aerolite',
  growthControl: 16,
  weaponAttributes: {
    sharpness: 40,
    weight: 30,
    force: 60,
    technique: 64
  },
  armorAttributes: {
    strike: 40,
    slash: 36,
    pierce: 48,
    magic: 64
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
  priceCoefficient: 1500
}
