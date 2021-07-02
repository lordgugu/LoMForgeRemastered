import { Hide, MaterialProps } from 'model/Materials'

export const GatorSkin: MaterialProps = {
  originalName: 'GatorSkin',
  category: Hide,
  growthControl: 12,
  weaponAttributes: {
    sharpness: 18,
    weight: 1,
    force: 1,
    technique: 1
  },
  armorAttributes: {
    strike: 36,
    slash: 14,
    pierce: 21,
    magic: 18
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 7,
    aura: 9,
    sala: 9,
    gnome: 8,
    jinn: 8,
    undine: 6
  },
  priceCoefficient: 180
}
