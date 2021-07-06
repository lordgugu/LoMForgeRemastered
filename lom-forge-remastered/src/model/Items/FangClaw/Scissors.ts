import { minus50Percent, plus50Percent } from 'model/Common'
import { AllWeapons } from 'model/Equipment'
import { FangClaw, Item } from 'model/Items'
import { TemperingProject, WeaponProjectType } from 'model/Projects'

export const Scissors: Item = {
  id: 'Scissors',
  name: 'Scissors',
  category: FangClaw,
  energy: 16,
  activate: activateScissors,
  relatedWeapons: () => AllWeapons
}

function activateScissors(project: TemperingProject) {
  if (project.type === WeaponProjectType) {
    const { force, tech } = project.attributes
    project.attributes.force = plus50Percent(force)
    project.attributes.tech = minus50Percent(tech)
  }
}
