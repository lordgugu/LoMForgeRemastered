import { PixieOfLust } from 'model/Cards/Pixie'
import { plus25Percent } from 'model/Gear'
import { Magic } from 'model/Gear/Equipment'
import { ActiveItem } from 'model/Items'
import { Eyes } from 'model/Items/Eyes'
import { TemperingProject } from 'model/Projects'

export const CreepyEye: ActiveItem = {
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
