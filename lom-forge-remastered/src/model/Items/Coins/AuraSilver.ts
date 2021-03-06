import { Aura as AuraCard } from 'model/Cards/Element'
import { Aura, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Coins } from 'model/Items/Coins'
import { TemperingProject } from 'model/Projects'

export const AuraSilver: ActiveItem = {
  id: 'AuraSilver',
  name: 'Aura Silver',
  category: Coins,
  energy: 48,
  activate: activateAuraSilver,
  relatedCards: () => [AuraCard],
  relatedEssences: () => [Aura]
}

function activateAuraSilver(project: TemperingProject) {
  taint(project, Aura)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = AuraCard
  }
}
