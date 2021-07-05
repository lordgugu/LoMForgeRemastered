import { RulerOfTheSky } from 'model/Cards'
import { Spear } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Gungnir: MasterMove = {
  id: 'Gungnir',
  name: 'Gungnir',
  effects: () => ['Spirit Up', 'Attack Gauge +'],
  relatedWeapons: () => [Spear],
  relatedCards: () => [RulerOfTheSky]
}
