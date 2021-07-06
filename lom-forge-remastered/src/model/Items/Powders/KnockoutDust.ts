import { PixieOfGluttony } from 'model/Cards'
import { Item, Powders } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const KnockoutDust: Item = {
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
