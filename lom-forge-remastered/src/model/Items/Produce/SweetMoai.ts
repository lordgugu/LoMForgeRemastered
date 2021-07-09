import { plus25Percent, plus50Percent } from 'model/Gear'
import { Hat, Helm, Pierce, Slash, Strike } from 'model/Gear/Equipment'
import { Item, Produce } from 'model/Items'
import { EquipmentProject, TemperingProject } from 'model/Projects'

export const SweetMoai: Item = {
  id: 'SweetMoai',
  name: 'Sweet Moai',
  category: Produce,
  energy: 32,
  activate: activateSweetMoai,
  relatedEquipment: () => [Helm, Hat]
}

function activateSweetMoai(project: TemperingProject) {
  if (project.type === EquipmentProject) {
    switch (project.equipment) {
      case Helm:
        plus25Percent(project, Strike)
        plus25Percent(project, Slash)
        plus25Percent(project, Pierce)
        break
      case Hat:
        plus50Percent(project, Strike)
        plus50Percent(project, Slash)
        plus50Percent(project, Pierce)
        break
    }
  }
}
