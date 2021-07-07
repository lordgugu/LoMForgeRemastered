import { Hauberk, Magic, minus25Percent, Pierce, plus25Percent, Slash, Strike } from 'model/Equipment'
import { Item, Produce } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'

export const Cabbadillo: Item = {
  id: 'Cabbadillo',
  name: 'Cabbadillo',
  category: Produce,
  energy: 8,
  activate: activateCabadillo,
  relatedArmors: () => [Hauberk]
}

function activateCabadillo(project: TemperingProject) {
  if (project.type === ArmorProjectType && project.equipment === Hauberk) {
    plus25Percent(project, Strike)
    plus25Percent(project, Slash)
    plus25Percent(project, Pierce)
    minus25Percent(project, Magic)
  }
}
