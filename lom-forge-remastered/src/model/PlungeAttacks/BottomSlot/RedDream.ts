import { MotherOfGods } from 'model/Cards'
import { Flail } from 'model/Equipment'
import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'

export const RedDream: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Red Dream',
  weapons: () => [Flail],
  effects: () => ['Power Up', 'Attack Gauge +'],
  cards: () => [MotherOfGods]
}
