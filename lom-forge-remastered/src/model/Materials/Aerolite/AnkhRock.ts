import { Salamander } from 'model/Essences'
import { ActiveMaterial } from 'model/Materials'
import { activateAerolite, Aerolite } from 'model/Materials/Aerolite'

export const AnkhRock: ActiveMaterial = {
  id: 'AnkhRock',
  name: 'AnkhRock',
  category: Aerolite,
  growthControl: 16,
  weaponAttributes: {
    sharp: 25,
    heavy: 18,
    force: 37,
    tech: 40
  },
  equipmentAttributes: {
    strike: 25,
    slash: 22,
    pierce: 30,
    magic: 40
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
  priceCoefficient: 660,
  activate: activateAerolite,
  relatedEssences: () => [Salamander]
}
