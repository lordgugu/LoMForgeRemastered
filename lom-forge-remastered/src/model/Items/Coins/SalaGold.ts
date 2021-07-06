import { Salamander as SalamanderCard } from 'model/Cards'
import { Salamander, taint } from 'model/Essences'
import { Coins, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const SalaGold: Item = {
  id: 'SalaGold',
  name: 'Sala Gold',
  category: Coins,
  energy: 64,
  activate: activateSalaGold,
  relatedCards: () => [SalamanderCard],
  relatedEssences: () => [Salamander]
}

function activateSalaGold(project: TemperingProject) {
  taint(project, Salamander)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = SalamanderCard
  }
}
