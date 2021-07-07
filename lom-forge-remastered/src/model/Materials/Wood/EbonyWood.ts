import { Dryad } from 'model/Essences'
import { activateWood, Material, Wood } from 'model/Materials'

export const EbonyWood: Material = {
  id: 'EbonyWood',
  name: 'EbonyWood',
  category: Wood,
  growthControl: 24,
  weaponAttributes: {
    sharp: 25,
    heavy: 15,
    force: 35,
    tech: 10
  },
  armorAttributes: {
    strike: 40,
    slash: 12,
    pierce: 17,
    magic: 22
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
  priceCoefficient: 900,
  activate: activateWood,
  relatedEssences: () => [Dryad]
}
