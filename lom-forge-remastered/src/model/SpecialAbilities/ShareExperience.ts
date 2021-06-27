import { Ring } from 'model/Armor'
import { SpecialAbility } from 'model/SpecialAbilities'

export const ShareExperience: SpecialAbility = {
  name: 'Share Experience',
  requirements: [{ armors: [Ring], cards: ['Fertility Goddess'] }],
  effect: ['Splits experience earned with other party members'],
  notes: []
}
