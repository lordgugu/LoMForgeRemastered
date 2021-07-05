import { Fabric, Material } from 'model/Materials'

export const SultansSilk: Material = {
  id: "SultansSilk",
  name: "Sultan'sSilk",
  category: Fabric,
  growthControl: 10,
  weaponAttributes: {
    sharpness: 28,
    weight: 1,
    force: 1,
    technique: 1
  },
  armorAttributes: {
    strike: 14,
    slash: 14,
    pierce: 14,
    magic: 14
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
  priceCoefficient: 90
}
