import { MaterialProps, Metal } from 'model/Materials'

export const MenosBronze: MaterialProps = {
  id: 1,
  originalName: 'MenosBronze',
  category: Metal,
  growthControl: 18,
  weaponAttributes: {
    sharpness: 10,
    weight: 10,
    force: 10,
    technique: 10
  },
  armorAttributes: {
    strike: 10,
    slash: 10,
    pierce: 10,
    magic: 10
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 8,
    aura: 8,
    sala: 8,
    gnome: 8,
    jinn: 8,
    undine: 8
  },
  priceCoefficient: 150
}
