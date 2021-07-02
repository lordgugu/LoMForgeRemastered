import { MoonGoddess } from 'model/Cards'
import { Sword } from 'model/Equipment'
import { BottomSlotMasterMove } from 'model/MasterMoves'

export const Moonlight: BottomSlotMasterMove = {
  slot: 'Bottom',
  originalName: 'Moonlight',
  weapons: () => [Sword],
  effects: () => ['Aquatic Damage +', 'Sleep vs. Aquatic'],
  cards: () => [MoonGoddess]
}
