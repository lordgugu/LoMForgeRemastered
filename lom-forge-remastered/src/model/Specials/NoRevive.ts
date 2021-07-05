import { HeavensScale } from 'model/Cards'
import { AllArmors } from 'model/Equipment'
import { Special } from 'model/Specials'

export const NoRevive: Special = {
  id: 'NoRevive',
  name: 'No Revive',
  effect: ['Wearer no longer revives when they are knocked out'],
  relatedArmors: () => AllArmors,
  relatedCards: () => [HeavensScale]
}
