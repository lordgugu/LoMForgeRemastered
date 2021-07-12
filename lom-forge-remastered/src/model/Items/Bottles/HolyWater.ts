import { Cleric } from 'model/Cards'
import {
  PixieOfEnvy,
  PixieOfGluttony,
  PixieOfGreed,
  PixieOfLust,
  PixieOfPride,
  PixieOfSloth,
  PixieOfWrath
} from 'model/Cards/Pixie'
import { ActiveItem } from 'model/Items'
import { Bottles } from 'model/Items/Bottles'
import { TemperingProject } from 'model/Projects'

export const HolyWater: ActiveItem = {
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
