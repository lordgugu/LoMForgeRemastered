import { WingsOfDarkness } from 'model/Cards'
import { Staff } from 'model/Equipment'
import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'

export const GoldenTouch: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Golden Touch',
  weapons: () => [Staff],
  effects: () => ['Experience &rarr; Lucre', 'Attack Gauge &minus;'],
  cards: () => [WingsOfDarkness]
}
