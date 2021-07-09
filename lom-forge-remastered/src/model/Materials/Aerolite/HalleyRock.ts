import { Salamander } from 'model/Essences'
import { activateAerolite, Aerolite, Material } from 'model/Materials'

export const HalleyRock: Material = {
  id: 'HalleyRock',
  name: 'HalleyRock',
  category: Aerolite,
  growthControl: 16,
  weaponAttributes: {
    sharp: 20,
    heavy: 15,
    force: 30,
    tech: 32
  },
  equipmentAttributes: {
    strike: 20,
    slash: 18,
    pierce: 24,
    magic: 32
  },
  resistances: {
    wisp: 7,
    shade: 8,
    dryad: 10,
    aura: 7,
    salamander: 7,
    gnome: 8,
    jinn: 9,
    undine: 8
  },
  priceCoefficient: 600,
  activate: activateAerolite,
  relatedEssences: () => [Salamander]
}
