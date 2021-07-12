import { Wisp as WispCard } from 'model/Cards/Element'
import { taint, Wisp } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Coins } from 'model/Items/Coins'
import { TemperingProject } from 'model/Projects'

export const WispGold: ActiveItem = {
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
