import { BeastHeadedGod, Bottom, Card, CardSlot, Middle, Pixie, Ragnarok, Top } from 'model/Cards'
import { DangerousEye, Garlicrown, HolyWater } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import {
  AllStats,
  Charm,
  decrementStat,
  Defense,
  HP,
  incrementStat,
  Luck,
  Magic,
  Power,
  Skill,
  Spirit,
  widenStatRange
} from 'model/Stats'

export const PixieOfGreed: Card = {
  id: 'PixieOfGreed',
  name: 'Pixie (of Greed)',
  category: Pixie,
  price: 150,
  activate: activatePixieOfGreed,
  relatedItems: () => [Garlicrown, DangerousEye, HolyWater],
  relatedCards: () => [BeastHeadedGod, Ragnarok],
  relatedStats: () => [Power, Skill, Magic, HP, Spirit, Charm, Luck],
  relatedStatRanges: () => AllStats
}

function activatePixieOfGreed(project: TemperingProject, slot: CardSlot) {
  const { energy, worldCard } = project

  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      if (worldCard === Ragnarok) {
        if (energy >= 8) {
          project.cards[slot] = BeastHeadedGod
        }

        BeastHeadedGod.activate(project, slot)
      } else {
        AllStats.forEach((stat) => {
          widenStatRange(project, stat, -1, 3)
          decrementStat(project, stat)
        })

        incrementStat(project, Defense)
      }
      break
  }
}
