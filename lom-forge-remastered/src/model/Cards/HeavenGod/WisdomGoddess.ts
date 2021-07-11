import { ActiveCard, Bottom, CardSlot, Middle, Top } from 'model/Cards'
import { HeavenGod } from 'model/Cards/HeavenGod'
import { Shield } from 'model/Gear/Equipment'
import { AromaOil } from 'model/Items/Bottles'
import { EquipmentProject, TemperingProject } from 'model/Projects'
import { StareImmunity } from 'model/Specials'
import { Magic, setMinimumStatValue, widenStatRange } from 'model/Stats'

export const WisdomGoddess: ActiveCard = {
  id: 'WisdomGoddess',
  name: 'Wisdom Goddess',
  category: HeavenGod,
  price: 3000,
  activate: activateWisdomGoddess,
  relatedItems: () => [AromaOil],
  relatedStats: () => [Magic],
  relatedStatRanges: () => [Magic],
  relatedEquipment: () => [Shield],
  relatedSpecials: () => [StareImmunity]
}

function activateWisdomGoddess(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      widenStatRange(project, Magic, -5, 10)
      setMinimumStatValue(project, Magic, 10)

      if (project.type === EquipmentProject && project.equipment === Shield) {
        project.special = StareImmunity
      }

      break
  }
}
