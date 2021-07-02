import { King } from 'model/Cards'
import { Glove } from 'model/Equipment'
import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'

export const HandOfMidas: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Hand of Midas',
  weapons: () => [Glove],
  effects: () => ['Experience &rarr; Lucre', 'Attack Gauge &minus;'],
  cards: () => [King]
}
