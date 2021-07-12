import { ActiveCard, Bottom, CardSlot, Middle, Top } from 'model/Cards'
import { Spirit } from 'model/Cards/Spirit'
import { Hat } from 'model/Gear/Equipment'
import { addImmunity, Confusion } from 'model/Immunities'
import { Conchurnip } from 'model/Items/Produce'
import { EquipmentProject, TemperingProject } from 'model/Projects'
import { Charm, incrementStat } from 'model/Stats'

export const SpiritOfOcean: ActiveCard = {
  id: 'SpiritOfOcean',
  name: 'Spirit (of Ocean)',
  category: Spirit,
  price: 800,
  activate: activateSpiritOfOcean,
  relatedItems: () => [Conchurnip],
  relatedStats: () => [Charm],
  relatedEquipment: () => [Hat],
  relatedImmunities: () => [Confusion]
}

function activateSpiritOfOcean(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      incrementStat(project, Charm)

      if (project.type === EquipmentProject && project.equipment === Hat) {
        addImmunity(project, Confusion)
      }
      break
  }
}
