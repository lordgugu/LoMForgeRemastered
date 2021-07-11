import { Spring } from 'model/Cards/Stage'
import { taint, Undine } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'
import { incrementStat, Magic, widenStatRange } from 'model/Stats'

export const FishyFruit: ActiveItem = {
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
