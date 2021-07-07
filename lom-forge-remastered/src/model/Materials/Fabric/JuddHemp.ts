import { Fabric, Material } from 'model/Materials'

export const JuddHemp: Material = {
  id: 'JuddHemp',
  name: 'JuddHemp',
  category: Fabric,
  growthControl: 10,
  weaponAttributes: {
    sharp: 38,
    heavy: 1,
    force: 1,
    tech: 1
  },
  armorAttributes: {
    strike: 19,
    slash: 19,
    pierce: 19,
    magic: 19
  },
  resistances: {
    wisp: 10,
    shade: 6,
    dryad: 6,
    aura: 10,
    salamander: 10,
    gnome: 7,
    jinn: 7,
    undine: 6
  },
  priceCoefficient: 150
}
