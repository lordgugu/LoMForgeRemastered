import { PixieOfSloth } from 'model/Cards'
import { plus25Percent } from 'model/Common'
import { AllArmors } from 'model/Equipment'
import { Eyes, Item } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'

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

  if (project.type === ArmorProjectType) {
    const { pierce } = project.attributes
    project.attributes.pierce = plus25Percent(pierce)
  }

  if (energy >= 4) {
    project.mysticPowers.prehidden = PixieOfSloth
  }
}
