import { FallenAngel } from 'model/Cards'
import { TwoHandedSword } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const ChaoticAvenger: MasterMove = {
  originalName: 'Chaotic Avenger',
  weapons: () => [TwoHandedSword],
  effects: () => ['Salamander Damage', 'Gnome Damage', 'Jinn Damage', 'Undine Damage', 'Attack Gauge +'],
  cards: () => [FallenAngel]
}
