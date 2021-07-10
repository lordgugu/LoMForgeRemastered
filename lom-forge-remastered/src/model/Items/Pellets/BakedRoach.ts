import { Robe } from 'model/Gear/Equipment'
import { addImmunity, Poison } from 'model/Immunities'
import { ActiveItem } from 'model/Items'
import { Pellets } from 'model/Items/Pellets'
import { EquipmentProject, TemperingProject } from 'model/Projects'

export const BakedRoach: ActiveItem = {
  id: 'BakedRoach',
  name: 'Baked Roach',
  category: Pellets,
  energy: 24,
  activate: activateBakedRoach,
  relatedEquipment: () => [Robe],
  relatedImmunities: () => [Poison]
}

function activateBakedRoach(project: TemperingProject) {
  if (project.type === EquipmentProject && project.equipment === Robe) {
    addImmunity(project, Poison)
  }
}
