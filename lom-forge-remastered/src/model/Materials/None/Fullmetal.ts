import { MaterialProps, None } from 'model/Materials'

export const Fullmetal: MaterialProps = {
  name: 'Fullmetal',
  category: None,
  growthControl: 20,
  weaponAttributes: {
    sharpness: 55,
    weight: 41,
    force: 68,
    technique: 66
  },
  armorAttributes: {
    strike: 44,
    slash: 27,
    pierce: 99,
    magic: 27
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
  priceCoefficient: 3300
}
