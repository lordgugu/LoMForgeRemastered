import { ActiveCard, Bottom, CardSlot, Hidden, Middle, Top } from 'model/Cards'
import { EnticedNymph } from 'model/Cards/Maiden'
import { BedOfThorn } from 'model/Cards/Stage'
import { AncientMoon, HeavensScale, MirroredWorld, Ragnarok, World, Yggdrasil } from 'model/Cards/World'
import { GraveDirt } from 'model/Items/Powders'
import { TemperingProject } from 'model/Projects'
import { AllStats, decrementStat, widenStatRange } from 'model/Stats'

export const DyingEarth: ActiveCard = {
  id: 'DyingEarth',
  name: 'Dying Earth',
  category: World,
  price: 2600,
  activate: activateDyingEarth,
  relatedItems: () => [GraveDirt],
  relatedCards: () => [BedOfThorn, Yggdrasil, HeavensScale, Ragnarok, AncientMoon, MirroredWorld, EnticedNymph],
  relatedStats: () => AllStats,
  relatedStatRanges: () => AllStats
}

function activateDyingEarth(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Hidden:
      const { worldPower } = project

      if (worldPower !== undefined && worldPower !== BedOfThorn) {
        project.cards.hidden = undefined
      }

      break
    case Top:
    case Middle:
    case Bottom:
      const { top, middle, bottom } = project.cards

      AllStats.forEach((stat) => widenStatRange(project, stat, -5, 12))

      if (!Array.of(top, middle, bottom).includes(EnticedNymph)) {
        AllStats.forEach((stat) => decrementStat(project, stat))
      }

      break
  }
}
