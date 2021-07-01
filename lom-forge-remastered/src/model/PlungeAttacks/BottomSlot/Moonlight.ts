import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'
import { Sword } from 'model/Equipment'

export const Moonlight: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Moonlight',
  weapons: [Sword],
  effects: ['Double damage against aquatics', 'May also inflict sleep on aquatics'],
  cards: ['Moon Goddess']
}
