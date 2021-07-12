import { ActiveCard, Bottom, CardSlot, Middle, Top } from 'model/Cards'
import { BeastGod } from 'model/Cards/BeastGod'
import { Volcano } from 'model/Cards/Stage'
import { Pendant, Ring } from 'model/Gear/Equipment'
import { FlamingQuill } from 'model/Items/Feathers'
import { EquipmentProject, TemperingProject } from 'model/Projects'
import { AutoRevive } from 'model/Specials'
import { Power, setMinimumStatValue, Skill, widenStatRange } from 'model/Stats'

export const Phoenix: ActiveCard = {
  id: 'Phoenix',
  name: 'Phoenix',
  category: BeastGod,
  price: 2500,
  activate: activatePhoenix,
  relatedItems: () => [FlamingQuill],
  relatedCards: () => [Volcano],
  relatedStats: () => [Power, Skill],
  relatedStatRanges: () => [Power, Skill],
  relatedEquipment: () => [Ring, Pendant],
  relatedSpecials: () => [AutoRevive]
}

function activatePhoenix(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      widenStatRange(project, Power, -3, 5)
      widenStatRange(project, Skill, -3, 5)

      setMinimumStatValue(project, Power, 3)
      setMinimumStatValue(project, Skill, 3)

      if (project.type === EquipmentProject) {
        switch (project.equipment) {
          case Ring:
          case Pendant:
            const { top, middle, bottom } = project.cards

            if (Array.of(top, middle, bottom).includes(Volcano)) {
              project.special = AutoRevive
            }

            break
        }
      }

      break
  }
}
