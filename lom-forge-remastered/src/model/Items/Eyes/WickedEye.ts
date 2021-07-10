import { plus25Percent } from 'model/Gear'
import { Sharp } from 'model/Gear/Weapons'
import { ActiveItem } from 'model/Items'
import { Eyes } from 'model/Items/Eyes'
import { TemperingProject } from 'model/Projects'

export const WickedEye: ActiveItem = {
  id: 'WickedEye',
  name: 'Wicked Eye',
  category: Eyes,
  energy: 48,
  activate: activateWickedEye,
  relatedWeaponAttributes: () => [Sharp]
}

function activateWickedEye(project: TemperingProject) {
  plus25Percent(project, Sharp)
}
