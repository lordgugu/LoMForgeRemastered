import { ActiveCard, Bottom, CardSlot, Middle, Sorcerer, Top, Witch } from 'model/Cards'
import { Stage } from 'model/Cards/Stage'
import { HealingClaw } from 'model/Items/FangClaw'
import { RocketPapaya } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'
import { AllStats, widenStatRange } from 'model/Stats'

export const Tower: ActiveCard = {
  id: 'Tower',
  name: 'Tower',
  category: Stage,
  price: 1500,
  activate: activateTower,
  relatedItems: () => [RocketPapaya, HealingClaw],
  relatedCards: () => [Sorcerer, Witch],
  relatedStatRanges: () => AllStats
}

function activateTower(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      AllStats.forEach((stat) => widenStatRange(project, stat, -3, 5))
      break
  }
}
