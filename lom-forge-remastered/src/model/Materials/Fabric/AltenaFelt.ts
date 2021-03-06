import { Material } from 'model/Materials'
import { Fabric } from 'model/Materials/Fabric'

export const AltenaFelt: Material = {
  id: 'AltenaFelt',
  name: 'AltenaFelt',
  category: Fabric,
  growthControl: 10,
  weaponAttributes: {
    sharp: 48,
    heavy: 1,
    force: 1,
    tech: 1
  },
  equipmentAttributes: {
    strike: 24,
    slash: 24,
    pierce: 24,
    magic: 24
  },
  resistances: {
    wisp: 7,
    shade: 7,
    dryad: 7,
    aura: 9,
    salamander: 10,
    gnome: 7,
    jinn: 7,
    undine: 6
  },
  priceCoefficient: 300
}
