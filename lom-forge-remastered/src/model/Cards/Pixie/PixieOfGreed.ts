import { BeastHeadedGod, Bottom, Card, CardSlot, Middle, Pixie, Ragnarok, Top } from 'model/Cards'
import { DangerousEye, Garlicrown, HolyWater } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { AllStats, decrementStat, Defense, incrementStat, widenStatRange } from 'model/Stats'

export const PixieOfGreed: Card = {
  id: 'PixieOfGreed',
  name: 'Pixie (of Greed)',
  category: Pixie,
  price: 150,
  activate: activatePixieOfGreed,
  relatedItems: () => [Garlicrown, DangerousEye, HolyWater],
  relatedCards: () => [BeastHeadedGod, Ragnarok],
  relatedStats: () => AllStats
}

function activatePixieOfGreed(project: TemperingProject, slot: CardSlot) {
  const { energy, worldCard } = project
  const card = project.cards[slot]

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
