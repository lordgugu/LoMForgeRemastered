import { PixieOfEnvy } from 'model/Cards/Pixie'
import { plus25Percent } from 'model/Gear'
import { Tech } from 'model/Gear/Weapons'
import { ActiveItem } from 'model/Items'
import { Eyes } from 'model/Items/Eyes'
import { TemperingProject } from 'model/Projects'

export const BlankEye: ActiveItem = {
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
