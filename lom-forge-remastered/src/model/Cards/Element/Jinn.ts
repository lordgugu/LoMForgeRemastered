import { ActiveCard, Bottom, CardSlot, Element, Middle, Top } from 'model/Cards'
import { Jinn as JinnEssence, taint } from 'model/Essences'
import { JinnGold, JinnSilver } from 'model/Items/Coins'
import { Windstone } from 'model/Items/MagicStones'
import { TemperingProject } from 'model/Projects'
import { incrementStat, Skill } from 'model/Stats'

export const Jinn: ActiveCard = {
  id: 'Jinn',
  name: 'Jinn',
  category: Element,
  price: 250,
  activate: activateJinn,
  relatedItems: () => [JinnGold, JinnSilver, Windstone],
  relatedStats: () => [Skill],
  relatedEssences: () => [JinnEssence]
}

function activateJinn(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      incrementStat(project, Skill)
      taint(project, JinnEssence)
      break
  }
}
