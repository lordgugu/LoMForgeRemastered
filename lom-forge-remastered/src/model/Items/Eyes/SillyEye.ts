import { PixieOfGluttony } from 'model/Cards'
import { plus25Percent } from 'model/Gear'
import { Heavy } from 'model/Gear/Weapons'
import { Eyes, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const SillyEye: Item = {
  id: 'SillyEye',
  name: 'Silly Eye',
  category: Eyes,
  energy: 32,
  activate: activateSillyEye,
  relatedCards: () => [PixieOfGluttony],
  relatedWeaponAttributes: () => [Heavy]
}

function activateSillyEye(project: TemperingProject) {
  const { energy } = project

  plus25Percent(project, Heavy)

  if (energy >= 4) {
    project.cards.pending = PixieOfGluttony
  }
}
