import { Hide, MaterialProps } from 'model/Materials'

export const CentaurHide: MaterialProps = {
  originalName: 'CentaurHide',
  category: Hide,
  growthControl: 20,
  weaponAttributes: {
    sharpness: 26,
    weight: 1,
    force: 1,
    technique: 1
  },
  armorAttributes: {
    strike: 42,
    slash: 20,
    pierce: 31,
    magic: 26
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 9,
    aura: 7,
    sala: 8,
    gnome: 7,
    jinn: 8,
    undine: 8
  },
  priceCoefficient: 360
}
