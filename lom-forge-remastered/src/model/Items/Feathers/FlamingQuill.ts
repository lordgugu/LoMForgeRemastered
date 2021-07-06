import { Phoenix } from 'model/Cards'
import { Jinn, Salamander } from 'model/Essences'
import { Feathers, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { Power, setMinimumStatValue, widenStatRange } from 'model/Stats'

export const FlamingQuill: Item = {
  id: 'FlamingQuill',
  name: 'Flaming Quill',
  category: Feathers,
  energy: 64,
  activate: activateFlamingQuill,
  relatedCards: () => [Phoenix],
  relatedStats: () => [Power],
  relatedEssences: () => [Salamander, Jinn]
}

function activateFlamingQuill(project: TemperingProject) {
  const { energy } = project
  const { sala, jinn } = project.levels

  widenStatRange(project, Power, -3, 5)
  setMinimumStatValue(project, Power, 5)

  if (sala >= 3 && jinn >= 3 && energy >= 4) {
    project.cards.pending = Phoenix
  }
}
