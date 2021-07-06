import { Yggdrasil } from 'model/Cards'
import { Dryad, taint } from 'model/Essences'
import { Item, Seeds } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const SpinySeed: Item = {
  id: 'SpinySeed',
  name: 'Spiny Seed',
  category: Seeds,
  energy: 48,
  activate: activateSpinySeed,
  relatedCards: () => [Yggdrasil],
  relatedEssences: () => [Dryad]
}

function activateSpinySeed(project: TemperingProject) {
  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = Yggdrasil
  }

  taint(project, Dryad)
}
