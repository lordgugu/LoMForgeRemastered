import { MaterialProps, Scales } from 'model/Materials'

export const FishScales: MaterialProps = {
  name: 'Fish Scales',
  category: Scales,
  growthControl: 20,
  weaponAttributes: {
    sharpness: 8,
    weight: 8,
    force: 7,
    technique: 7
  },
  armorAttributes: {
    strike: 9,
    slash: 9,
    pierce: 8,
    magic: 4
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 8,
    aura: 8,
    sala: 8,
    gnome: 8,
    jinn: 8,
    undine: 6
  },
  priceCoefficient: 120
}
