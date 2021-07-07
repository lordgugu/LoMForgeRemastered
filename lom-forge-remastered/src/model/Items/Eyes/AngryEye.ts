import { PixieOfWrath } from 'model/Cards'
import { Force, plus25Percent } from 'model/Equipment'
import { Eyes, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const AngryEye: Item = {
  id: 'AngryEye',
  name: 'Angry Eye',
  category: Eyes,
  energy: 32,
  activate: activateAngryEye,
  relatedCards: () => [PixieOfWrath],
  relatedWeaponAttributes: () => [Force]
}

function activateAngryEye(project: TemperingProject) {
  const { energy } = project

  plus25Percent(project, Force)

  if (energy >= 4) {
    project.cards.pending = PixieOfWrath
  }
}
