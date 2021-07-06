import { PixieOfGluttony } from 'model/Cards'
import { plus25Percent } from 'model/Common'
import { AllWeapons } from 'model/Equipment'
import { Eyes, Item } from 'model/Items'
import { TemperingProject, WeaponProjectType } from 'model/Projects'

export const SillyEye: Item = {
  id: 'SillyEye',
  name: 'Silly Eye',
  category: Eyes,
  energy: 32,
  activate: activateSillyEye,
  relatedCards: () => [PixieOfGluttony],
  relatedWeapons: () => AllWeapons
}

function activateSillyEye(project: TemperingProject) {
  const { energy } = project

  if (project.type === WeaponProjectType) {
    const { heavy } = project.attributes
    project.attributes.heavy = plus25Percent(heavy)
  }

  if (energy >= 4) {
    project.cards.pending = PixieOfGluttony
  }
}
