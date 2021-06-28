import { Pendant, Ring } from 'model/Armors'
import { SpecialAbility } from 'model/SpecialAbilities'

export const AutoRevive: SpecialAbility = {
  name: 'Auto-Revive',
  requirements: [{ armors: [Pendant, Ring], cards: ['Phoenix', 'Volcano'] }],
  effect: ['Immediately revives the wearer when they are knocked out'],
  notes: [
    'Each revival consumes a Phoenix card',
    'If no visible Phoenix cards remain, the ability is lost',
    'Requires that the Phoenix card be the top-most visible card granting a special ability'
  ]
}
