import { RulerOfTheSky } from 'model/Cards'
import { Spear } from 'model/Equipment'
import { TopSlotPlungeAttack } from 'model/PlungeAttacks'

export const Gungnir: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Gungnir',
  weapons: () => [Spear],
  effects: () => ['Spirit Up', 'Attack Gauge +'],
  cards: () => [RulerOfTheSky]
}
