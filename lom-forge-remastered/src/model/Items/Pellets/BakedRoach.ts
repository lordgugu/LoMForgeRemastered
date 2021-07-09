import { Robe } from 'model/Gear/Equipment'
import { addImmunity, Poison } from 'model/Immunities'
import { Item, Pellets } from 'model/Items'
import { EquipmentProject, TemperingProject } from 'model/Projects'

export const BakedRoach: Item = {
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
