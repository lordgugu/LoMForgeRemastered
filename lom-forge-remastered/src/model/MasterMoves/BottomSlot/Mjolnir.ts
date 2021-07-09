import { ThunderGod } from 'model/Cards'
import { Hammer } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const Mjolnir: MasterMove = {
  id: 'Mjolnir',
  name: 'Mjolnir',
  slot: 'bottom',
  effects: () => ['Salamander Damage', 'Jinn Damage', 'Attack Gauge +'],
  relatedWeapons: () => [Hammer],
  relatedCards: () => [ThunderGod]
}
