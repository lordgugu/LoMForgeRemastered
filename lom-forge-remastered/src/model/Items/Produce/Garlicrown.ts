import { King } from 'model/Cards'
import { Aura, taint } from 'model/Essences'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Garlicrown: Item = {
  id: 'Garlicrown',
  name: 'Garlicrown',
  category: Produce,
  energy: 8,
  activate: activateGarlicrown,
  relatedCards: () => [King],
  relatedEssences: () => [Aura]
}

function activateGarlicrown(project: TemperingProject) {
  const { energy } = project

  if (energy >= 8) {
    project.mysticPowers.prehidden = King
  }

  project.sticky = false

  taint(project, Aura)
}
