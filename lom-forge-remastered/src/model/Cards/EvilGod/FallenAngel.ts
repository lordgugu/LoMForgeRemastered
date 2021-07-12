import { ActiveCard, Bottom, CardSlot, Leaving, Middle, Top } from 'model/Cards'
import { EvilGod } from 'model/Cards/EvilGod'
import { SacrificedNymph } from 'model/Cards/Maiden'
import { PixieOfPride } from 'model/Cards/Pixie'
import { Ragnarok } from 'model/Cards/World'
import { TwoHandedSword } from 'model/Gear/Weapons'
import { AngelFeather } from 'model/Items/Feathers'
import { ChaoticAvenger } from 'model/MasterMoves/TopSlot'
import { TemperingProject, WeaponProject } from 'model/Projects'
import { AllStats, Charm, decrementStat, setMinimumStatValue, widenStatRange } from 'model/Stats'

export const FallenAngel: ActiveCard = {
  id: 'FallenAngel',
  name: 'Fallen Angel',
  category: EvilGod,
  price: 6660,
  activate: activateFallenAngel,
  relatedItems: () => [AngelFeather],
  relatedCards: () => [PixieOfPride, Ragnarok, SacrificedNymph],
  relatedStats: () => AllStats,
  relatedStatRanges: () => AllStats,
  relatedWeapons: () => [TwoHandedSword],
  relatedMasterMoves: {
    top: () => [ChaoticAvenger]
  }
}

function activateFallenAngel(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      AllStats.forEach((stat) => widenStatRange(project, stat, -10, 20))
      setMinimumStatValue(project, Charm, 15)
      AllStats.forEach((stat) => decrementStat(project, stat))

      if (project.type === WeaponProject && project.equipment == TwoHandedSword) {
        project.masterMoves.top = ChaoticAvenger
      }

      break
    case Leaving:
      const { top, middle, bottom } = project.cards

      if (bottom === SacrificedNymph) {
        project.cards.bottom = FallenAngel
      } else if (middle === SacrificedNymph) {
        project.cards.middle = FallenAngel
      } else if (top === SacrificedNymph) {
        project.cards.top = FallenAngel
      }

      break
  }
}
