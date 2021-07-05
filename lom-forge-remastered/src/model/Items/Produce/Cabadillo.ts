import { minus25Percent, plus25Percent } from 'model/Common'
import { Hauberk } from 'model/Equipment'
import { Item, Produce } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'

export const Cabadillo: Item = {
  id: 'Cabadillo',
  name: 'Cabadillo',
  category: Produce,
  energy: 8,
  activate: activateCabadillo,
  relatedArmors: () => [Hauberk]
}

function activateCabadillo(project: TemperingProject) {
  if (project.type === ArmorProjectType && project.equipment === Hauberk) {
    const { strike, slash, pierce, magic } = project.attributes
    project.attributes.strike = plus25Percent(strike)
    project.attributes.slash = plus25Percent(slash)
    project.attributes.pierce = plus25Percent(pierce)
    project.attributes.magic = minus25Percent(magic)
  }
}
