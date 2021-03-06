import { Material } from 'model/Materials'
import { Metal } from 'model/Materials/Metal'

export const WendelSilver: Material = {
  id: 'WendelSilver',
  name: 'WendelSilver',
  category: Metal,
  growthControl: 16,
  weaponAttributes: {
    sharp: 30,
    heavy: 30,
    force: 30,
    tech: 30
  },
  equipmentAttributes: {
    strike: 30,
    slash: 30,
    pierce: 30,
    magic: 30
  },
  resistances: {
    wisp: 9,
    shade: 7,
    dryad: 8,
    aura: 8,
    salamander: 8,
    gnome: 8,
    jinn: 8,
    undine: 8
  },
  priceCoefficient: 900
}
