import { ThunderGod } from 'model/Cards'
import { Hammer } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Mjolnir: MasterMove = {
  originalName: 'Mjolnir',
  weapons: () => [Hammer],
  effects: () => ['Salamander Damage', 'Jinn Damage', 'Attack Gauge +'],
  cards: () => [ThunderGod]
}
