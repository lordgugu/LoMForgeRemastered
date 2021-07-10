import { ActiveCard, Bottom, CardSlot, Maiden, Middle, Top } from 'model/Cards'
import { Ring } from 'model/Gear/Equipment'
import { Applesocks } from 'model/Items/Produce'
import { EquipmentProject, TemperingProject } from 'model/Projects'
import { FastRevive } from 'model/Specials'

export const NymphOfOrchards: ActiveCard = {
  id: 'NymphOfOrchards',
  name: 'Nymph of Orchards',
  category: Maiden,
  price: 1000,
  activate: activateNymphOfOrchards,
  relatedItems: () => [Applesocks],
  relatedEquipment: () => [Ring],
  relatedSpecials: () => [FastRevive]
}

function activateNymphOfOrchards(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      if (project.type === EquipmentProject && project.equipment === Ring) {
        project.special = FastRevive
      }

      break
  }
}
