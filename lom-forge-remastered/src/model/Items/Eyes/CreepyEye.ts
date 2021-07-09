import { PixieOfLust } from 'model/Cards'
import { plus25Percent } from 'model/Gear'
import { Magic } from 'model/Gear/Equipment'
import { Eyes, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const CreepyEye: Item = {
  id: 'CreepyEye',
  name: 'Creepy Eye',
  category: Eyes,
  energy: 32,
  activate: activateCreepyEye,
  relatedCards: () => [PixieOfLust],
  relatedEquipmentAttributes: () => [Magic]
}

function activateCreepyEye(project: TemperingProject) {
  const { energy } = project

  plus25Percent(project, Magic)

  if (energy >= 4) {
    project.cards.pending = PixieOfLust
  }
}
