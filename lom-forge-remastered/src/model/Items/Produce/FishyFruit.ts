import { Spring } from 'model/Cards'
import { taint, Undine } from 'model/Essences'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { incrementStat, Magic, widenStatRange } from 'model/Stats'

export const FishyFruit: Item = {
  id: 'FishyFruit',
  name: 'Fishy Fruit',
  category: Produce,
  energy: 32,
  activate: activateFishyFruit,
  relatedCards: () => [Spring],
  relatedStats: () => [Magic],
  relatedStatRanges: () => [Magic],
  relatedEssences: () => [Undine]
}

function activateFishyFruit(project: TemperingProject) {
  project.cards.pending = Spring

  widenStatRange(project, Magic, -1, 3)
  incrementStat(project, Magic)

  taint(project, Undine)
}
