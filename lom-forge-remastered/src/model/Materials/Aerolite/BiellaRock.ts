import { Salamander } from 'model/Essences'
import { ActiveMaterial } from 'model/Materials'
import { activateAerolite, Aerolite } from 'model/Materials/Aerolite'

export const BiellaRock: ActiveMaterial = {
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
  equipmentAttributes: {
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
    salamander: 7,
    gnome: 8,
    jinn: 9,
    undine: 8
  },
  priceCoefficient: 1650,
  activate: activateAerolite,
  relatedEssences: () => [Salamander]
}
