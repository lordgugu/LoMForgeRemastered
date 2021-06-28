import { Pendant, Ring } from 'model/Armors'
import { SpecialAbility } from 'model/SpecialAbilities'

export const FastRevive: SpecialAbility = {
  name: 'Fast Revive',
  requirements: [
    { armors: [Pendant, Ring], cards: ['Unicorn', 'Spring'] },
    { armors: [Ring], cards: ['Nymnph of Orchards'] }
  ],
  effect: ['Reduces the time necessary for the wearer to revive'],
  notes: [
    'When this ability is acquired through the Unicorn card, requires that the Unicorn card be the top-most visible card granting a special ability'
  ]
}
