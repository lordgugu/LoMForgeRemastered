import { GodOfDestruction, MoonGoddess, SunGod, WitchOfMoon } from 'model/Cards'
import { Weapon } from 'model/Gear/Weapons'
import { Jump, Moonlight } from 'model/MasterMoves/BottomSlot'
import { Uppercut, FlameTongue, Sunlight, Vampsword } from 'model/MasterMoves/MiddleSlot'
import { Thrust } from 'model/MasterMoves/TopSlot'

export const Sword: Weapon = {
  id: 'Sword',
  name: 'Sword',
  attributes: {
    sharp: 32,
    heavy: 32,
    force: 32,
    tech: 32
  },
  markerThreshold: 1,
  priceCoefficient: 50,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  relatedMasterMoves: {
    top: () => [Thrust, FlameTongue, Sunlight, Vampsword],
    middle: () => [Uppercut, Moonlight],
    bottom: () => [Jump]
  },
  relatedCards: () => [GodOfDestruction, SunGod, WitchOfMoon, MoonGoddess]
}
