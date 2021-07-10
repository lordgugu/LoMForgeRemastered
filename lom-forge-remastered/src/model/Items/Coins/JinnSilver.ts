import { Jinn as JinnCard } from 'model/Cards'
import { Jinn, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Coins } from 'model/Items/Coins'
import { TemperingProject } from 'model/Projects'

export const JinnSilver: ActiveItem = {
  id: 'JinnSilver',
  name: 'Jinn Silver',
  category: Coins,
  energy: 48,
  activate: activateJinnSilver,
  relatedCards: () => [JinnCard],
  relatedEssences: () => [Jinn]
}

function activateJinnSilver(project: TemperingProject) {
  taint(project, Jinn)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = JinnCard
  }
}
