import { MaterialProps, Wood } from 'model/Materials'

export const MapleWood: MaterialProps = {
  originalName: 'MapleWood',
  category: Wood,
  growthControl: 12,
  weaponAttributes: {
    sharpness: 35,
    weight: 21,
    force: 49,
    technique: 14
  },
  armorAttributes: {
    strike: 56,
    slash: 17,
    pierce: 24,
    magic: 31
  },
  resistances: {
    wisp: 7,
    shade: 8,
    dryad: 6,
    aura: 9,
    sala: 10,
    gnome: 7,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 1200
}
