import { ThunderGod } from 'model/Cards'
import { Hammer } from 'model/Equipment'
import { BottomSlotMasterMove } from 'model/MasterMoves'

export const Mjolnir: BottomSlotMasterMove = {
  slot: 'Bottom',
  originalName: 'Mjolnir',
  weapons: () => [Hammer],
  effects: () => ['Salamander Damage', 'Jinn Damage', 'Attack Gauge +'],
  cards: () => [ThunderGod]
}
