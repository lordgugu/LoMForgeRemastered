import { PixieOfSloth } from 'model/Cards'
import { AllArmors, Pierce, plus25Percent } from 'model/Equipment'
import { Eyes, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const SleepyEye: Item = {
  id: 'SleepyEye',
  name: 'Sleepy Eye',
  category: Eyes,
  energy: 32,
  activate: activateSleepyEye,
  relatedCards: () => [PixieOfSloth],
  relatedArmors: () => AllArmors
}

function activateSleepyEye(project: TemperingProject) {
  const { energy } = project

  plus25Percent(project, Pierce)

  if (energy >= 4) {
    project.cards.pending = PixieOfSloth
  }
}
