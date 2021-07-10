import { minus50Percent, plus50Percent } from 'model/Gear'
import { Force, Tech } from 'model/Gear/Weapons'
import { ActiveItem } from 'model/Items'
import { FangClaw } from 'model/Items/FangClaw'
import { TemperingProject } from 'model/Projects'

export const Scissors: ActiveItem = {
  id: 'Scissors',
  name: 'Scissors',
  category: FangClaw,
  energy: 16,
  activate: activateScissors,
  relatedWeaponAttributes: () => [Force, Tech]
}

function activateScissors(project: TemperingProject) {
  plus50Percent(project, Force)
  minus50Percent(project, Tech)
}
