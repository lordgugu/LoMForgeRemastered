import { PixieOfGreed } from 'model/Cards'
import { plus25Percent, Strike } from 'model/Equipment'
import { Eyes, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const DangerousEye: Item = {
  id: 'DangerousEye',
  name: 'Dangerous Eye',
  category: Eyes,
  energy: 32,
  activate: activateDangerousEye,
  relatedCards: () => [PixieOfGreed],
  relatedArmorAttributes: () => [Strike]
}

function activateDangerousEye(project: TemperingProject) {
  const { energy } = project

  plus25Percent(project, Strike)

  if (energy >= 4) {
    project.cards.pending = PixieOfGreed
  }
}
