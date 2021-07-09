import { MotherOfGods } from 'model/Cards'
import { Weapon } from 'model/Gear/Weapons'
import { Jump, RedDream } from 'model/MasterMoves/BottomSlot'
import { GameOfDeath, Uppercut } from 'model/MasterMoves/MiddleSlot'
import { GreenPrincess, Thrust } from 'model/MasterMoves/TopSlot'

export const Flail: Weapon = {
  id: 'Flail',
  name: 'Flail',
  attributes: {
    sharp: 0,
    heavy: 40,
    force: 28,
    tech: 44
  },
  markerThreshold: 3,
  priceCoefficient: 40,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  relatedMasterMoves: {
    top: () => [Thrust, GreenPrincess],
    middle: () => [Uppercut, GameOfDeath],
    bottom: () => [Jump, RedDream]
  },
  relatedCards: () => [MotherOfGods]
}
