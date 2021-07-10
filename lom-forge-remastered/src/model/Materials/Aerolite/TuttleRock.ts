import { Salamander } from 'model/Essences'
import { ActiveMaterial } from 'model/Materials'
import { activateAerolite, Aerolite } from 'model/Materials/Aerolite'

export const TuttleRock: ActiveMaterial = {
  id: 'TuttleRock',
  name: 'TuttleRock',
  category: Aerolite,
  growthControl: 16,
  weaponAttributes: {
    sharp: 35,
    heavy: 26,
    force: 52,
    tech: 56
  },
  equipmentAttributes: {
    strike: 35,
    slash: 31,
    pierce: 42,
    magic: 56
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
  priceCoefficient: 1260,
  activate: activateAerolite,
  relatedEssences: () => [Salamander]
}
