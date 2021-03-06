import { BlacksmithGod, ThunderGod } from 'model/Cards/HeavenGod'
import { SpiritOfMountain } from 'model/Cards/Spirit'
import { Volcano } from 'model/Cards/Stage'
import { Weapon } from 'model/Gear/Weapons'
import { Jump, MagmaHammer, Mjolnir, QuakeHammer, SledgeHammer } from 'model/MasterMoves/BottomSlot'
import { Uppercut } from 'model/MasterMoves/MiddleSlot'
import { Thrust } from 'model/MasterMoves/TopSlot'

export const Hammer: Weapon = {
  id: 'Hammer',
  name: 'Hammer',
  attributes: {
    sharp: 8,
    heavy: 72,
    force: 64,
    tech: 16
  },
  markerThreshold: 3,
  priceCoefficient: 75,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  relatedMasterMoves: {
    top: () => [Thrust],
    middle: () => [Uppercut],
    bottom: () => [Jump, MagmaHammer, Mjolnir, QuakeHammer, SledgeHammer]
  },
  relatedCards: () => [Volcano, ThunderGod, SpiritOfMountain, BlacksmithGod]
}
