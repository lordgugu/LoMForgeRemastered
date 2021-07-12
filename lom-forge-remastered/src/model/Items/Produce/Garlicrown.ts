import { King } from 'model/Cards/None'
import {
  PixieOfEnvy,
  PixieOfGluttony,
  PixieOfGreed,
  PixieOfLust,
  PixieOfPride,
  PixieOfSloth,
  PixieOfWrath
} from 'model/Cards/Pixie'
import { Aura, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'

export const Garlicrown: ActiveItem = {
  id: 'Garlicrown',
  name: 'Garlicrown',
  category: Produce,
  energy: 8,
  activate: activateGarlicrown,
  relatedCards: () => [
    King,
    PixieOfEnvy,
    PixieOfGluttony,
    PixieOfGreed,
    PixieOfLust,
    PixieOfPride,
    PixieOfSloth,
    PixieOfWrath
  ],
  relatedEssences: () => [Aura]
}

function activateGarlicrown(project: TemperingProject) {
  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = King
  }

  project.sticky = false

  taint(project, Aura)
}
