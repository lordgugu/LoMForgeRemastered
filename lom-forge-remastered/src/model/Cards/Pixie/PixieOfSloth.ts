import { ActiveCard, Bottom, CardSlot, Middle, Pixie, Ragnarok, Top, WitchOfMoon } from 'model/Cards'
import { Garlicrown, HolyWater, Rust, SleepyEye } from 'model/Items'
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

export const PixieOfSloth: ActiveCard = {
  id: 'PixieOfSloth',
  name: 'Pixie (of Sloth)',
  category: Pixie,
  price: 150,
  activate: activatePixieOfSloth,
  relatedItems: () => [Garlicrown, SleepyEye, HolyWater, Rust],
  relatedCards: () => [WitchOfMoon, Ragnarok],
  relatedStats: () => [Power, Skill, Defense, HP, Spirit, Charm, Luck],
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
