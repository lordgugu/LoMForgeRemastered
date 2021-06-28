import { ArmorProps } from 'model/Armors'

export type SpecialAbility = {
  name: string
  requirements: { armors: ArmorProps[]; cards: string[] }[]
  effect: string[]
  notes: string[]
}
