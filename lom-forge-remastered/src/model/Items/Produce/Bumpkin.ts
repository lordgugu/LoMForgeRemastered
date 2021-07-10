import { Clown } from 'model/Cards'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'
import { Luck, setMinimumStatValue, widenStatRange } from 'model/Stats'

export const Bumpkin: ActiveItem = {
  id: 'Bumpkin',
  name: 'Bumpkin',
  category: Produce,
  energy: 24,
  activate: activateBumpkin,
  relatedCards: () => [Clown],
  relatedStats: () => [Luck],
  relatedStatRanges: () => [Luck]
}

function activateBumpkin(project: TemperingProject) {
  const { energy } = project

  widenStatRange(project, Luck, -1, 3)
  setMinimumStatValue(project, Luck, 5)

  if (energy >= 8) {
    project.cards.pending = Clown
  }
}
