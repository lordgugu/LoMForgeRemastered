import { Shield } from 'model/Armor'
import { SpecialAbility } from 'model/SpecialAbilities'

export const StareImmunity: SpecialAbility = {
  name: 'Stare Immunity',
  requirements: [{ armors: [Shield], cards: ['Wisdom Goddess'] }],
  effect: ['Wielder is immune to stare attacks'],
  notes: []
}
