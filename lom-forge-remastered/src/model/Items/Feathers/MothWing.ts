import { SpiritOfForest } from 'model/Cards'
import { AllArmors, Magic, minus25Percent, Pierce, plus50Percent, Slash, Strike } from 'model/Equipment'
import { Feathers, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const MothWing: Item = {
  id: 'MothWing',
  name: 'Moth Wing',
  category: Feathers,
  energy: 32,
  activate: activateMothWing,
  relatedCards: () => [SpiritOfForest],
  relatedArmors: () => AllArmors
}

function activateMothWing(project: TemperingProject) {
  const { energy } = project

  minus25Percent(project, Strike)
  minus25Percent(project, Slash)
  minus25Percent(project, Pierce)
  plus50Percent(project, Magic)

  if (energy >= 8) {
    project.cards.pending = SpiritOfForest
  }
}
