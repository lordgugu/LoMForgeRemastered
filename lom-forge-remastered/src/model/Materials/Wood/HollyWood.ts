import { Dryad } from 'model/Essences'
import { activateWood, Material, Wood } from 'model/Materials'

export const HollyWood: Material = {
  id: 'HollyWood',
  name: 'HollyWood',
  category: Wood,
  growthControl: 14,
  weaponAttributes: {
    sharp: 15,
    heavy: 9,
    force: 21,
    tech: 6
  },
  equipmentAttributes: {
    strike: 24,
    slash: 7,
    pierce: 10,
    magic: 13
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
  priceCoefficient: 360,
  activate: activateWood,
  relatedEssences: () => [Dryad]
}
