import { FallenAngel } from 'model/Cards'
import { TwoHandedSword } from 'model/Equipment'
import { TopSlotPlungeAttack } from 'model/PlungeAttacks'

export const ChaoticAvenger: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Chaotic Avenger',
  weapons: () => [TwoHandedSword],
  effects: () => ['Salamander Damage', 'Gnome Damage', 'Jinn Damage', 'Undine Damage', 'Attack Gauge +'],
  cards: () => [FallenAngel]
}
