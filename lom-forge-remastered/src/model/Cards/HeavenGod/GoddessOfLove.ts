import { ActiveCard, Bottom, CardSlot, HeavenGod, Middle, Top } from 'model/Cards'
import { Pendant } from 'model/Gear/Equipment'
import { DamselsSigh } from 'model/Items'
import { EquipmentProject, TemperingProject } from 'model/Projects'
import { ExtraLucre } from 'model/Specials'
import { Charm, setMinimumStatValue, Spirit, widenStatRange } from 'model/Stats'

export const GoddessOfLove: ActiveCard = {
  id: 'GoddessOfLove',
  name: 'Goddess of Love',
  category: HeavenGod,
  price: 3000,
  activate: activateGoddessOfLove,
  relatedItems: () => [DamselsSigh],
  relatedStats: () => [Spirit, Charm],
  relatedStatRanges: () => [Spirit, Charm],
  relatedEquipment: () => [Pendant],
  relatedSpecials: () => [ExtraLucre]
}

function activateGoddessOfLove(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      widenStatRange(project, Spirit, -3, 9)
      widenStatRange(project, Charm, -3, 9)

      setMinimumStatValue(project, Spirit, 7)
      setMinimumStatValue(project, Charm, 7)

      if (project.type === EquipmentProject && project.equipment === Pendant) {
        project.special = ExtraLucre
      }

      break
  }
}
