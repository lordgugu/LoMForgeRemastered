import { HeavensScale } from 'model/Cards/World'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'

export const Springanana: ActiveItem = {
  id: 'Springanana',
  name: 'Springanana',
  category: Produce,
  energy: 16,
  activate: activateSpringanana,
  relatedCards: () => [HeavensScale]
}

function activateSpringanana(project: TemperingProject) {
  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = HeavensScale
  }
}
