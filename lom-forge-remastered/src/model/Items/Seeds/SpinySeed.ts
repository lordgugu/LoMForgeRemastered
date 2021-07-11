import { Yggdrasil } from 'model/Cards/World'
import { Dryad, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Seeds } from 'model/Items/Seeds'
import { TemperingProject } from 'model/Projects'

export const SpinySeed: ActiveItem = {
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
  const { dryad } = project.levels

  if (dryad >= 5 && energy >= 8) {
    project.cards.pending = Yggdrasil
  }

  taint(project, Dryad)
}
