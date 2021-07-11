import { ActiveCard, Bottom, CardSlot, Hidden, Middle, Top } from 'model/Cards'
import { BedOfThorn } from 'model/Cards/Stage'
import { AncientMoon, DyingEarth, HeavensScale, MirroredWorld, Ragnarok, World } from 'model/Cards/World'
import { Staff } from 'model/Gear/Weapons'
import { SpinySeed } from 'model/Items/Seeds'
import { TemperingProject, WeaponProject } from 'model/Projects'
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
      if (project.type === WeaponProject && project.equipment === Staff) {
        AllStats.forEach((stat) => widenStatRange(project, stat, -3, 9))
      } else {
        AllStats.forEach((stat) => widenStatRange(project, stat, -5, 10))
      }

      AllStats.forEach((stat) => incrementStat(project, stat))

      break
  }
}
