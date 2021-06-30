import { Fabric, MaterialProps } from 'model/Materials'

export const ToppleCotton: MaterialProps = {
  id: 36,
  originalName: 'ToppleCotton',
  category: Fabric,
  growthControl: 10,
  weaponAttributes: {
    sharpness: 18,
    weight: 1,
    force: 1,
    technique: 1
  },
  armorAttributes: {
    strike: 9,
    slash: 9,
    pierce: 9,
    magic: 9
  },
  resistances: {
    wisp: 6,
    shade: 8,
    dryad: 6,
    aura: 10,
    sala: 10,
    gnome: 7,
    jinn: 7,
    undine: 6
  },
  priceCoefficient: 30
}
