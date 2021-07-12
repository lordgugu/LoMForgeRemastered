import { Shade as ShadeCard } from 'model/Cards/Element'
import { Shade, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Coins } from 'model/Items/Coins'
import { TemperingProject } from 'model/Projects'

export const ShadeGold: ActiveItem = {
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
