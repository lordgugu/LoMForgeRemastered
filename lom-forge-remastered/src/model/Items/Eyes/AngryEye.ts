import { PixieOfWrath } from 'model/Cards/Pixie'
import { plus25Percent } from 'model/Gear'
import { Force } from 'model/Gear/Weapons'
import { ActiveItem } from 'model/Items'
import { Eyes } from 'model/Items/Eyes'
import { TemperingProject } from 'model/Projects'

export const AngryEye: ActiveItem = {
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
