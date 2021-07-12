import { Wanderer } from 'model/Cards/Noble'
import { Axe } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const Woodchopper: MasterMove = {
  id: 'Woodchopper',
  name: 'Woodchopper',
  slot: 'bottom',
  effects: () => ['Plant Damage +'],
  relatedWeapons: () => [Axe],
  relatedCards: () => [Wanderer]
}
