import { SpiritOfForest } from 'model/Cards'
import { minus25Percent, plus50Percent } from 'model/Gear'
import { Magic, Pierce, Slash, Strike } from 'model/Gear/Equipment'
import { Feathers, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const MothWing: Item = {
  id: 'MothWing',
  name: 'Moth Wing',
  category: Feathers,
  energy: 32,
  activate: activateMothWing,
  relatedCards: () => [SpiritOfForest],
  relatedEquipmentAttributes: () => [Strike, Slash, Pierce, Magic]
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
