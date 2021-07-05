import { plus25Percent } from 'model/Common'
import { AllWeapons } from 'model/Equipment'
import { Item, Produce } from 'model/Items'
import { TemperingProject, WeaponProjectType } from 'model/Projects'

export const GoldClover: Item = {
  id: 'GoldClover',
  name: 'Gold Clover',
  category: Produce,
  energy: 64,
  activate: activateGoldClover,
  relatedWeapons: () => AllWeapons
}

function activateGoldClover(project: TemperingProject) {
  if (project.type === WeaponProjectType) {
    const { weight } = project.attributes
    project.attributes.weight = plus25Percent(weight)
  }
}
