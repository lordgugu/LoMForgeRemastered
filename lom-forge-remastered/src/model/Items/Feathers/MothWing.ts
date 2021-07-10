import { SpiritOfForest } from 'model/Cards'
import { minus25Percent, plus50Percent } from 'model/Gear'
import { Magic, Pierce, Slash, Strike } from 'model/Gear/Equipment'
import { ActiveItem } from 'model/Items'
import { Feathers } from 'model/Items/Feathers'
import { TemperingProject } from 'model/Projects'

export const MothWing: ActiveItem = {
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
