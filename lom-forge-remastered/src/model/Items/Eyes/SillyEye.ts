import { PixieOfGluttony } from 'model/Cards/Pixie'
import { plus25Percent } from 'model/Gear'
import { Heavy } from 'model/Gear/Weapons'
import { ActiveItem } from 'model/Items'
import { Eyes } from 'model/Items/Eyes'
import { TemperingProject } from 'model/Projects'

export const SillyEye: ActiveItem = {
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
