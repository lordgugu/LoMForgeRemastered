import { FallenAngel } from 'model/Cards/EvilGod'
import { TwoHandedSword } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const ChaoticAvenger: MasterMove = {
  id: 'ChaoticAvenger',
  name: 'Chaotic Avenger',
  slot: 'top',
  effects: () => ['Salamander Damage', 'Gnome Damage', 'Jinn Damage', 'Undine Damage', 'Attack Gauge +'],
  relatedWeapons: () => [TwoHandedSword],
  relatedCards: () => [FallenAngel]
}
