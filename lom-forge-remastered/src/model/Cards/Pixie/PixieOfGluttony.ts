import { ActiveCard, Bottom, CardSlot, Middle, Pixie, Top } from 'model/Cards'
import { Leviathan } from 'model/Cards/EvilGod'
import { Ragnarok } from 'model/Cards/World'
import { HolyWater } from 'model/Items/Bottles'
import { SillyEye } from 'model/Items/Eyes'
import { KnockoutDust } from 'model/Items/Powders'
import { Garlicrown } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'
import { AllStats, decrementStat, HP, incrementStat, widenStatRange } from 'model/Stats'

export const PixieOfGluttony: ActiveCard = {
  id: 'PixieOfGluttony',
  name: 'Pixie (of Gluttony)',
  category: Pixie,
  price: 150,
  activate: activatePixieOfGluttony,
  relatedItems: () => [Garlicrown, SillyEye, HolyWater, KnockoutDust],
  relatedCards: () => [Leviathan, Ragnarok],
  relatedStats: () => AllStats,
  relatedStatRanges: () => AllStats
}

function activatePixieOfGluttony(project: TemperingProject, slot: CardSlot) {
  const { energy, worldCard } = project

  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      if (worldCard === Ragnarok) {
        if (energy >= 8) {
          project.cards[slot] = Leviathan
        }

        Leviathan.activate(project, slot)
      } else {
        AllStats.forEach((stat) => {
          widenStatRange(project, stat, -1, 3)
          decrementStat(project, stat)
        })

        incrementStat(project, HP)
      }
      break
  }
}
