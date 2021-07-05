import { PixieOfGreed } from 'model/Cards'
import { plus25Percent } from 'model/Common'
import { AllArmors } from 'model/Equipment'
import { Eyes, Item } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'

export const DangerousEye: Item = {
  id: 'DangerousEye',
  name: 'Dangerous Eye',
  category: Eyes,
  energy: 32,
  activate: activateDangerousEye,
  relatedCards: () => [PixieOfGreed],
  relatedArmors: () => AllArmors
}

function activateDangerousEye(project: TemperingProject) {
  const { energy } = project

  if (project.type === ArmorProjectType) {
    const { strike } = project.attributes
    project.attributes.strike = plus25Percent(strike)
  }

  if (energy >= 4) {
    project.mysticPowers.prehidden = PixieOfGreed
  }
}
