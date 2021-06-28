import { Shoes } from 'model/Armors'
import { SpecialAbility } from 'model/SpecialAbilities'

export const ExtraExperience: SpecialAbility = {
  name: 'Extra Experience',
  requirements: [{ armors: [Shoes], cards: ['Spirit (Shoes)'] }],
  effect: ['Earn more Experience in battle'],
  notes: []
}
