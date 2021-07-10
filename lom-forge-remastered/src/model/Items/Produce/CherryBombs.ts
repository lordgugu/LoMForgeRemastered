import { Ring } from 'model/Gear/Equipment'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { EquipmentProject, TemperingProject } from 'model/Projects'
import { AllStats, widenStatRange } from 'model/Stats'

export const CherryBombs: ActiveItem = {
  id: 'CherryBombs',
  name: 'Cherry Bombs',
  category: Produce,
  energy: 16,
  activate: activateCherryBombs,
  relatedEquipment: () => [Ring],
  relatedStatRanges: () => AllStats
}

function activateCherryBombs(project: TemperingProject) {
  if (project.type === EquipmentProject && project.equipment === Ring) {
    AllStats.forEach((stat) => widenStatRange(project, stat, -3, 9))
  }
}
