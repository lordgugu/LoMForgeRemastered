import { Aura as AuraCard } from 'model/Cards'
import { Aura, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Coins } from 'model/Items/Coins'
import { TemperingProject } from 'model/Projects'

export const AuraGold: ActiveItem = {
  id: 'AuraGold',
  name: 'Aura Gold',
  category: Coins,
  energy: 64,
  activate: activateAuraGold,
  relatedCards: () => [AuraCard],
  relatedEssences: () => [Aura]
}

function activateAuraGold(project: TemperingProject) {
  taint(project, Aura)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = AuraCard
  }
}
