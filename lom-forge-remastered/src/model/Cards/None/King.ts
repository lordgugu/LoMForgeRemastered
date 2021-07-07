import { ActiveCard, CardSlot, Metropolis, None } from 'model/Cards'
import { Glove } from 'model/Equipment'
import { Garlicrown } from 'model/Items'
import { HandOfMidas } from 'model/MasterMoves'
import { TemperingProject, WeaponProjectType } from 'model/Projects'
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
  const { top, middle, bottom } = project.cards

  if (Array.of(top, middle, bottom).includes(Metropolis)) {
    AllStats.forEach((stat) => widenStatRange(project, stat, -3, 5))
  } else {
    AllStats.forEach((stat) => widenStatRange(project, stat, -1, 3))
  }

  incrementStat(project, Power)

  if (project.type === WeaponProjectType && project.equipment === Glove) {
    project.masterMoves.middle = HandOfMidas
  }
}
