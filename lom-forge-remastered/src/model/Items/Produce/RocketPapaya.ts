import { Tower } from 'model/Cards'
import { Jinn, Wisp } from 'model/Essences'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { Charm, incrementStat, widenStatRange } from 'model/Stats'

export const RocketPapaya: Item = {
  id: 'RocketPapaya',
  name: 'Rocket Papaya',
  category: Produce,
  energy: 64,
  activate: activateRocketPapaya,
  relatedCards: () => [Tower],
  relatedStats: () => [Charm],
  relatedStatRanges: () => [Charm],
  relatedEssences: () => [Wisp, Jinn]
}

function activateRocketPapaya(project: TemperingProject) {
  const { energy } = project
  const { wisp, jinn } = project.levels

  widenStatRange(project, Charm, -5, 10)
  incrementStat(project, Charm)

  if (jinn === 0 && wisp > 0 && energy >= 8) {
    project.cards.pending = Tower
  }
}
