import {
  ActiveCard,
  Bottom,
  CardSlot,
  EvilGod,
  Leaving,
  Middle,
  PixieOfGluttony,
  Ragnarok,
  SacrificedNymph,
  Top
} from 'model/Cards'
import { TwoHandedAxe } from 'model/Equipment'
import { GiantsHorn, OrangeOpus } from 'model/Items'
import { Treefeller } from 'model/MasterMoves/BottomSlot'
import { TemperingProject, WeaponProjectType } from 'model/Projects'
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

      if (project.type === WeaponProjectType && project.equipment == TwoHandedAxe) {
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
