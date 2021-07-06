import {
  Cleric,
  PixieOfEnvy,
  PixieOfGluttony,
  PixieOfGreed,
  PixieOfLust,
  PixieOfPride,
  PixieOfSloth,
  PixieOfWrath
} from 'model/Cards'
import { Bottles, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const HolyWater: Item = {
  id: 'HolyWater',
  name: 'Holy Water',
  category: Bottles,
  energy: 16,
  activate: activateHolyWater,
  relatedCards: () => [
    Cleric,
    PixieOfEnvy,
    PixieOfGluttony,
    PixieOfGreed,
    PixieOfLust,
    PixieOfPride,
    PixieOfSloth,
    PixieOfWrath
  ]
}

function activateHolyWater(project: TemperingProject) {
  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = Cleric
  }

  project.sticky = false
}
