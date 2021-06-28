import { MaterialProps, Stone } from 'model/Materials'

export const Obsidian: MaterialProps = {
  name: 'Obsidian',
  category: Stone,
  growthControl: 32,
  weaponAttributes: {
    sharpness: 24,
    weight: 4,
    force: 43,
    technique: 33
  },
  armorAttributes: {
    strike: 14,
    slash: 18,
    pierce: 24,
    magic: 30
  },
  resistances: {
    wisp: 8,
    shade: 6,
    dryad: 9,
    aura: 7,
    sala: 7,
    gnome: 6,
    jinn: 10,
    undine: 8
  },
  priceCoefficient: 660
}
