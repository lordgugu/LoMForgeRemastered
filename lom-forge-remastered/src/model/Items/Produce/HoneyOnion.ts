import { Princess } from 'model/Cards'
import { Dryad, taint } from 'model/Essences'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const HoneyOnion: Item = {
  id: 'HoneyOnion',
  name: 'Honey Onion',
  category: Produce,
  energy: 32,
  activate: activateHoneyOnion,
  relatedCards: () => [Princess],
  relatedEssences: () => [Dryad]
}

function activateHoneyOnion(project: TemperingProject) {
  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = Princess
  }

  taint(project, Dryad)
}
