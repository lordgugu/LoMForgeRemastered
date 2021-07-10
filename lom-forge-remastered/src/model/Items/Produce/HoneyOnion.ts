import { Princess } from 'model/Cards'
import { Dryad, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'

export const HoneyOnion: ActiveItem = {
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
