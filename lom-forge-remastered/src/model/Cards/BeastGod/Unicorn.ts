import { ActiveCard, Bottom, CardSlot, Middle, Top } from 'model/Cards'
import { BeastGod } from 'model/Cards/BeastGod'
import { Spring } from 'model/Cards/Stage'
import { Pendant, Ring } from 'model/Gear/Equipment'
import { Whalamato } from 'model/Items/Produce'
import { EquipmentProject, TemperingProject } from 'model/Projects'
import { FastRevive } from 'model/Specials'
import { Defense, Magic, setMinimumStatValue, widenStatRange } from 'model/Stats'

export const Unicorn: ActiveCard = {
  id: 'Unicorn',
  name: 'Unicorn',
  category: BeastGod,
  price: 2500,
  activate: activateUnicorn,
  relatedItems: () => [Whalamato],
  relatedCards: () => [Spring],
  relatedStats: () => [Defense, Magic],
  relatedStatRanges: () => [Defense, Magic],
  relatedEquipment: () => [Ring, Pendant],
  relatedSpecials: () => [FastRevive]
}

function activateUnicorn(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      widenStatRange(project, Defense, -3, 5)
      widenStatRange(project, Magic, -3, 5)

      setMinimumStatValue(project, Defense, 3)
      setMinimumStatValue(project, Magic, 3)

      if (project.type === EquipmentProject) {
        switch (project.equipment) {
          case Ring:
          case Pendant:
            const { top, middle, bottom } = project.cards

            if (Array.of(top, middle, bottom).includes(Spring)) {
              project.special = FastRevive
            }

            break
        }
      }

      break
  }
}
