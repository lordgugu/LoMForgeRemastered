import { Material, Metal } from 'model/Materials'

export const LaurentSilver: Material = {
  id: 'LaurentSilver',
  originalName: 'LorantSilver',
  remasteredName: 'Laurent Silver',
  category: Metal,
  growthControl: 12,
  weaponAttributes: {
    sharpness: 25,
    weight: 25,
    force: 25,
    technique: 25
  },
  armorAttributes: {
    strike: 25,
    slash: 25,
    pierce: 25,
    magic: 25
  },
  resistances: {
    wisp: 8,
    shade: 6,
    dryad: 7,
    aura: 7,
    sala: 7,
    gnome: 7,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 750
}