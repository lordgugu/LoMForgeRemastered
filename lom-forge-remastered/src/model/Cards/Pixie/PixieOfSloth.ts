import { ActiveCard, Bottom, CardSlot, Middle, Pixie, Top } from 'model/Cards'
import { WitchOfMoon } from 'model/Cards/EvilGod'
import { Ragnarok } from 'model/Cards/World'
import { HolyWater } from 'model/Items/Bottles'
import { SleepyEye } from 'model/Items/Eyes'
import { Rust } from 'model/Items/Powders'
import { Garlicrown } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'
import { AllStats, decrementStat, incrementStat, Magic, widenStatRange } from 'model/Stats'

export const PixieOfSloth: ActiveCard = {
  id: 'PixieOfSloth',
  name: 'Pixie (of Sloth)',
  category: Pixie,
  price: 150,
  activate: activatePixieOfSloth,
  relatedItems: () => [Garlicrown, SleepyEye, HolyWater, Rust],
  relatedCards: () => [WitchOfMoon, Ragnarok],
  relatedStats: () => AllStats,
  relatedStatRanges: () => AllStats
}

function activatePixieOfSloth(project: TemperingProject, slot: CardSlot) {
  const { energy, worldCard } = project
  const card = project.cards[slot]

  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      if (worldCard === Ragnarok) {
        if (energy >= 8) {
          project.cards[slot] = WitchOfMoon
        }

        WitchOfMoon.activate(project, slot)
      } else {
        AllStats.forEach((stat) => {
          widenStatRange(project, stat, -1, 3)
          decrementStat(project, stat)
        })

        incrementStat(project, Magic)
      }
      break
  }
}
