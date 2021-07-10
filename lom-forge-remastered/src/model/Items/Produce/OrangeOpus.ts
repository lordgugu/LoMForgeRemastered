import { Leviathan } from 'model/Cards'
import { Gnome, Salamander } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'
import { Defense, incrementStat, widenStatRange } from 'model/Stats'

export const OrangeOpus: ActiveItem = {
  id: 'OrangeOpus',
  name: "Orange'opus",
  category: Produce,
  energy: 64,
  activate: activateOrangeOpus,
  relatedCards: () => [Leviathan],
  relatedStats: () => [Defense],
  relatedStatRanges: () => [Defense],
  relatedEssences: () => [Salamander, Gnome]
}

function activateOrangeOpus(project: TemperingProject) {
  const { energy } = project
  const { salamander, gnome } = project.levels

  widenStatRange(project, Defense, -5, 10)
  incrementStat(project, Defense)

  if (salamander === 0 && gnome >= 5 && energy >= 8) {
    project.cards.pending = Leviathan
  }
}
