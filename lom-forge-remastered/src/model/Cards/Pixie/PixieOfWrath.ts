import { ActiveCard, Bottom, CardSlot, Middle, Top } from 'model/Cards'
import { GodOfDestruction } from 'model/Cards/EvilGod'
import { Pixie } from 'model/Cards/Pixie'
import { Ragnarok } from 'model/Cards/World'
import { HolyWater } from 'model/Items/Bottles'
import { AngryEye } from 'model/Items/Eyes'
import { PoisonPowder } from 'model/Items/Powders'
import { Garlicrown } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'
import { AllStats, decrementStat, incrementStat, Power, widenStatRange } from 'model/Stats'

export const PixieOfWrath: ActiveCard = {
  id: 'PixieOfWrath',
  name: 'Pixie (of Wrath)',
  category: Pixie,
  price: 150,
  activate: activatePixieOfWrath,
  relatedItems: () => [Garlicrown, AngryEye, HolyWater, PoisonPowder],
  relatedCards: () => [GodOfDestruction, Ragnarok],
  relatedStats: () => AllStats,
  relatedStatRanges: () => AllStats
}

function activatePixieOfWrath(project: TemperingProject, slot: CardSlot) {
  const { energy, worldCard } = project
  const card = project.cards[slot]

  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      if (worldCard === Ragnarok) {
        if (energy >= 8) {
          project.cards[slot] = GodOfDestruction
        }

        GodOfDestruction.activate(project, slot)
      } else {
        AllStats.forEach((stat) => {
          widenStatRange(project, stat, -1, 3)
          decrementStat(project, stat)
        })

        incrementStat(project, Power)
      }
      break
  }
}
