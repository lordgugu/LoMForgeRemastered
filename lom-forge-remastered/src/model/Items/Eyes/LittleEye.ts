import { PixieOfPride } from 'model/Cards'
import { plus25Percent } from 'model/Common'
import { AllArmors } from 'model/Equipment'
import { Eyes, Item } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'

export const LittleEye: Item = {
  id: 'LittleEye',
  name: 'Little Eye',
  category: Eyes,
  energy: 32,
  activate: activateLittleEye,
  relatedCards: () => [PixieOfPride],
  relatedArmors: () => AllArmors
}

function activateLittleEye(project: TemperingProject) {
  const { energy } = project

  if (project.type === ArmorProjectType) {
    const { slash } = project.attributes
    project.attributes.slash = plus25Percent(slash)
  }

  if (energy >= 4) {
    project.mysticPowers.prehidden = PixieOfPride
  }
}
