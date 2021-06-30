import { Pendant, Ring } from 'model/Armors'
import { SpecialAbility } from 'model/SpecialAbilities'

export const ExtraLucre: SpecialAbility = {
  originalName: 'Extra Lucre',
  requirements: [
    { armors: [Pendant], cards: ['Goddess of Love'] },
    { armors: [Ring], cards: ['Spirit (Housework)'] }
  ],
  effect: ['Earn more Lucre in battle'],
  notes: []
}
