import { ThunderGod } from 'model/Cards'
import { Hammer } from 'model/Equipment'
import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'

export const Mjolnir: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Mjolnir',
  weapons: () => [Hammer],
  effects: () => ['Salamander Damage', 'Jinn Damage', 'Attack Gauge +'],
  cards: () => [ThunderGod]
}
