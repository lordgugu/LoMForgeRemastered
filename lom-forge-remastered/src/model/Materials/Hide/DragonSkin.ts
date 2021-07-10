import { AromaOil } from 'model/Items/Bottles'
import { Material } from 'model/Materials'
import { Hide } from 'model/Materials/Hide'

export const DragonSkin: Material = {
  id: 'DragonSkin',
  name: 'DragonSkin',
  category: Hide,
  growthControl: 20,
  weaponAttributes: {
    sharp: 35,
    heavy: 1,
    force: 1,
    tech: 1
  },
  equipmentAttributes: {
    strike: 70,
    slash: 28,
    pierce: 42,
    magic: 35
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 7,
    aura: 9,
    salamander: 5,
    gnome: 10,
    jinn: 5,
    undine: 10
  },
  priceCoefficient: 540,
  relatedItems: () => [AromaOil]
}
