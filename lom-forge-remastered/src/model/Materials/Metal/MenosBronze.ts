import { Material } from 'model/Materials'
import { Metal } from 'model/Materials/Metal'

export const MenosBronze: Material = {
  id: 'MenosBronze',
  originalName: 'MenosBronze',
  remasteredName: 'Menos Bronze',
  category: Metal,
  growthControl: 18,
  weaponAttributes: {
    sharp: 10,
    heavy: 10,
    force: 10,
    tech: 10
  },
  equipmentAttributes: {
    strike: 10,
    slash: 10,
    pierce: 10,
    magic: 10
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 8,
    aura: 8,
    salamander: 8,
    gnome: 8,
    jinn: 8,
    undine: 8
  },
  priceCoefficient: 150
}
