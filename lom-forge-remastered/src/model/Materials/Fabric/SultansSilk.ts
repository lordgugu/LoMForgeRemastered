import { Material } from 'model/Materials'
import { Fabric } from 'model/Materials/Fabric'

export const SultansSilk: Material = {
  id: "SultansSilk",
  name: "Sultan'sSilk",
  category: Fabric,
  growthControl: 10,
  weaponAttributes: {
    sharp: 28,
    heavy: 1,
    force: 1,
    tech: 1
  },
  equipmentAttributes: {
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
    salamander: 10,
    gnome: 7,
    jinn: 7,
    undine: 6
  },
  priceCoefficient: 90
}
