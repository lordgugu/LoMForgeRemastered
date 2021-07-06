import { Robe } from 'model/Equipment'
import { addImmunity, Poison } from 'model/Immunities'
import { Item, Pellets } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'

export const BakedRoach: Item = {
  id: 'BakedRoach',
  name: 'Baked Roach',
  category: Pellets,
  energy: 24,
  activate: activateBakedRoach,
  relatedArmors: () => [Robe],
  relatedImmunities: () => [Poison]
}

function activateBakedRoach(project: TemperingProject) {
  if (project.type === ArmorProjectType && project.equipment === Robe) {
    addImmunity(project, Poison)
  }
}
