import { Fabric } from 'model/Materials'

export const JuddHemp: Fabric = {
  name: "Judd Hemp",
  category: 'Fabric',
  growthControl: 10,
  weaponAttributes: {
    sharpness: 38,
    weight: 1,
    force: 1,
    technique: 1
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
    sala: 10,
    gnome: 7,
    jinn: 7,
    undine: 6
  },
  priceCoefficient: 150
}
