import { HeavensScale } from 'model/Cards'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Springanana: Item = {
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
    project.mysticPowers.prehidden = HeavensScale
  }
}
