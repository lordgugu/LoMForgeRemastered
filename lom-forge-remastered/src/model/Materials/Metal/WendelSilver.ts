import { MaterialProps, Metal } from 'model/Materials'

export const WendelSilver: MaterialProps = {
  id: 5,
  originalName: 'WendelSilver',
  category: Metal,
  growthControl: 16,
  weaponAttributes: {
    sharpness: 30,
    weight: 30,
    force: 30,
    technique: 30
  },
  armorAttributes: {
    strike: 30,
    slash: 30,
    pierce: 30,
    magic: 30
  },
  resistances: {
    wisp: 9,
    shade: 7,
    dryad: 8,
    aura: 8,
    sala: 8,
    gnome: 8,
    jinn: 8,
    undine: 8
  },
  priceCoefficient: 900
}
