import { Cleric, RulerOfTheSky, WindGod, WingsOfDarkness } from 'model/Cards'
import { Yggdrasil } from 'model/Cards/World'
import { Weapon } from 'model/Gear/Weapons'
import { Demonicide, Electrosceptre, GoldenTouch, Jump } from 'model/MasterMoves/BottomSlot'
import { Uppercut } from 'model/MasterMoves/MiddleSlot'
import { Caduceus, Thrust } from 'model/MasterMoves/TopSlot'

export const Staff: Weapon = {
  id: 'Staff',
  name: 'Staff',
  attributes: {
    sharp: 4,
    heavy: 44,
    force: 16,
    tech: 32
  },
  markerThreshold: 1,
  priceCoefficient: 30,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  relatedMasterMoves: {
    top: () => [Thrust, Caduceus],
    middle: () => [Uppercut],
    bottom: () => [Jump, Demonicide, Electrosceptre, GoldenTouch]
  },
  relatedCards: () => [WindGod, Cleric, RulerOfTheSky, WingsOfDarkness, Yggdrasil]
}
