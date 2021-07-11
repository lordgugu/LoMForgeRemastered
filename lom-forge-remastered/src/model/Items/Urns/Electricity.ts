import { ThunderGod } from 'model/Cards/HeavenGod'
import { Jinn, Salamander, Wisp } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Urns } from 'model/Items/Urns'
import { TemperingProject } from 'model/Projects'

export const Electricity: ActiveItem = {
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
