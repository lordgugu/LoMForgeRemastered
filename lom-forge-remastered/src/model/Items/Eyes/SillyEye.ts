import { PixieOfGluttony } from 'model/Cards'
import { AllWeapons, Heavy, plus25Percent } from 'model/Equipment'
import { Eyes, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

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

  plus25Percent(project, Heavy)

  if (energy >= 4) {
    project.cards.pending = PixieOfGluttony
  }
}
