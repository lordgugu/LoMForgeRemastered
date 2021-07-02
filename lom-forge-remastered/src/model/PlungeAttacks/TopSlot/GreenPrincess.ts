import { MotherOfGods } from 'model/Cards'
import { Flail } from 'model/Equipment'
import { TopSlotPlungeAttack } from 'model/PlungeAttacks'

export const GreenPrincess: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Green Princess',
  weapons: () => [Flail],
  effects: () => ['Defense Up', 'Attack Gauge +'],
  cards: () => [MotherOfGods]
}
