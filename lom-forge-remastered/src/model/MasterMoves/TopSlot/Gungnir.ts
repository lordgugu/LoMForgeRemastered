import { RulerOfTheSky } from 'model/Cards'
import { Spear } from 'model/Equipment'
import { TopSlotMasterMove } from 'model/MasterMoves'

export const Gungnir: TopSlotMasterMove = {
  slot: 'Top',
  originalName: 'Gungnir',
  weapons: () => [Spear],
  effects: () => ['Spirit Up', 'Attack Gauge +'],
  cards: () => [RulerOfTheSky]
}
