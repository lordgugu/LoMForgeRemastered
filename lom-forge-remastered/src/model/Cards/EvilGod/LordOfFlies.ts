import {
  ActiveCard,
  Bottom,
  CardSlot,
  EvilGod,
  Leaving,
  Middle,
  PixieOfEnvy,
  Ragnarok,
  SacrificedNymph,
  Top
} from 'model/Cards'
import { Knife } from 'model/Equipment/Weapons'
import { ClearFeather } from 'model/Items'
import { SinisterBlade } from 'model/MasterMoves/BottomSlot'
import { TemperingProject, WeaponProjectType } from 'model/Projects'
import { AllStats, decrementStat, setMinimumStatValue, Skill, widenStatRange } from 'model/Stats'

export const LordOfFlies: ActiveCard = {
  id: 'LordOfFlies',
  name: 'Lord of Flies',
  category: EvilGod,
  price: 6660,
  activate: activateLordOfFlies,
  relatedItems: () => [ClearFeather],
  relatedCards: () => [PixieOfEnvy, Ragnarok, SacrificedNymph],
  relatedStats: () => AllStats,
  relatedStatRanges: () => AllStats,
  relatedWeapons: () => [Knife],
  relatedMasterMoves: {
    bottom: () => [SinisterBlade]
  }
}

function activateLordOfFlies(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      AllStats.forEach((stat) => widenStatRange(project, stat, -10, 20))
      setMinimumStatValue(project, Skill, 15)
      AllStats.forEach((stat) => decrementStat(project, stat))

      if (project.type === WeaponProjectType && project.equipment == Knife) {
        project.masterMoves.bottom = SinisterBlade
      }

      break
    case Leaving:
      const { top, middle, bottom } = project.cards

      if (bottom === SacrificedNymph) {
        project.cards.bottom = LordOfFlies
      } else if (middle === SacrificedNymph) {
        project.cards.middle = LordOfFlies
      } else if (top === SacrificedNymph) {
        project.cards.top = LordOfFlies
      }

      break
  }
}
