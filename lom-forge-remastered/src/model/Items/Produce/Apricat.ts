import { minus25Percent, plus25Percent } from 'model/Gear'
import { Force, Tech } from 'model/Gear/Weapons'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Apricat: Item = {
  id: 'Apricat',
  name: 'Apricat',
  category: Produce,
  energy: 8,
  activate: activateApricat,
  relatedWeaponAttributes: () => [Force, Tech]
}

function activateApricat(project: TemperingProject) {
  minus25Percent(project, Force)
  plus25Percent(project, Tech)
}
