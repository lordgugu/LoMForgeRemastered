import { WisdomGoddess } from 'model/Cards'
import { Shield } from 'model/Equipment'
import { Special } from 'model/Specials'

export const StareImmunity: Special = {
  id: 'StareImmunity',
  name: 'Stare Immunity',
  effect: ['Wielder is immune to stare attacks'],
  relatedArmors: () => [Shield],
  relatedCards: () => [WisdomGoddess]
}
