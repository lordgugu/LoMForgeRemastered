import { MaterialProps, Metal } from 'model/Materials'

export const VizelGold: MaterialProps = {
  originalName: 'VizelGold',
  remasteredName: 'Beiser Gold',
  category: Metal,
  growthControl: 16,
  weaponAttributes: {
    sharpness: 35,
    weight: 35,
    force: 35,
    technique: 35
  },
  armorAttributes: {
    strike: 35,
    slash: 35,
    pierce: 35,
    magic: 35
  },
  resistances: {
    wisp: 7,
    shade: 9,
    dryad: 9,
    aura: 9,
    sala: 9,
    gnome: 9,
    jinn: 9,
    undine: 9
  },
  priceCoefficient: 1200
}
