import { PixieOfEnvy } from 'model/Cards'
import { AllWeapons, plus25Percent, Tech } from 'model/Equipment'
import { Eyes, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const BlankEye: Item = {
  id: 'BlankEye',
  name: 'Blank Eye',
  category: Eyes,
  energy: 32,
  activate: activateBlankEye,
  relatedCards: () => [PixieOfEnvy],
  relatedWeapons: () => AllWeapons
}

function activateBlankEye(project: TemperingProject) {
  const { energy } = project

  plus25Percent(project, Tech)

  if (energy >= 4) {
    project.cards.pending = PixieOfEnvy
  }
}
