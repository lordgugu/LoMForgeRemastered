import { FallenAngel } from 'model/Cards/EvilGod'
import { Shade, taint, Wisp } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Feathers } from 'model/Items/Feathers'
import { TemperingProject } from 'model/Projects'
import { Charm, incrementStat, widenStatRange } from 'model/Stats'

export const AngelFeather: ActiveItem = {
  id: 'AngelFeather',
  name: 'Angel Feather',
  category: Feathers,
  energy: 32,
  activate: activateAngelFeather,
  relatedCards: () => [FallenAngel],
  relatedStats: () => [Charm],
  relatedStatRanges: () => [Charm],
  relatedEssences: () => [Wisp, Shade]
}

function activateAngelFeather(project: TemperingProject) {
  const { energy } = project
  const { wisp, shade } = project.levels

  widenStatRange(project, Charm, -3, 5)
  incrementStat(project, Charm)

  if (shade === 0 && wisp >= 5 && energy >= 8) {
    project.cards.pending = FallenAngel
  }

  taint(project, Wisp)
}
