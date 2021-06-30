import { MaterialProps, Metal } from 'model/Materials'

export const ForsenaIron: MaterialProps = {
  id: 2,
  originalName: 'ForsenaIron',
  category: Metal,
  growthControl: 20,
  weaponAttributes: {
    sharpness: 15,
    weight: 15,
    force: 15,
    technique: 15
  },
  armorAttributes: {
    strike: 15,
    slash: 15,
    pierce: 15,
    magic: 15
  },
  resistances: {
    wisp: 9,
    shade: 9,
    dryad: 9,
    aura: 9,
    sala: 9,
    gnome: 9,
    jinn: 9,
    undine: 9
  },
  priceCoefficient: 300
}
