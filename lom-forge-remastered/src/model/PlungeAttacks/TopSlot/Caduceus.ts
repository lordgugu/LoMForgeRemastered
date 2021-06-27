import { TopSlotPlungeAttack } from 'model/PlungeAttacks'
import { Staff } from 'model/Weapons'

export const Caduceus: TopSlotPlungeAttack = {
  slot: 'Top',
  name: 'Caduceus',
  weapons: [Staff],
  effects: ['Double damage against insects', 'May also inflict paralysis on insects'],
  cards: ['Wind God']
}
