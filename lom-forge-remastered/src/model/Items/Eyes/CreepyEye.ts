import { PixieOfLust } from 'model/Cards'
import { plus25Percent } from 'model/Common'
import { AllArmors } from 'model/Equipment'
import { Eyes, Item } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'

export const CreepyEye: Item = {
  id: 'CreepyEye',
  name: 'Creepy Eye',
  category: Eyes,
  energy: 32,
  activate: activateCreepyEye,
  relatedCards: () => [PixieOfLust],
  relatedArmors: () => AllArmors
}

function activateCreepyEye(project: TemperingProject) {
  const { energy } = project

  if (project.type === ArmorProjectType) {
    const { magic } = project.attributes
    project.attributes.magic = plus25Percent(magic)
  }

  if (energy >= 4) {
    project.mysticPowers.prehidden = PixieOfLust
  }
}
