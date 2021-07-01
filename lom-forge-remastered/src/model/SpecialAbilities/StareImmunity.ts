import { Shield } from 'model/Equipment'
import { SpecialAbility } from 'model/SpecialAbilities'

export const StareImmunity: SpecialAbility = {
  originalName: 'Stare Immunity',
  requirements: [{ armors: [Shield], cards: ['Wisdom Goddess'] }],
  effect: ['Wielder is immune to stare attacks'],
  notes: []
}
