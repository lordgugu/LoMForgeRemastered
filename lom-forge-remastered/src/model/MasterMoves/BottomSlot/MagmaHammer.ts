import { Volcano } from 'model/Cards/Stage'
import { Hammer } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const MagmaHammer: MasterMove = {
  id: 'MagmaHammer',
  name: 'Magma Hammer',
  slot: 'bottom',
  effects: () => ['Salamander Damage', 'Aura Damage', 'Defense Up'],
  relatedWeapons: () => [Hammer],
  relatedCards: () => [Volcano]
}
