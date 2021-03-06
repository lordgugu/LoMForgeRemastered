import { ActiveCard, Bottom, CardSlot, Middle, Top } from 'model/Cards'
import { Noble } from 'model/Cards/Noble'
import { Axe } from 'model/Gear/Weapons'
import { WadOfWool } from 'model/Items/Pouch'
import { Woodchopper } from 'model/MasterMoves/BottomSlot'
import { TemperingProject, WeaponProject } from 'model/Projects'
import { AllStats, incrementStat, Skill, Spirit, widenStatRange } from 'model/Stats'

export const Wanderer: ActiveCard = {
  id: 'Wanderer',
  name: 'Wanderer',
  category: Noble,
  price: 1000,
  activate: activateWanderer,
  relatedItems: () => [WadOfWool],
  relatedStatRanges: () => AllStats,
  relatedStats: () => [Skill, Spirit],
  relatedWeapons: () => [Axe],
  relatedMasterMoves: {
    bottom: () => [Woodchopper]
  }
}

function activateWanderer(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      AllStats.forEach((stat) => widenStatRange(project, stat, -3, 5))

      incrementStat(project, Skill)
      incrementStat(project, Spirit)

      if (project.type == WeaponProject && project.equipment === Axe) {
        project.masterMoves.bottom = Woodchopper
      }

      break
  }
}
