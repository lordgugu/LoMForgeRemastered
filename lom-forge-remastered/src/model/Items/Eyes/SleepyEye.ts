import { PixieOfSloth } from 'model/Cards'
import { plus25Percent } from 'model/Gear'
import { Pierce } from 'model/Gear/Equipment'
import { Eyes, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const SleepyEye: Item = {
  id: 'SleepyEye',
  name: 'Sleepy Eye',
  category: Eyes,
  energy: 32,
  activate: activateSleepyEye,
  relatedCards: () => [PixieOfSloth],
  relatedEquipmentAttributes: () => [Pierce]
}

function activateSleepyEye(project: TemperingProject) {
  const { energy } = project

  plus25Percent(project, Pierce)

  if (energy >= 4) {
    project.cards.pending = PixieOfSloth
  }
}
