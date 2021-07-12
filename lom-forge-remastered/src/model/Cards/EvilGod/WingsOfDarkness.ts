import { ActiveCard, Bottom, CardSlot, Leaving, Middle, PixieOfLust, SacrificedNymph, Top } from 'model/Cards'
import { EvilGod } from 'model/Cards/EvilGod'
import { Ragnarok } from 'model/Cards/World'
import { Staff } from 'model/Gear/Weapons'
import { BlackenedBat } from 'model/Items/Pellets'
import { GoldenTouch } from 'model/MasterMoves/BottomSlot'
import { TemperingProject, WeaponProject } from 'model/Projects'
import { AllStats, decrementStat, setMinimumStatValue, Spirit, widenStatRange } from 'model/Stats'

export const WingsOfDarkness: ActiveCard = {
  id: 'WingsOfDarkness',
  name: 'Wings of Darkness',
  category: EvilGod,
  price: 6660,
  activate: activateWingsOfDarkness,
  relatedItems: () => [BlackenedBat],
  relatedCards: () => [PixieOfLust, Ragnarok, SacrificedNymph],
  relatedStats: () => AllStats,
  relatedStatRanges: () => AllStats,
  relatedWeapons: () => [Staff],
  relatedMasterMoves: {
    bottom: () => [GoldenTouch]
  }
}

function activateWingsOfDarkness(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      AllStats.forEach((stat) => widenStatRange(project, stat, -10, 20))
      setMinimumStatValue(project, Spirit, 15)
      AllStats.forEach((stat) => decrementStat(project, stat))

      if (project.type === WeaponProject && project.equipment == Staff) {
        project.masterMoves.bottom = GoldenTouch
      }

      break
    case Leaving:
      const { top, middle, bottom } = project.cards

      if (bottom === SacrificedNymph) {
        project.cards.bottom = WingsOfDarkness
      } else if (middle === SacrificedNymph) {
        project.cards.middle = WingsOfDarkness
      } else if (top === SacrificedNymph) {
        project.cards.top = WingsOfDarkness
      }

      break
  }
}
