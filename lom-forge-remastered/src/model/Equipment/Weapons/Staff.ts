import { Cleric, RulerOfTheSky, WindGod, WingsOfDarkness, Yggdrasil } from 'model/Cards'
import { WeaponEquipment } from 'model/Equipment'
import { Demonicide, Electrosceptre, GoldenTouch, Jump } from 'model/MasterMoves/BottomSlot'
import { Uppercut } from 'model/MasterMoves/MiddleSlot'
import { Caduceus, Thrust } from 'model/MasterMoves/TopSlot'

export const Staff: WeaponEquipment = {
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
