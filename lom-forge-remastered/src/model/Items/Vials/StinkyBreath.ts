import { PixieOfLust } from 'model/Cards'
import { AllArmors } from 'model/Equipment'
import { Confusion, Poison, setImmunities } from 'model/Immunities'
import { Item, Vials } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'

export const StinkyBreath: Item = {
  id: 'StinkyBreath',
  name: 'Stinky Breath',
  category: Vials,
  energy: 16,
  activate: activateStinkyBreath,
  relatedCards: () => [PixieOfLust],
  relatedArmors: () => AllArmors,
  relatedImmunities: () => [Poison, Confusion]
}

function activateStinkyBreath(project: TemperingProject) {
  const { energy } = project

  if (project.type === ArmorProjectType) {
    setImmunities(project, Poison, Confusion)
  }

  if (energy >= 4) {
    project.cards.pending = PixieOfLust
  }
}
