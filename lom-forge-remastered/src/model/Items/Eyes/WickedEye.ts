import { plus25Percent } from 'model/Common'
import { AllWeapons } from 'model/Equipment'
import { Eyes, Item } from 'model/Items'
import { TemperingProject, WeaponProjectType } from 'model/Projects'

export const WickedEye: Item = {
  id: 'WickedEye',
  name: 'Wicked Eye',
  category: Eyes,
  energy: 48,
  activate: activateWickedEye,
  relatedWeapons: () => AllWeapons
}

function activateWickedEye(project: TemperingProject) {
  if (project.type === WeaponProjectType) {
    const { sharpness } = project.attributes
    project.attributes.sharpness = plus25Percent(sharpness)
  }
}
