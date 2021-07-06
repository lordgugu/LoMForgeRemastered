import { Dryad } from 'model/Essences'
import { activateWood, Material, Wood } from 'model/Materials'

export const BaobabWood: Material = {
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
  armorAttributes: {
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
    sala: 10,
    gnome: 7,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 660,
  activate: activateWood,
  relatedEssences: () => [Dryad]
}
