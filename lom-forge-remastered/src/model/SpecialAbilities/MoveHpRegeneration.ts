import { Mantle } from 'model/Equipment'
import { SpecialAbility } from 'model/SpecialAbilities'

export const MoveHpRegeneration: SpecialAbility = {
  originalName: 'Movement HP Regeneration',
  requirements: [
    {
      armors: [Mantle],
      cards: ['Nymph of the Sky']
    }
  ],
  effect: ['The wearer regenerates HP in battle while they are moving'],
  notes: []
}
