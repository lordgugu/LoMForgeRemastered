import { ActiveCard, Bottom, CardSlot, FallenAngel, Middle, Pixie, Ragnarok, Top } from 'model/Cards'
import { HolyWater } from 'model/Items/Bottles'
import { LittleEye } from 'model/Items/Eyes'
import { Garlicrown } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'
import { AllStats, Charm, decrementStat, incrementStat, widenStatRange } from 'model/Stats'

export const PixieOfPride: ActiveCard = {
  id: 'PixieOfPride',
  name: 'Pixie (of Pride)',
  category: Pixie,
  price: 150,
  activate: activatePixieOfPride,
  relatedItems: () => [Garlicrown, LittleEye, HolyWater],
  relatedCards: () => [Ragnarok, FallenAngel],
  relatedStats: () => AllStats,
  relatedStatRanges: () => AllStats
}

function activatePixieOfPride(project: TemperingProject, slot: CardSlot) {
  const { energy, worldCard } = project
  const card = project.cards[slot]

  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      if (worldCard === Ragnarok) {
        if (energy >= 8) {
          project.cards[slot] = FallenAngel
        }

        FallenAngel.activate(project, slot)
      } else {
        AllStats.forEach((stat) => {
          widenStatRange(project, stat, -1, 3)
          decrementStat(project, stat)
        })

        incrementStat(project, Charm)
      }
      break
  }
}
