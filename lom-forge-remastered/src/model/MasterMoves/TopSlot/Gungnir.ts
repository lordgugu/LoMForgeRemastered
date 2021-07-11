import { RulerOfTheSky } from 'model/Cards/HeavenGod'
import { Spear } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const Gungnir: MasterMove = {
  id: 'Gungnir',
  name: 'Gungnir',
  slot: 'top',
  effects: () => ['Spirit Up', 'Attack Gauge +'],
  relatedWeapons: () => [Spear],
  relatedCards: () => [RulerOfTheSky]
}
