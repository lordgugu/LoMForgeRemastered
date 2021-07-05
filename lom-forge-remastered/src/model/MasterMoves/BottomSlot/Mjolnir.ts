import { ThunderGod } from 'model/Cards'
import { Hammer } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Mjolnir: MasterMove = {
  id: 'Mjolnir',
  name: 'Mjolnir',
  effects: () => ['Salamander Damage', 'Jinn Damage', 'Attack Gauge +'],
  relatedWeapons: () => [Hammer],
  relatedCards: () => [ThunderGod]
}
