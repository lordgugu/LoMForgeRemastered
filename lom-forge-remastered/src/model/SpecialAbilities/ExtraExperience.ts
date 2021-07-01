import { Shoes } from 'model/Equipment'
import { SpecialAbility } from 'model/SpecialAbilities'

export const ExtraExperience: SpecialAbility = {
  originalName: 'Extra Experience',
  requirements: [{ armors: [Shoes], cards: ['Spirit (Shoes)'] }],
  effect: ['Earn more Experience in battle'],
  notes: []
}
