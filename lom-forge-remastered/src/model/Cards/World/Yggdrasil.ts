import {
  ActiveCard,
  AncientMoon,
  BedOfThorn,
  Bottom,
  CardSlot,
  DyingEarth,
  HeavensScale,
  Hidden,
  Middle,
  MirroredWorld,
  Ragnarok,
  Top,
  World
} from 'model/Cards'
import { Staff } from 'model/Equipment'
import { SpinySeed } from 'model/Items'
import { TemperingProject, WeaponProjectType } from 'model/Projects'
import { AllStats, incrementStat, widenStatRange } from 'model/Stats'

export const Yggdrasil: ActiveCard = {
  id: 'Yggdrasil',
  name: 'Yggdrasil',
  category: World,
  price: 3000,
  activate: activateYggdrasil,
  relatedItems: () => [SpinySeed],
  relatedCards: () => [BedOfThorn, HeavensScale, DyingEarth, Ragnarok, AncientMoon, MirroredWorld],
  relatedWeapons: () => [Staff],
  relatedStats: () => AllStats
}

function activateYggdrasil(project: TemperingProject, slot: CardSlot) {
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
      if (project.type === WeaponProjectType && project.equipment === Staff) {
        AllStats.forEach((stat) => widenStatRange(project, stat, -3, 9))
      } else {
        AllStats.forEach((stat) => widenStatRange(project, stat, -5, 10))
      }

      AllStats.forEach((stat) => incrementStat(project, stat))

      break
  }
}
