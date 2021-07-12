import { ActiveCard, Bottom, CardSlot, Middle, Top } from 'model/Cards'
import { WingsOfDarkness } from 'model/Cards/EvilGod'
import { Pixie } from 'model/Cards/Pixie'
import { Ragnarok } from 'model/Cards/World'
import { HolyWater } from 'model/Items/Bottles'
import { CreepyEye } from 'model/Items/Eyes'
import { Garlicrown } from 'model/Items/Produce'
import { StinkyBreath } from 'model/Items/Vials'
import { TemperingProject } from 'model/Projects'
import { AllStats, decrementStat, incrementStat, Spirit, widenStatRange } from 'model/Stats'

export const PixieOfLust: ActiveCard = {
  id: 'PixieOfLust',
  name: 'Pixie (of Lust)',
  category: Pixie,
  price: 150,
  activate: activatePixieOfLust,
  relatedItems: () => [Garlicrown, CreepyEye, HolyWater, StinkyBreath],
  relatedCards: () => [WingsOfDarkness, Ragnarok],
  relatedStats: () => AllStats,
  relatedStatRanges: () => AllStats
}

function activatePixieOfLust(project: TemperingProject, slot: CardSlot) {
  const { energy, worldPower } = project
  const card = project.cards[slot]

  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      if (worldPower === Ragnarok) {
        if (energy >= 8) {
          project.cards[slot] = WingsOfDarkness
        }

        WingsOfDarkness.activate(project, slot)
      } else {
        AllStats.forEach((stat) => {
          widenStatRange(project, stat, -1, 3)
          decrementStat(project, stat)
        })

        incrementStat(project, Spirit)
      }
      break
  }
}
