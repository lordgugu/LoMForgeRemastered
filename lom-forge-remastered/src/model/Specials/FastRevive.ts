import { NymphOfOrchards, Spring, Unicorn } from 'model/Cards'
import { Pendant, Ring } from 'model/Equipment'
import { Special } from 'model/Specials'

export const FastRevive: Special = {
  id: 'FastRevive',
  name: 'Fast Revive',
  effect: ['Reduces the time necessary for the wearer to revive'],
  notes: [
    'When this ability is acquired through the Unicorn card, requires that the Unicorn card be the top-most visible card granting a special ability'
  ],
  relatedArmors: () => [Ring, Pendant],
  relatedCards: () => [NymphOfOrchards, Unicorn, Spring]
}
