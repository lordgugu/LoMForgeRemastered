import {
  ActiveCard,
  AncientMoon,
  BedOfThorn,
  Bottom,
  CardSlot,
  EnticedNymph,
  HeavensScale,
  Hidden,
  Middle,
  MirroredWorld,
  Ragnarok,
  Top,
  World,
  Yggdrasil
} from 'model/Cards'
import { GraveDirt } from 'model/Items'
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
      const { worldCard } = project

      if (worldCard !== undefined && worldCard !== BedOfThorn) {
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
