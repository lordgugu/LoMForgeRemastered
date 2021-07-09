import { Dryad } from 'model/Essences'
import { activateWood, Material, Wood } from 'model/Materials'

export const OakWood: Material = {
  id: 'OakWood',
  name: 'OakWood',
  category: Wood,
  growthControl: 16,
  weaponAttributes: {
    sharp: 10,
    heavy: 6,
    force: 14,
    tech: 4
  },
  equipmentAttributes: {
    strike: 16,
    slash: 5,
    pierce: 7,
    magic: 9
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
  priceCoefficient: 150,
  activate: activateWood,
  relatedEssences: () => [Dryad]
}
