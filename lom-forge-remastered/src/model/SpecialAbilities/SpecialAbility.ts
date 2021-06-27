import { ArmorProps } from 'model/Armor'

export type SpecialAbility = {
  name: string
  requirements: { armors: ArmorProps[]; cards: string[] }[]
  effect: string[]
  notes: string[]
}
