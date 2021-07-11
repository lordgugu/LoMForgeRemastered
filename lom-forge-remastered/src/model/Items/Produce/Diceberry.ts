import { WindGod } from 'model/Cards/HeavenGod'
import { Jinn, totalLevels } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'
import { incrementStat, Luck } from 'model/Stats'

export const Diceberry: ActiveItem = {
  id: 'Diceberry',
  name: 'Diceberry',
  category: Produce,
  energy: 16,
  activate: activateDiceberry,
  relatedCards: () => [WindGod],
  relatedEssences: () => [Jinn],
  relatedStats: () => [Luck]
}

function activateDiceberry(project: TemperingProject) {
  const { jinn } = project.levels
  const total = totalLevels(project)

  if (jinn >= 3 && total >= 5) {
    project.cards.pending = WindGod
  }

  incrementStat(project, Luck)
}
