import { FallenAngel } from 'model/Cards'
import { TwoHandedSword } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const ChaoticAvenger: MasterMove = {
  id: 'ChaoticAvenger',
  name: 'Chaotic Avenger',
  slot: 'top',
  effects: () => ['Salamander Damage', 'Gnome Damage', 'Jinn Damage', 'Undine Damage', 'Attack Gauge +'],
  relatedWeapons: () => [TwoHandedSword],
  relatedCards: () => [FallenAngel]
}
