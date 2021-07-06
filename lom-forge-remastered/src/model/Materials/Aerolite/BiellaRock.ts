import { Salamander } from 'model/Essences'
import { activateAerolite, Aerolite, Material } from 'model/Materials'

export const BiellaRock: Material = {
  id: 'BiellaRock',
  name: 'BiellaRock',
  category: Aerolite,
  growthControl: 16,
  weaponAttributes: {
    sharp: 45,
    heavy: 33,
    force: 67,
    tech: 72
  },
  armorAttributes: {
    strike: 45,
    slash: 40,
    pierce: 54,
    magic: 72
  },
  resistances: {
    wisp: 7,
    shade: 8,
    dryad: 10,
    aura: 7,
    sala: 7,
    gnome: 8,
    jinn: 9,
    undine: 8
  },
  priceCoefficient: 1650,
  activate: activateAerolite,
  relatedEssences: () => [Salamander]
}
