import { ActiveCard, Bottom, CardSlot, Leaving, Middle, Top } from 'model/Cards'
import { EvilGod } from 'model/Cards/EvilGod'
import { SacrificedNymph } from 'model/Cards/Maiden'
import { PixieOfGluttony } from 'model/Cards/Pixie'
import { Ragnarok } from 'model/Cards/World'
import { TwoHandedAxe } from 'model/Gear/Weapons'
import { GiantsHorn } from 'model/Items/FangClaw'
import { OrangeOpus } from 'model/Items/Produce'
import { Treefeller } from 'model/MasterMoves/BottomSlot'
import { TemperingProject, WeaponProject } from 'model/Projects'
import { AllStats, decrementStat, Defense, setMinimumStatValue, widenStatRange } from 'model/Stats'

export const Leviathan: ActiveCard = {
  id: 'Leviathan',
  name: 'Leviathan',
  category: EvilGod,
  price: 6660,
  activate: activateLeviathan,
  relatedItems: () => [OrangeOpus, GiantsHorn],
  relatedCards: () => [PixieOfGluttony, Ragnarok, SacrificedNymph],
  relatedStats: () => AllStats,
  relatedStatRanges: () => AllStats,
  relatedWeapons: () => [TwoHandedAxe],
  relatedMasterMoves: {
    bottom: () => [Treefeller]
  }
}

function activateLeviathan(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      AllStats.forEach((stat) => widenStatRange(project, stat, -10, 20))
      setMinimumStatValue(project, Defense, 15)
      AllStats.forEach((stat) => decrementStat(project, stat))

      if (project.type === WeaponProject && project.equipment == TwoHandedAxe) {
        project.masterMoves.bottom = Treefeller
      }

      break
    case Leaving:
      const { top, middle, bottom } = project.cards

      if (bottom === SacrificedNymph) {
        project.cards.bottom = Leviathan
      } else if (middle === SacrificedNymph) {
        project.cards.middle = Leviathan
      } else if (top === SacrificedNymph) {
        project.cards.top = Leviathan
      }

      break
  }
}
