import { Material } from 'model/Materials'
import { None } from 'model/Materials/None'

export const TortoiseShell: Material = {
  id: 'TortoiseShell',
  name: 'TortoiseShell',
  category: None,
  growthControl: 20,
  weaponAttributes: {
    sharp: 26,
    heavy: 31,
    force: 20,
    tech: 18
  },
  equipmentAttributes: {
    strike: 33,
    slash: 13,
    pierce: 46,
    magic: 13
  },
  resistances: {
    wisp: 8,
    shade: 8,
    dryad: 9,
    aura: 7,
    salamander: 9,
    gnome: 8,
    jinn: 9,
    undine: 7
  },
  priceCoefficient: 150
}
