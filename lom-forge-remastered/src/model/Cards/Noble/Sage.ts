import { ActiveCard, Bottom, CardSlot, Middle, Top } from 'model/Cards'
import { Noble } from 'model/Cards/Noble'
import { Bow } from 'model/Gear/Weapons'
import { MessyScroll } from 'model/Items/Pouch'
import { PhoenixFalling } from 'model/MasterMoves/TopSlot'
import { TemperingProject, WeaponProject } from 'model/Projects'
import { AllStats, Defense, incrementStat, Magic, widenStatRange } from 'model/Stats'

export const Sage: ActiveCard = {
  id: 'Sage',
  name: 'Sage',
  category: Noble,
  price: 1000,
  activate: activateSage,
  relatedItems: () => [MessyScroll],
  relatedStatRanges: () => AllStats,
  relatedStats: () => [Magic, Defense],
  relatedWeapons: () => [Bow],
  relatedMasterMoves: {
    top: () => [PhoenixFalling]
  }
}

function activateSage(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      AllStats.forEach((stat) => widenStatRange(project, stat, -3, 5))

      incrementStat(project, Magic)
      incrementStat(project, Defense)

      if (project.type == WeaponProject && project.equipment === Bow) {
        project.masterMoves.top = PhoenixFalling
      }

      break
  }
}
