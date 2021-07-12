import { ActiveCard, Bottom, CardSlot, Leaving, Middle, PixieOfGreed, Top } from 'model/Cards'
import { EvilGod } from 'model/Cards/EvilGod'
import { SacrificedNymph } from 'model/Cards/Maiden'
import { Ragnarok } from 'model/Cards/World'
import { Knife } from 'model/Gear/Weapons'
import { PoisonFang } from 'model/Items/FangClaw'
import { PoisonBlade } from 'model/MasterMoves/MiddleSlot'
import { TemperingProject, WeaponProject } from 'model/Projects'
import { AllStats, decrementStat, HP, setMinimumStatValue, widenStatRange } from 'model/Stats'

export const BeastHeadedGod: ActiveCard = {
  id: 'BeastHeadedGod',
  name: 'Beast-headed God',
  category: EvilGod,
  price: 6660,
  activate: activateBeastHeadedGod,
  relatedItems: () => [PoisonFang],
  relatedCards: () => [PixieOfGreed, Ragnarok, SacrificedNymph],
  relatedStats: () => AllStats,
  relatedStatRanges: () => AllStats,
  relatedWeapons: () => [Knife],
  relatedMasterMoves: {
    middle: () => [PoisonBlade]
  }
}

function activateBeastHeadedGod(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      AllStats.forEach((stat) => widenStatRange(project, stat, -10, 20))
      setMinimumStatValue(project, HP, 15)
      AllStats.forEach((stat) => decrementStat(project, stat))

      if (project.type === WeaponProject && project.equipment == Knife) {
        project.masterMoves.middle = PoisonBlade
      }

      break
    case Leaving:
      const { top, middle, bottom } = project.cards

      if (bottom === SacrificedNymph) {
        project.cards.bottom = BeastHeadedGod
      } else if (middle === SacrificedNymph) {
        project.cards.middle = BeastHeadedGod
      } else if (top === SacrificedNymph) {
        project.cards.top = BeastHeadedGod
      }

      break
  }
}
