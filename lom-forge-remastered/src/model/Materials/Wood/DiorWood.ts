import { Dryad } from 'model/Essences'
import { activateWood, Material, Wood } from 'model/Materials'

export const DiorWood: Material = {
  id: 'DiorWood',
  name: 'DiorWood',
  category: Wood,
  growthControl: 10,
  weaponAttributes: {
    sharp: 50,
    heavy: 30,
    force: 70,
    tech: 20
  },
  armorAttributes: {
    strike: 80,
    slash: 25,
    pierce: 35,
    magic: 45
  },
  resistances: {
    wisp: 7,
    shade: 8,
    dryad: 5,
    aura: 9,
    sala: 10,
    gnome: 7,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 1560,
  activate: activateWood,
  relatedEssences: () => [Dryad]
}
