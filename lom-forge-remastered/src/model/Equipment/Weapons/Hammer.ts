import { BlacksmithGod, SpiritOfMountain, ThunderGod, Volcano } from 'model/Cards'
import { WeaponEquipment } from 'model/Equipment'
import { Jump, MagmaHammer, Mjolnir, QuakeHammer, SledgeHammer } from 'model/MasterMoves/BottomSlot'
import { Uppercut } from 'model/MasterMoves/MiddleSlot'
import { Thrust } from 'model/MasterMoves/TopSlot'

export const Hammer: WeaponEquipment = {
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
