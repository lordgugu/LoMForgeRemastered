import { Entity } from 'model/Common'
import { AllBottomSlotMasterMoves } from 'model/MasterMoves/BottomSlot'
import { AllMiddleSlotMasterMoves } from 'model/MasterMoves/MiddleSlot'
import { AllTopSlotMasterMoves } from 'model/MasterMoves/TopSlot'

export type MasterMoveSlot = 'top' | 'middle' | 'bottom'

export type MasterMove = Entity & {
  readonly slot: MasterMoveSlot
  readonly effects: () => string[]
  readonly notes?: () => string[]
}

export type MasterMovesContext = {
  masterMoves: { [slot in MasterMoveSlot]: MasterMove }
}

export const AllMasterMoves: MasterMove[] = [
  ...AllTopSlotMasterMoves,
  ...AllMiddleSlotMasterMoves,
  ...AllBottomSlotMasterMoves
]
