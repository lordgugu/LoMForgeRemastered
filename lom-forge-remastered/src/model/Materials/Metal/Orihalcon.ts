import { MaterialProps, Metal } from 'model/Materials'

export const Orihalcon: MaterialProps = {
  id: 11,
  originalName: 'Orihalcon',
  category: Metal,
  growthControl: 12,
  weaponAttributes: {
    sharpness: 28,
    weight: 28,
    force: 28,
    technique: 28
  },
  armorAttributes: {
    strike: 28,
    slash: 28,
    pierce: 28,
    magic: 28
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 7,
    aura: 10,
    sala: 7,
    gnome: 9,
    jinn: 6,
    undine: 8
  },
  priceCoefficient: 1050
}
