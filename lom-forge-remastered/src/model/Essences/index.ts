export type InstantGrowthEssence = 'wisp' | 'shade'
export type DelayedGrowthEssence = 'dryad' | 'aura' | 'sala' | 'gnome' | 'jinn' | 'undine'
export type Essence = InstantGrowthEssence | DelayedGrowthEssence

export const Wisp: Essence = 'wisp'
export const Shade: Essence = 'shade'
export const Dryad: Essence = 'dryad'
export const Aura: Essence = 'aura'
export const Salamander: Essence = 'sala'
export const Gnome: Essence = 'gnome'
export const Jinn: Essence = 'jinn'
export const Undine: Essence = 'undine'

export type Levels = {
  [key in Essence]: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
}

export type Resistances = { [key in Essence]: number }

export type Markers = { [key in Essence]: boolean }

export type PotentialGrowth = {
  [key in DelayedGrowthEssence]: number
}
