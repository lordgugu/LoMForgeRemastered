import { ActiveCard, Bottom, CardSlot, Cleric, Clown, King, Middle, Princess, Stage, Top } from 'model/Cards'
import { plus25Percent, plus50Percent } from 'model/Gear'
import { Magic, Robe } from 'model/Gear/Equipment'
import { addImmunity, Confusion } from 'model/Immunities'
import { Dialaurel } from 'model/Items/Produce'
import { EquipmentProject, TemperingProject } from 'model/Projects'

export const Metropolis: ActiveCard = {
  id: 'Metropolis',
  name: 'Metropolis',
  category: Stage,
  price: 1500,
  activate: activateMetropolis,
  relatedItems: () => [Dialaurel],
  relatedCards: () => [King, Princess, Clown, Cleric],
  relatedEquipment: () => [Robe],
  relatedImmunities: () => [Confusion],
  relatedEquipmentAttributes: () => [Magic]
}

function activateMetropolis(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      if (project.type === EquipmentProject && project.equipment === Robe) {
        plus50Percent(project, Magic)
        addImmunity(project, Confusion)
      } else {
        plus25Percent(project, Magic)
      }
      break
  }
}
