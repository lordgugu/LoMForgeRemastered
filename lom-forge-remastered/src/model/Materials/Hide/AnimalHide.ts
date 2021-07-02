import { Hide, MaterialProps } from 'model/Materials'

export const AnimalHide: MaterialProps = {
  originalName: 'AnimalHide',
  category: Hide,
  growthControl: 8,
  weaponAttributes: {
    sharpness: 10,
    weight: 1,
    force: 1,
    technique: 1
  },
  armorAttributes: {
    strike: 20,
    slash: 8,
    pierce: 12,
    magic: 10
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 7,
    aura: 9,
    sala: 9,
    gnome: 7,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 90
}
