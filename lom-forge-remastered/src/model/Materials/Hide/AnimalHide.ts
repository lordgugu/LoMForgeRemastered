import { AromaOil } from 'model/Items'
import { Material } from 'model/Materials'
import { Hide } from 'model/Materials/Hide'

export const AnimalHide: Material = {
  id: 'AnimalHide',
  name: 'AnimalHide',
  category: Hide,
  growthControl: 8,
  weaponAttributes: {
    sharp: 10,
    heavy: 1,
    force: 1,
    tech: 1
  },
  equipmentAttributes: {
    strike: 20,
    slash: 8,
    pierce: 12,
    magic: 10
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 7,
    aura: 9,
    salamander: 9,
    gnome: 7,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 90,
  relatedItems: () => [AromaOil]
}
