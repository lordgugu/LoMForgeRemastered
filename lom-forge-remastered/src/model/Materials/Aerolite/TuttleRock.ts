import { Aerolite, MaterialProps } from 'model/Materials'

export const TuttleRock: MaterialProps = {
  name: 'Tuttle Rock',
  category: Aerolite,
  growthControl: 16,
  weaponAttributes: {
    sharpness: 35,
    weight: 26,
    force: 52,
    technique: 56
  },
  armorAttributes: {
    strike: 35,
    slash: 31,
    pierce: 42,
    magic: 56
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
  priceCoefficient: 1260
}
