import { ActiveCard, Bottom, CardSlot, Middle, Top, Unicorn } from 'model/Cards'
import { Stage } from 'model/Cards/Stage'
import { Pendant, Ring, Robe } from 'model/Gear/Equipment'
import { addImmunity, Flameburst, Sleep } from 'model/Immunities'
import { FishyFruit } from 'model/Items/Produce'
import { EquipmentProject, TemperingProject } from 'model/Projects'
import { FastRevive } from 'model/Specials'
import { AllStats, widenStatRange } from 'model/Stats'

export const Spring: ActiveCard = {
  id: 'Spring',
  name: 'Spring',
  category: Stage,
  price: 1500,
  activate: activateSpring,
  relatedItems: () => [FishyFruit],
  relatedCards: () => [Unicorn],
  relatedEquipment: () => [Ring, Pendant, Robe],
  relatedSpecials: () => [FastRevive],
  relatedStatRanges: () => AllStats,
  relatedImmunities: () => [Flameburst, Sleep]
}

function activateSpring(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      AllStats.forEach((stat) => widenStatRange(project, stat, -3, 5))

      if (project.type === EquipmentProject) {
        switch (project.equipment) {
          case Robe:
            addImmunity(project, Flameburst)
            break
          case Pendant:
            addImmunity(project, Sleep)
            break
        }
      }

      break
  }
}
