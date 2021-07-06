import { Shade as ShadeCard } from 'model/Cards'
import { Shade, taint } from 'model/Essences'
import { Coins, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const ShadeGold: Item = {
  id: 'ShadeGold',
  name: 'Shade Gold',
  category: Coins,
  energy: 64,
  activate: activateShadeGold,
  relatedCards: () => [ShadeCard],
  relatedEssences: () => [Shade]
}

function activateShadeGold(project: TemperingProject) {
  taint(project, Shade)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = ShadeCard
  }
}
