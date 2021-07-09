import { PixieOfLust } from 'model/Cards'
import { AllEquipment } from 'model/Gear/Equipment'
import { Confusion, Poison, setImmunities } from 'model/Immunities'
import { Item, Vials } from 'model/Items'
import { EquipmentProject, TemperingProject } from 'model/Projects'

export const StinkyBreath: Item = {
  id: 'StinkyBreath',
  name: 'Stinky Breath',
  category: Vials,
  energy: 16,
  activate: activateStinkyBreath,
  relatedCards: () => [PixieOfLust],
  relatedEquipment: () => AllEquipment,
  relatedImmunities: () => [Poison, Confusion]
}

function activateStinkyBreath(project: TemperingProject) {
  const { energy } = project

  if (project.type === EquipmentProject) {
    setImmunities(project, Poison, Confusion)
  }

  if (energy >= 4) {
    project.cards.pending = PixieOfLust
  }
}
