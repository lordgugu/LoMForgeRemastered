import { ManOfValor } from 'model/Cards'
import { AllWeapons, Force, plus25Percent, Tech } from 'model/Equipment'
import { Salamander, totalLevels, Wisp } from 'model/Essences'
import { Item, Vials } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const DragonsBreath: Item = {
  id: 'DragonsBreath',
  name: "Dragon's Breath",
  category: Vials,
  energy: 24,
  activate: activateDragonsBreath,
  relatedCards: () => [ManOfValor],
  relatedWeapons: () => AllWeapons,
  relatedEssences: () => [Wisp, Salamander]
}

function activateDragonsBreath(project: TemperingProject) {
  const { energy } = project
  const { wisp, salamander } = project.levels
  const total = totalLevels(project)

  plus25Percent(project, Force)
  plus25Percent(project, Tech)

  if (wisp > 0 && salamander > 0 && total >= 3 && energy >= 8) {
    project.cards.pending = ManOfValor
  }
}
