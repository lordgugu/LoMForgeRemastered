import { minus25Percent, plus25Percent } from 'model/Common'
import { AllWeapons } from 'model/Equipment'
import { Item, Produce } from 'model/Items'
import { TemperingProject, WeaponProjectType } from 'model/Projects'

export const Apricat: Item = {
  id: 'Apricat',
  name: 'Apricat',
  category: Produce,
  energy: 8,
  activate: activateApricat,
  relatedWeapons: () => AllWeapons
}

function activateApricat(project: TemperingProject) {
  if (project.type === WeaponProjectType) {
    const { force, tech } = project.attributes

    project.attributes.force = minus25Percent(force)
    project.attributes.tech = plus25Percent(tech)
  }
}
