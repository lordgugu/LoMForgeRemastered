import { Other } from 'model/Materials'

export const Adamantite: Other = {
  name: 'Adamantite',
  category: undefined,
  growthControl: 20,
  weaponAttributes: {
    sharpness: 62,
    weight: 46,
    force: 93,
    technique: 99
  },
  armorAttributes: {
    strike: 62,
    slash: 31,
    pierce: 93,
    magic: 62
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
  priceCoefficient: 3600
}
