import { Salamander as SalamanderCard } from 'model/Cards'
import { Salamander, taint } from 'model/Essences'
import { Coins, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const SalaSilver: Item = {
  id: 'SalaSilver',
  name: 'Sala Silver',
  category: Coins,
  energy: 48,
  activate: activateSalaSilver,
  relatedCards: () => [SalamanderCard],
  relatedEssences: () => [Salamander]
}

function activateSalaSilver(project: TemperingProject) {
  taint(project, Salamander)

  const { energy } = project

  if (energy >= 8) {
    project.mysticPowers.prehidden = SalamanderCard
  }
}
