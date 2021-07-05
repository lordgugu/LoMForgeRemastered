import { Jinn as JinnCard } from 'model/Cards'
import { Jinn, taint } from 'model/Essences'
import { Item, MagicStones } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const WindStone: Item = {
  id: 'WindStone',
  name: 'Wind Stone',
  category: MagicStones,
  energy: 24,
  activate: activateWindStone,
  relatedCards: () => [JinnCard],
  relatedEssences: () => [Jinn]
}

function activateWindStone(project: TemperingProject) {
  taint(project, Jinn)

  const { energy } = project

  if (energy >= 8) {
    project.mysticPowers.prehidden = JinnCard
  }
}
