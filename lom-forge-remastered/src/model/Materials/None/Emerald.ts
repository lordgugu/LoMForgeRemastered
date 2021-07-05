import { Material, None } from 'model/Materials'

export const Emerald: Material = {
  id: 'Emerald',
  name: 'Emerald',
  category: None,
  growthControl: 8,
  weaponAttributes: {
    sharpness: 2,
    weight: 2,
    force: 2,
    technique: 2
  },
  armorAttributes: {
    strike: 1,
    slash: 1,
    pierce: 1,
    magic: 50
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
  priceCoefficient: 4500
}
