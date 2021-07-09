import { WitchOfMoon } from 'model/Cards'
import { Sword } from 'model/Equipment/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const Vampsword: MasterMove = {
  id: 'Vampsword',
  name: 'Vampsword',
  slot: 'middle',
  effects: () => ['Absorbs 25% of Damage Dealt'],
  relatedWeapons: () => [Sword],
  relatedCards: () => [WitchOfMoon]
}
