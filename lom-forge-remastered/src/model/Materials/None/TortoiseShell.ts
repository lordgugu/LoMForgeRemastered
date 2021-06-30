import { MaterialProps, None } from 'model/Materials'

export const TortoiseShell: MaterialProps = {
  id: 51,
  originalName: 'TortoiseShell',
  category: None,
  growthControl: 20,
  weaponAttributes: {
    sharpness: 26,
    weight: 31,
    force: 20,
    technique: 18
  },
  armorAttributes: {
    strike: 33,
    slash: 13,
    pierce: 46,
    magic: 13
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 9,
    aura: 7,
    sala: 9,
    gnome: 8,
    jinn: 9,
    undine: 7
  },
  priceCoefficient: 150
}
