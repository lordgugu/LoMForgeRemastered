import { Jinn as JinnCard } from 'model/Cards'
import { Jinn, taint } from 'model/Essences'
import { Coins, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const JinnSilver: Item = {
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
    project.mysticPowers.prehidden = JinnCard
  }
}
