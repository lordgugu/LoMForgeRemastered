import { Jinn as JinnCard } from 'model/Cards'
import { Jinn, taint } from 'model/Essences'
import { Coins, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const JinnGold: Item = {
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
