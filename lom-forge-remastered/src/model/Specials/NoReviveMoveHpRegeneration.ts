import { HeavensScale } from 'model/Cards'
import { AllArmors } from 'model/Equipment'
import { Special } from 'model/Specials'

export const NoReviveMoveHpRegeneration: Special = {
  id: 'NoReviveMoveHpRegeneration',
  name: 'No Revive + Move HP Regeneration',
  effect: ['Wearer no longer revives when they are knocked out, but recovers health while moving'],
  relatedArmors: () => AllArmors,
  relatedCards: () => [HeavensScale]
}
