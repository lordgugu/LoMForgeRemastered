import { Wisp as WispCard } from 'model/Cards'
import { taint, Wisp } from 'model/Essences'
import { Coins, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const WispGold: Item = {
  id: 'WispGold',
  name: 'Wisp Gold',
  category: Coins,
  energy: 64,
  activate: activateWispGold,
  relatedCards: () => [WispCard],
  relatedEssences: () => [Wisp]
}

function activateWispGold(project: TemperingProject) {
  taint(project, Wisp)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = WispCard
  }
}
