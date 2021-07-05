import { EnticedNymph } from 'model/Cards'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { incrementStat, Spirit, widenStatRange } from 'model/Stats'

export const Lilipods: Item = {
  id: 'Lilipods',
  name: 'Lilipods',
  category: Produce,
  energy: 8,
  activate: activateLilipods,
  relatedCards: () => [EnticedNymph],
  relatedStats: () => [Spirit]
}

function activateLilipods(project: TemperingProject) {
  const { energy } = project

  widenStatRange(project, Spirit, -1, 3)
  incrementStat(project, Spirit)

  if (energy >= 8) {
    project.mysticPowers.prehidden = EnticedNymph
  }
}
