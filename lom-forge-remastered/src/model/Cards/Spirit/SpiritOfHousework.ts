import { ActiveCard, Bottom, CardSlot, Middle, Spirit, Top } from 'model/Cards'
import { Mantle, Ring } from 'model/Gear/Equipment'
import { addImmunity, Sleep } from 'model/Immunities'
import { Hairball } from 'model/Items/Pouch'
import { EquipmentProject, TemperingProject } from 'model/Projects'
import { ExtraLucre } from 'model/Specials'
import { incrementStat, Luck } from 'model/Stats'

export const SpiritOfHousework: ActiveCard = {
  id: 'SpiritOfHousework',
  name: 'Spirit (of Housework)',
  category: Spirit,
  price: 800,
  activate: activateSpiritOfHousework,
  relatedItems: () => [Hairball],
  relatedStats: () => [Luck],
  relatedEquipment: () => [Mantle, Ring],
  relatedImmunities: () => [Sleep],
  relatedSpecials: () => [ExtraLucre]
}

function activateSpiritOfHousework(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      incrementStat(project, Luck)

      if (project.type === EquipmentProject) {
        switch (project.equipment) {
          case Mantle:
            addImmunity(project, Sleep)
            break
          case Ring:
            project.special = ExtraLucre
            break
        }
      }
      break
  }
}
