import { Jinn as JinnCard } from 'model/Cards/Element'
import { Jinn, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Coins } from 'model/Items/Coins'
import { TemperingProject } from 'model/Projects'

export const JinnGold: ActiveItem = {
  id: 'JinnGold',
  name: 'Jinn Gold',
  category: Coins,
  energy: 64,
  activate: activateJinnGold,
  relatedCards: () => [JinnCard],
  relatedEssences: () => [Jinn]
}

function activateJinnGold(project: TemperingProject) {
  taint(project, Jinn)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = JinnCard
  }
}
