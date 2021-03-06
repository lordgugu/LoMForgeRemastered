import { Dryad } from 'model/Essences'
import { ActiveMaterial } from 'model/Materials'
import { activateWood, Wood } from 'model/Materials/Wood'

export const BaobabWood: ActiveMaterial = {
  id: 'BaobabWood',
  name: 'BaobabWood',
  category: Wood,
  growthControl: 24,
  weaponAttributes: {
    sharp: 20,
    heavy: 12,
    force: 28,
    tech: 8
  },
  equipmentAttributes: {
    strike: 32,
    slash: 10,
    pierce: 14,
    magic: 18
  },
  resistances: {
    wisp: 7,
    shade: 8,
    dryad: 6,
    aura: 9,
    salamander: 10,
    gnome: 7,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 660,
  activate: activateWood,
  relatedEssences: () => [Dryad]
}
