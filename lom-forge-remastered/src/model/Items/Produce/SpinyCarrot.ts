import { minus25Percent, plus25Percent } from 'model/Common'
import { AllWeapons } from 'model/Equipment'
import { taint, Undine } from 'model/Essences'
import { Item, Produce } from 'model/Items'
import { TemperingProject, WeaponProjectType } from 'model/Projects'

export const SpinyCarrot: Item = {
  id: 'SpinyCarrot',
  name: 'Spiny Carrot',
  category: Produce,
  energy: 8,
  activate: activateSpinyCarrot,
  relatedWeapons: () => AllWeapons,
  relatedEssences: () => [Undine]
}

function activateSpinyCarrot(project: TemperingProject) {
  if (project.type === WeaponProjectType) {
    const { sharp, heavy } = project.attributes
    project.attributes.sharp = plus25Percent(sharp)
    project.attributes.heavy = minus25Percent(heavy)
  }

  taint(project, Undine)
}
