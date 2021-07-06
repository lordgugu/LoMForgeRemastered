import { PixieOfWrath } from 'model/Cards'
import { plus25Percent } from 'model/Common'
import { AllWeapons } from 'model/Equipment'
import { Eyes, Item } from 'model/Items'
import { TemperingProject, WeaponProjectType } from 'model/Projects'

export const AngryEye: Item = {
  id: 'AngryEye',
  name: 'Angry Eye',
  category: Eyes,
  energy: 32,
  activate: activateAngryEye,
  relatedCards: () => [PixieOfWrath],
  relatedWeapons: () => AllWeapons
}

function activateAngryEye(project: TemperingProject) {
  const { energy } = project

  if (project.type === WeaponProjectType) {
    const { force } = project.attributes
    project.attributes.force = plus25Percent(force)
  }

  if (energy >= 4) {
    project.cards.pending = PixieOfWrath
  }
}
