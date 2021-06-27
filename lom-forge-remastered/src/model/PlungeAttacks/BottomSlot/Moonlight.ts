import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'
import { Sword } from 'model/Weapons'

export const Moonlight: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  name: 'Moonlight',
  weapons: [Sword],
  effects: ['Double damage against aquatics', 'May also inflict sleep on aquatics'],
  cards: ['Moon Goddess']
}
