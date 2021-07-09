import { AllWeapons } from 'model/Equipment/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const Jump: MasterMove = {
  id: 'Jump',
  name: 'Jump',
  slot: 'bottom',
  effects: () => ['Default (Bottom Slot)'],
  relatedWeapons: () => AllWeapons
}
