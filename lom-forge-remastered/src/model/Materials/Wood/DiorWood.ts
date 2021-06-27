import { Wood } from 'model/Materials'

export const DiorWood: Wood = {
  name: 'Dior Wood',
  category: 'Wood',
  growthControl: 10,
  weaponAttributes: {
    sharpness: 50,
    weight: 30,
    force: 70,
    technique: 20
  },
  armorAttributes: {
    strike: 80,
    slash: 25,
    pierce: 35,
    magic: 45
  },
  resistances: {
    wisp: 7,
    shade: 8,
    dryad: 5,
    aura: 9,
    sala: 10,
    gnome: 7,
    jinn: 7,
    undine: 7
  },
  priceCoefficient: 1560
}
