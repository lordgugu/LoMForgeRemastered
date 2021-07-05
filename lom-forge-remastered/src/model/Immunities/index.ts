export type Immunity =
  | 'poison'
  | 'darkness'
  | 'paralysis'
  | 'confusion'
  | 'flameburst'
  | 'sleep'
  | 'petrification'
  | 'freeze'

export const Poison: Immunity = 'poison'
export const Darkness: Immunity = 'darkness'
export const Paralysis: Immunity = 'paralysis'
export const Confusion: Immunity = 'confusion'
export const Flameburst: Immunity = 'flameburst'
export const Sleep: Immunity = 'sleep'
export const Petrification: Immunity = 'petrification'
export const Freeze: Immunity = 'freeze'

export const AllImmunities: Immunity[] = [
  Poison,
  Darkness,
  Paralysis,
  Confusion,
  Flameburst,
  Sleep,
  Petrification,
  Freeze
]

export type Immunities = {
  immunities: { [key in Immunity]: boolean }
}

export function resetImmunities(project: Immunities) {
  AllImmunities.forEach((immunity) => (project.immunities[immunity] = false))
}

export function setImmunities(project: Immunities, ...immunities: Immunity[]) {
  resetImmunities(project)
  immunities.forEach((immunity) => addImmunity(project, immunity))
}

export function addImmunity(project: Immunities, immunity: Immunity) {
  project.immunities[immunity] = true
}
