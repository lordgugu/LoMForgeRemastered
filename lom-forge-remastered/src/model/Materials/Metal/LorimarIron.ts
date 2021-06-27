import { Metal } from 'model/Materials'

export const LorimarIron: Metal = {
  name: 'Lorimar Iron',
  category: 'Metal',
  growthControl: 16,
  weaponAttributes: {
    sharpness: 45,
    weight: 45,
    force: 45,
    technique: 45
  },
  armorAttributes: {
    strike: 45,
    slash: 45,
    pierce: 45,
    magic: 45
  },
  resistances: {
    wisp: 7,
    shade: 9,
    dryad: 9,
    aura: 9,
    sala: 9,
    gnome: 9,
    jinn: 9,
    undine: 9
  },
  priceCoefficient: 1800
}
