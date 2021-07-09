import { PixieOfEnvy } from 'model/Cards'
import { plus25Percent } from 'model/Gear'
import { Tech } from 'model/Gear/Weapons'
import { Eyes, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const BlankEye: Item = {
  id: 'BlankEye',
  name: 'Blank Eye',
  category: Eyes,
  energy: 32,
  activate: activateBlankEye,
  relatedCards: () => [PixieOfEnvy],
  relatedWeaponAttributes: () => [Tech]
}

function activateBlankEye(project: TemperingProject) {
  const { energy } = project

  plus25Percent(project, Tech)

  if (energy >= 4) {
    project.cards.pending = PixieOfEnvy
  }
}
