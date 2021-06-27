import { TopSlotPlungeAttack } from 'model/PlungeAttacks'
import { Flail } from 'model/Weapons'

export const GreenPrincess: TopSlotPlungeAttack = {
  slot: 'Top',
  name: 'Green Princess',
  weapons: [Flail],
  effects: ['Defense Up', 'Attack Gauge +'],
  cards: ['Mother of Gods']
}
