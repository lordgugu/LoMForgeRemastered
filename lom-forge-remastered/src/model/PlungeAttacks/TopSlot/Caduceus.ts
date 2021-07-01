import { TopSlotPlungeAttack } from 'model/PlungeAttacks'
import { Staff } from 'model/Equipment'

export const Caduceus: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Caduceus',
  weapons: [Staff],
  effects: ['Double damage against insects', 'May also inflict paralysis on insects'],
  cards: ['Wind God']
}
