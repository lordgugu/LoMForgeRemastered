import { Force, minus50Percent, plus50Percent, Tech } from 'model/Equipment'
import { FangClaw, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Scissors: Item = {
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
