import { Wisp as WispCard } from 'model/Cards'
import { taint, Wisp } from 'model/Essences'
import { Coins, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const WispSilver: Item = {
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
