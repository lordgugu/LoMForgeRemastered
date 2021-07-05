import { Ring } from 'model/Equipment'
import { Item, Produce } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'
import { AllStats, widenStatRange } from 'model/Stats'

export const CherryBombs: Item = {
  id: 'CherryBombs',
  name: 'Cherry Bombs',
  category: Produce,
  energy: 16,
  activate: activateCherryBombs,
  relatedArmors: () => [Ring],
  relatedStats: () => AllStats
}

function activateCherryBombs(project: TemperingProject) {
  if (project.type === ArmorProjectType && project.equipment === Ring) {
    AllStats.forEach((stat) => widenStatRange(project, stat, -3, 9))
  }
}
