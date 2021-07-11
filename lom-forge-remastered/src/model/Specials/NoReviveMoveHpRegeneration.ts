import { HeavensScale } from 'model/Cards/World'
import { AllEquipment } from 'model/Gear/Equipment'
import { Special } from 'model/Specials'

export const NoReviveMoveHpRegeneration: Special = {
  id: 'NoReviveMoveHpRegeneration',
  name: 'No Revive + Move HP Regeneration',
  effect: ['Wearer no longer revives when they are knocked out, but recovers health while moving'],
  relatedEquipment: () => AllEquipment,
  relatedCards: () => [HeavensScale]
}
