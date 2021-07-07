import { PixieOfGreed } from 'model/Cards'
import { AllArmors, plus25Percent, Strike } from 'model/Equipment'
import { Eyes, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const DangerousEye: Item = {
  id: 'DangerousEye',
  name: 'Dangerous Eye',
  category: Eyes,
  energy: 32,
  activate: activateDangerousEye,
  relatedCards: () => [PixieOfGreed],
  relatedArmors: () => AllArmors
}

function activateDangerousEye(project: TemperingProject) {
  const { energy } = project

  plus25Percent(project, Strike)

  if (energy >= 4) {
    project.cards.pending = PixieOfGreed
  }
}
