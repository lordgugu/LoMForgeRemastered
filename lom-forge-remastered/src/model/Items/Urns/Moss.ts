import { Helm } from 'model/Equipment'
import { addImmunity, Darkness } from 'model/Immunities'
import { Item, Urns } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'

export const Moss: Item = {
  id: 'Moss',
  name: 'Moss',
  category: Urns,
  energy: 32,
  activate: activateMoss,
  relatedArmors: () => [Helm],
  relatedImmunities: () => [Darkness]
}

function activateMoss(project: TemperingProject) {
  if (project.type === ArmorProjectType && project.equipment === Helm) {
    addImmunity(project, Darkness)
  }
}
