import { AllWeapons, plus25Percent, Sharp } from 'model/Equipment'
import { Eyes, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const WickedEye: Item = {
  id: 'WickedEye',
  name: 'Wicked Eye',
  category: Eyes,
  energy: 48,
  activate: activateWickedEye,
  relatedWeapons: () => AllWeapons
}

function activateWickedEye(project: TemperingProject) {
  plus25Percent(project, Sharp)
}
