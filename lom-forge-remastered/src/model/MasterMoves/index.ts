import { Entity } from 'model/Common'

export type MasterMoveSlot = 'top' | 'middle' | 'bottom'

export type MasterMove = Entity & {
  readonly slot: MasterMoveSlot
  readonly effects: () => string[]
  readonly notes?: () => string[]
}

export type MasterMovesContext = {
  masterMoves: { [slot in MasterMoveSlot]: MasterMove }
}
