import { Ring } from 'model/Equipment'
import { SpecialAbility } from 'model/SpecialAbilities'

export const ShareExperience: SpecialAbility = {
  originalName: 'Share Experience',
  requirements: [{ armors: [Ring], cards: ['Fertility Goddess'] }],
  effect: ['Splits experience earned with other party members'],
  notes: []
}
