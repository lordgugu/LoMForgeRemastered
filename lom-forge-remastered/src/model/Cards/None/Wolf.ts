import { ActiveCard, Bottom, CardSlot, Middle, None, Top } from 'model/Cards'
import { Bow } from 'model/Gear/Weapons'
import { PeachPuppy } from 'model/Items/Produce'
import { MagicalShot } from 'model/MasterMoves/TopSlot'
import { TemperingProject } from 'model/Projects'
import { HP, setMinimumStatValue, Skill, widenStatRange } from 'model/Stats'

export const Wolf: ActiveCard = {
  id: 'Wolf',
  name: 'Wolf',
  category: None,
  price: 300,
  activate: activateWolf,
  relatedItems: () => [PeachPuppy],
  relatedStats: () => [Skill, HP],
  relatedStatRanges: () => [Skill, HP],
  relatedWeapons: () => [Bow],
  relatedMasterMoves: {
    top: () => [MagicalShot]
  }
}

function activateWolf(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      widenStatRange(project, Skill, -3, 5)
      widenStatRange(project, HP, -3, 5)

      setMinimumStatValue(project, Skill, 3)
      setMinimumStatValue(project, HP, 3)

      break
  }
}
