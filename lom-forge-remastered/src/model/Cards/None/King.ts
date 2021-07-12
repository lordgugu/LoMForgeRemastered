import { ActiveCard, Bottom, CardSlot, Middle, Top } from 'model/Cards'
import { None } from 'model/Cards/None'
import { Metropolis } from 'model/Cards/Stage'
import { Glove } from 'model/Gear/Weapons'
import { Garlicrown } from 'model/Items/Produce'
import { HandOfMidas } from 'model/MasterMoves/MiddleSlot'
import { TemperingProject, WeaponProject } from 'model/Projects'
import { AllStats, incrementStat, Power, widenStatRange } from 'model/Stats'

export const King: ActiveCard = {
  id: 'King',
  name: 'King',
  category: None,
  price: 1500,
  activate: activateKing,
  relatedItems: () => [Garlicrown],
  relatedCards: () => [Metropolis],
  relatedStats: () => [Power],
  relatedStatRanges: () => AllStats,
  relatedWeapons: () => [Glove],
  relatedMasterMoves: {
    middle: () => [HandOfMidas]
  }
}

function activateKing(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      const { top, middle, bottom } = project.cards

      if (Array.of(top, middle, bottom).includes(Metropolis)) {
        AllStats.forEach((stat) => widenStatRange(project, stat, -3, 5))
      } else {
        AllStats.forEach((stat) => widenStatRange(project, stat, -1, 3))
      }

      incrementStat(project, Power)

      if (project.type === WeaponProject && project.equipment === Glove) {
        project.masterMoves.middle = HandOfMidas
      }
      break
  }
}
