import { ActiveCard, CardSlot, Metropolis, None } from 'model/Cards'
import { HoneyOnion } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'
import { AllStats, Defense, incrementStat, widenStatRange } from 'model/Stats'

export const Princess: ActiveCard = {
  id: 'Princess',
  name: 'Princess',
  category: None,
  price: 1500,
  activate: activatePrincess,
  relatedItems: () => [HoneyOnion],
  relatedCards: () => [Metropolis],
  relatedStats: () => [Defense],
  relatedStatRanges: () => AllStats
}

function activatePrincess(project: TemperingProject, slot: CardSlot) {
  const { top, middle, bottom } = project.cards

  if (Array.of(top, middle, bottom).includes(Metropolis)) {
    AllStats.forEach((stat) => widenStatRange(project, stat, -3, 5))
  } else {
    AllStats.forEach((stat) => widenStatRange(project, stat, -1, 3))
  }

  incrementStat(project, Defense)
}
