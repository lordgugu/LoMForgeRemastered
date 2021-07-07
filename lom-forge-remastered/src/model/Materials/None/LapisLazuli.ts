import { Material, None } from 'model/Materials'

export const LapisLazuli: Material = {
  id: 'LapisLazuli',
  name: 'LapisLazuli',
  category: None,
  growthControl: 8,
  weaponAttributes: {
    sharp: 2,
    heavy: 2,
    force: 2,
    tech: 2
  },
  armorAttributes: {
    strike: 1,
    slash: 1,
    pierce: 1,
    magic: 50
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
  priceCoefficient: 4500
}
