import { ManOfValor } from 'model/Cards'
import { OceanGod, RulerOfTheSky } from 'model/Cards/HeavenGod'
import { Weapon } from 'model/Gear/Weapons'
import { Jump } from 'model/MasterMoves/BottomSlot'
import { Uppercut } from 'model/MasterMoves/MiddleSlot'
import { Gungnir, SpearOfLight, Thrust, Trident } from 'model/MasterMoves/TopSlot'

export const Spear: Weapon = {
  id: 'Spear',
  name: 'Spear',
  attributes: {
    sharp: 52,
    heavy: 20,
    force: 24,
    tech: 48
  },
  markerThreshold: 2,
  priceCoefficient: 60,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  relatedMasterMoves: {
    top: () => [Thrust, Gungnir, SpearOfLight, Trident],
    middle: () => [Uppercut],
    bottom: () => [Jump]
  },
  relatedCards: () => [RulerOfTheSky, ManOfValor, OceanGod]
}
