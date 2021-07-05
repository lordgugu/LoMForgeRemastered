import { Material, Metal } from 'model/Materials'

export const GranzSteel: Material = {
  id: 'GranzSteel',
  name: 'GranzSteel',
  category: Metal,
  growthControl: 24,
  weaponAttributes: {
    sharpness: 20,
    weight: 20,
    force: 20,
    technique: 20
  },
  armorAttributes: {
    strike: 20,
    slash: 20,
    pierce: 20,
    magic: 20
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
  priceCoefficient: 600
}
