import { ManOfValor } from 'model/Cards/Noble'
import { Spear } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const SpearOfLight: MasterMove = {
  id: 'SpearOfLight',
  name: 'Spear of Light',
  slot: 'top',
  effects: () => ['Wisp Damage'],
  relatedWeapons: () => [Spear],
  relatedCards: () => [ManOfValor]
}
