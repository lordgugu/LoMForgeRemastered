import {
  ActiveCard,
  Bottom,
  CardSlot,
  EvilGod,
  Leaving,
  Middle,
  PixieOfSloth,
  Ragnarok,
  SacrificedNymph,
  Top
} from 'model/Cards'
import { Sword } from 'model/Gear/Weapons'
import { VampireFang } from 'model/Items/FangClaw'
import { Vampsword } from 'model/MasterMoves/MiddleSlot'
import { TemperingProject, WeaponProject } from 'model/Projects'
import { AllStats, decrementStat, Magic, setMinimumStatValue, widenStatRange } from 'model/Stats'

export const WitchOfMoon: ActiveCard = {
  id: 'WitchOfMoon',
  name: 'Witch of Moon',
  category: EvilGod,
  price: 6660,
  activate: activateWitchOfMoon,
  relatedItems: () => [VampireFang],
  relatedCards: () => [PixieOfSloth, Ragnarok, SacrificedNymph],
  relatedStats: () => AllStats,
  relatedStatRanges: () => AllStats,
  relatedWeapons: () => [Sword],
  relatedMasterMoves: {
    middle: () => [Vampsword]
  }
}

function activateWitchOfMoon(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      AllStats.forEach((stat) => widenStatRange(project, stat, -10, 20))
      setMinimumStatValue(project, Magic, 15)
      AllStats.forEach((stat) => decrementStat(project, stat))

      if (project.type === WeaponProject && project.equipment == Sword) {
        project.masterMoves.middle = Vampsword
      }

      break
    case Leaving:
      const { top, middle, bottom } = project.cards

      if (bottom === SacrificedNymph) {
        project.cards.bottom = WitchOfMoon
      } else if (middle === SacrificedNymph) {
        project.cards.middle = WitchOfMoon
      } else if (top === SacrificedNymph) {
        project.cards.top = WitchOfMoon
      }

      break
  }
}
