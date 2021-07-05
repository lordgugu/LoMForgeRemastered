import { Material, None } from 'model/Materials'

export const Coral: Material = {
  id: 'Coral',
  name: 'Coral',
  category: None,
  growthControl: 12,
  weaponAttributes: {
    sharpness: 18,
    weight: 21,
    force: 14,
    technique: 12
  },
  armorAttributes: {
    strike: 23,
    slash: 9,
    pierce: 32,
    magic: 9
  },
  resistances: {
    wisp: 9,
    shade: 6,
    dryad: 7,
    aura: 7,
    sala: 9,
    gnome: 7,
    jinn: 9,
    undine: 5
  },
  priceCoefficient: 240
}
