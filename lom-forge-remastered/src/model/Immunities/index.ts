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

export type ImmunitiesContext = {
  immunities: { [immunity in Immunity]: boolean }
}

export function resetImmunities(context: ImmunitiesContext) {
  AllImmunities.forEach((immunity) => (context.immunities[immunity] = false))
}

export function setImmunities(context: ImmunitiesContext, ...immunities: Immunity[]) {
  resetImmunities(context)
  immunities.forEach((immunity) => addImmunity(context, immunity))
}

export function addImmunity(context: ImmunitiesContext, immunity: Immunity) {
  context.immunities[immunity] = true
}
