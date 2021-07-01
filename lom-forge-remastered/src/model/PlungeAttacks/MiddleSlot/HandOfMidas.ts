import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'
import { Glove } from 'model/Equipment'

export const HandOfMidas: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Hand of Midas',
  weapons: [Glove],
  effects: ['Converts experience to Lucre', 'Attack Gauge &minus;'],
  cards: ['King']
}
