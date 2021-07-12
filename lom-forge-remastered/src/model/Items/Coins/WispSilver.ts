import { Wisp as WispCard } from 'model/Cards/Element'
import { taint, Wisp } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Coins } from 'model/Items/Coins'
import { TemperingProject } from 'model/Projects'

export const WispSilver: ActiveItem = {
  id: 'WispSilver',
  name: 'Wisp Silver',
  category: Coins,
  energy: 48,
  activate: activateWispSilver,
  relatedCards: () => [WispCard],
  relatedEssences: () => [Wisp]
}

function activateWispSilver(project: TemperingProject) {
  taint(project, Wisp)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = WispCard
  }
}
