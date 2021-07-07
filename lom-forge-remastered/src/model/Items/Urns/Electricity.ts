import { ThunderGod } from 'model/Cards'
import { Jinn, Salamander, Wisp } from 'model/Essences'
import { Item, Urns } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Electricity: Item = {
  id: 'Electricity',
  name: 'Electricity',
  category: Urns,
  energy: 32,
  activate: activateElectricity,
  relatedCards: () => [ThunderGod],
  relatedEssences: () => [Wisp, Salamander, Jinn]
}

function activateElectricity(project: TemperingProject) {
  const { energy } = project
  const { wisp, salamander, jinn } = project.levels

  if (wisp >= 3 && salamander >= 3 && jinn >= 3 && energy >= 8) {
    project.cards.pending = ThunderGod
  }
}
