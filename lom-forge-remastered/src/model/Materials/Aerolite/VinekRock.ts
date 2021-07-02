import { Aerolite, MaterialProps } from 'model/Materials'

export const VinekRock: MaterialProps = {
  originalName: 'VinekRock',
  category: Aerolite,
  growthControl: 16,
  weaponAttributes: {
    sharpness: 30,
    weight: 22,
    force: 45,
    technique: 48
  },
  armorAttributes: {
    strike: 30,
    slash: 27,
    pierce: 36,
    magic: 48
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
  priceCoefficient: 1050
}
