import { Dryad } from 'model/Essences'
import { ActiveMaterial } from 'model/Materials'
import { activateWood, Wood } from 'model/Materials/Wood'

export const DiorWood: ActiveMaterial = {
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
  equipmentAttributes: {
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
    salamander: 10,
    gnome: 7,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 1560,
  activate: activateWood,
  relatedEssences: () => [Dryad]
}
