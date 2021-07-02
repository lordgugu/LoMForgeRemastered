import { FallenAngel } from 'model/Cards'
import { TwoHandedSword } from 'model/Equipment'
import { TopSlotMasterMove } from 'model/MasterMoves'

export const ChaoticAvenger: TopSlotMasterMove = {
  slot: 'Top',
  originalName: 'Chaotic Avenger',
  weapons: () => [TwoHandedSword],
  effects: () => ['Salamander Damage', 'Gnome Damage', 'Jinn Damage', 'Undine Damage', 'Attack Gauge +'],
  cards: () => [FallenAngel]
}
