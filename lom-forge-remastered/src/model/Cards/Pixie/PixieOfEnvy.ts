import { ActiveCard, Bottom, CardSlot, LordOfFlies, Middle, Pixie, Top } from 'model/Cards'
import { Ragnarok } from 'model/Cards/World'
import { HolyWater } from 'model/Items/Bottles'
import { BlankEye } from 'model/Items/Eyes'
import { SleepyPowder } from 'model/Items/Powders'
import { Garlicrown } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'
import { AllStats, decrementStat, incrementStat, Skill, widenStatRange } from 'model/Stats'

export const PixieOfEnvy: ActiveCard = {
  id: 'PixieOfEnvy',
  name: 'Pixie (of Envy)',
  category: Pixie,
  price: 150,
  activate: activatePixieOfEnvy,
  relatedItems: () => [Garlicrown, BlankEye, HolyWater, SleepyPowder],
  relatedCards: () => [LordOfFlies, Ragnarok],
  relatedStats: () => AllStats,
  relatedStatRanges: () => AllStats
}

function activatePixieOfEnvy(project: TemperingProject, slot: CardSlot) {
  const { energy, worldCard } = project

  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      if (worldCard === Ragnarok) {
        if (energy >= 8) {
          project.cards[slot] = LordOfFlies
        }

        LordOfFlies.activate(project, slot)
      } else {
        AllStats.forEach((stat) => {
          widenStatRange(project, stat, -1, 3)
          decrementStat(project, stat)
        })

        incrementStat(project, Skill)
      }
      break
  }
}
