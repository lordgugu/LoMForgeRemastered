import { Aerolite, MaterialProps } from 'model/Materials'

export const HalleyRock: MaterialProps = {
  id: 41,
  originalName: 'HalleyRock',
  category: Aerolite,
  growthControl: 16,
  weaponAttributes: {
    sharpness: 20,
    weight: 15,
    force: 30,
    technique: 32
  },
  armorAttributes: {
    strike: 20,
    slash: 18,
    pierce: 24,
    magic: 32
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
  priceCoefficient: 600
}
