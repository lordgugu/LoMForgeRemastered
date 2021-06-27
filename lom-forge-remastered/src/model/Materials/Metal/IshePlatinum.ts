import { Metal } from 'model/Materials'

export const IshePlatinum: Metal = {
  name: 'Ishe Platinum',
  category: 'Metal',
  growthControl: 16,
  weaponAttributes: {
    sharpness: 40,
    weight: 40,
    force: 40,
    technique: 40
  },
  armorAttributes: {
    strike: 40,
    slash: 40,
    pierce: 40,
    magic: 40
  },
  resistances: {
    wisp: 7,
    shade: 7,
    dryad: 8,
    aura: 8,
    sala: 8,
    gnome: 8,
    jinn: 8,
    undine: 8
  },
  priceCoefficient: 1500
}
