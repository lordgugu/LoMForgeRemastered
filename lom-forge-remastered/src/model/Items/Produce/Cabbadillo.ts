import { minus25Percent, plus25Percent } from 'model/Gear'
import { Hauberk, Magic, Pierce, Slash, Strike } from 'model/Gear/Equipment'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { EquipmentProject, TemperingProject } from 'model/Projects'

export const Cabbadillo: ActiveItem = {
  id: 'Cabbadillo',
  name: 'Cabbadillo',
  category: Produce,
  energy: 8,
  activate: activateCabadillo,
  relatedEquipment: () => [Hauberk]
}

function activateCabadillo(project: TemperingProject) {
  if (project.type === EquipmentProject && project.equipment === Hauberk) {
    plus25Percent(project, Strike)
    plus25Percent(project, Slash)
    plus25Percent(project, Pierce)
    minus25Percent(project, Magic)
  }
}
