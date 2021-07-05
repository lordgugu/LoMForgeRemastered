import { minus25Percent, plus25Percent } from 'model/Common'
import { AllArmors, AllWeapons } from 'model/Equipment'
import { Item, Produce } from 'model/Items'
import { ArmorProjectType, TemperingProject, WeaponProjectType } from 'model/Projects'

export const Citrisquid: Item = {
  id: 'Citrisquid',
  name: 'Citrisquid',
  category: Produce,
  energy: 8,
  activate: activateCitrisquid,
  relatedWeapons: () => AllWeapons,
  relatedArmors: () => AllArmors
}

function activateCitrisquid(project: TemperingProject) {
  switch (project.type) {
    case WeaponProjectType:
      const { sharpness, weight } = project.attributes
      project.attributes.sharpness = minus25Percent(sharpness)
      project.attributes.weight = plus25Percent(weight)
      break
    case ArmorProjectType:
      const { slash, strike } = project.attributes
      project.attributes.slash = minus25Percent(slash)
      project.attributes.strike = plus25Percent(strike)
      break
  }
}
