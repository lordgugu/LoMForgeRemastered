import { PixieOfGluttony } from 'model/Cards/Pixie'
import { ActiveItem } from 'model/Items'
import { Powders } from 'model/Items/Powders'
import { TemperingProject } from 'model/Projects'

export const KnockoutDust: ActiveItem = {
  id: 'KnockoutDust',
  name: 'Knockout Dust',
  category: Powders,
  energy: 8,
  activate: activateKnockoutDust,
  relatedCards: () => [PixieOfGluttony]
}

function activateKnockoutDust(project: TemperingProject) {
  const { energy } = project

  if (energy >= 4) {
    project.cards.pending = PixieOfGluttony
  }
}
