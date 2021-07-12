import { PixieOfGreed } from 'model/Cards/Pixie'
import { plus25Percent } from 'model/Gear'
import { Strike } from 'model/Gear/Equipment'
import { ActiveItem } from 'model/Items'
import { Eyes } from 'model/Items/Eyes'
import { TemperingProject } from 'model/Projects'

export const DangerousEye: ActiveItem = {
  id: 'DangerousEye',
  name: 'Dangerous Eye',
  category: Eyes,
  energy: 32,
  activate: activateDangerousEye,
  relatedCards: () => [PixieOfGreed],
  relatedEquipmentAttributes: () => [Strike]
}

function activateDangerousEye(project: TemperingProject) {
  const { energy } = project

  plus25Percent(project, Strike)

  if (energy >= 4) {
    project.cards.pending = PixieOfGreed
  }
}
