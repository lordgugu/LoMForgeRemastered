import { Material, Metal } from 'model/Materials'

export const AltenaAlloy: Material = {
  id: 'AltenaAlloy',
  name: 'AltenaAlloy',
  category: Metal,
  growthControl: 18,
  weaponAttributes: {
    sharp: 50,
    heavy: 50,
    force: 50,
    tech: 50
  },
  armorAttributes: {
    strike: 50,
    slash: 50,
    pierce: 50,
    magic: 50
  },
  resistances: {
    wisp: 10,
    shade: 10,
    dryad: 10,
    aura: 10,
    salamander: 10,
    gnome: 10,
    jinn: 10,
    undine: 10
  },
  priceCoefficient: 2250
}
