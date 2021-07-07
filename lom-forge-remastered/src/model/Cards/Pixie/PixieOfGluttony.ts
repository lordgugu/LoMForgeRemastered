import { ActiveCard, Bottom, CardSlot, Leviathan, Middle, Pixie, Ragnarok, Top } from 'model/Cards'
import { Garlicrown, HolyWater, KnockoutDust, SillyEye } from 'model/Items'
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

export const PixieOfGluttony: ActiveCard = {
  id: 'PixieOfGluttony',
  name: 'Pixie (of Gluttony)',
  category: Pixie,
  price: 150,
  activate: activatePixieOfGluttony,
  relatedItems: () => [Garlicrown, SillyEye, HolyWater, KnockoutDust],
  relatedCards: () => [Leviathan, Ragnarok],
  relatedStats: () => [Power, Skill, Defense, Magic, Spirit, Charm, Luck],
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
