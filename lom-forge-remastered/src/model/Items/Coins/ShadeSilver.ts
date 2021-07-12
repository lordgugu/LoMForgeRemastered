import { Shade as ShadeCard } from 'model/Cards/Element'
import { Shade, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Coins } from 'model/Items/Coins'
import { TemperingProject } from 'model/Projects'

export const ShadeSilver: ActiveItem = {
  id: 'ShadeSilver',
  name: 'Shade Silver',
  category: Coins,
  energy: 48,
  activate: activateShadeSilver,
  relatedCards: () => [ShadeCard],
  relatedEssences: () => [Shade]
}

function activateShadeSilver(project: TemperingProject) {
  taint(project, Shade)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = ShadeCard
  }
}
