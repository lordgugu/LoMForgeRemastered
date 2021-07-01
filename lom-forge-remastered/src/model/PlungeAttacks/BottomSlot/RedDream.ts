import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'
import { Flail } from 'model/Equipment'

export const RedDream: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Red Dream',
  weapons: [Flail],
  effects: ['Power Up', 'Attack Gauge +'],
  cards: ['Mother of Gods']
}
