import { AllWeapons, Force, minus25Percent, plus25Percent, Tech } from 'model/Equipment'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Apricat: Item = {
  id: 'Apricat',
  name: 'Apricat',
  category: Produce,
  energy: 8,
  activate: activateApricat,
  relatedWeapons: () => AllWeapons
}

function activateApricat(project: TemperingProject) {
  minus25Percent(project, Force)
  plus25Percent(project, Tech)
}
