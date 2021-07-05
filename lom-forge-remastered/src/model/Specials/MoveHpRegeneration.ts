import { NymphOfTheSky } from 'model/Cards'
import { Mantle } from 'model/Equipment'
import { Special } from 'model/Specials'

export const MoveHpRegeneration: Special = {
  id: 'MoveHpRegeneration',
  name: 'Movement HP Regeneration',
  effect: ['The wearer regenerates HP in battle while they are moving'],
  relatedArmors: () => [Mantle],
  relatedCards: () => [NymphOfTheSky]
}
