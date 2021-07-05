import { plus25Percent, plus50Percent } from 'model/Common'
import { Hat, Helm } from 'model/Equipment'
import { Item, Produce } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'

export const SweetMoai: Item = {
  id: 'SweetMoai',
  name: 'Sweet Moai',
  category: Produce,
  energy: 32,
  activate: activateSweetMoai,
  relatedArmors: () => [Helm, Hat]
}

function activateSweetMoai(project: TemperingProject) {
  if (project.type === ArmorProjectType) {
    const { strike, slash, pierce } = project.attributes

    switch (project.equipment) {
      case Helm:
        project.attributes.strike = plus25Percent(strike)
        project.attributes.slash = plus25Percent(slash)
        project.attributes.pierce = plus25Percent(pierce)
        break
      case Hat:
        project.attributes.strike = plus50Percent(strike)
        project.attributes.slash = plus50Percent(slash)
        project.attributes.pierce = plus50Percent(pierce)
        break
    }
  }
}
