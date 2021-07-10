import { Salamander } from 'model/Essences'
import { ActiveMaterial } from 'model/Materials'
import { activateAerolite, Aerolite } from 'model/Materials/Aerolite'

export const VinekRock: ActiveMaterial = {
  id: 'VinekRock',
  name: 'VinekRock',
  category: Aerolite,
  growthControl: 16,
  weaponAttributes: {
    sharp: 30,
    heavy: 22,
    force: 45,
    tech: 48
  },
  equipmentAttributes: {
    strike: 30,
    slash: 27,
    pierce: 36,
    magic: 48
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
  priceCoefficient: 1050,
  activate: activateAerolite,
  relatedEssences: () => [Salamander]
}
