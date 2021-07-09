import { Helm } from 'model/Gear/Equipment'
import { addImmunity, Darkness } from 'model/Immunities'
import { Item, Urns } from 'model/Items'
import { EquipmentProject, TemperingProject } from 'model/Projects'

export const Moss: Item = {
  id: 'Moss',
  name: 'Moss',
  category: Urns,
  energy: 32,
  activate: activateMoss,
  relatedEquipment: () => [Helm],
  relatedImmunities: () => [Darkness]
}

function activateMoss(project: TemperingProject) {
  if (project.type === EquipmentProject && project.equipment === Helm) {
    addImmunity(project, Darkness)
  }
}
