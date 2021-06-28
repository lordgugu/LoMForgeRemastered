import { MaterialProps, Metal } from 'model/Materials'

export const AltenaAlloy: MaterialProps = {
  name: 'Altena Alloy',
  category: Metal,
  growthControl: 18,
  weaponAttributes: {
    sharpness: 50,
    weight: 50,
    force: 50,
    technique: 50
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
    sala: 10,
    gnome: 10,
    jinn: 10,
    undine: 10
  },
  priceCoefficient: 2250
}
