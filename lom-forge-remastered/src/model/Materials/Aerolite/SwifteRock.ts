import { Salamander } from 'model/Essences'
import { activateAerolite, Aerolite, Material } from 'model/Materials'

export const SwifteRock: Material = {
  id: 'SwifteRock',
  name: 'SwifteRock',
  category: Aerolite,
  growthControl: 16,
  weaponAttributes: {
    sharp: 50,
    heavy: 37,
    force: 75,
    tech: 80
  },
  equipmentAttributes: {
    strike: 50,
    slash: 45,
    pierce: 60,
    magic: 80
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
  priceCoefficient: 1800,
  activate: activateAerolite,
  relatedEssences: () => [Salamander]
}
