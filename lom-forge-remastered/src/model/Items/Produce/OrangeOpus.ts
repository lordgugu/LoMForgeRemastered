import { Leviathan } from 'model/Cards'
import { Gnome, Salamander } from 'model/Essences'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { Defense, incrementStat, widenStatRange } from 'model/Stats'

export const OrangeOpus: Item = {
  id: 'OrangeOpus',
  name: "Orange'opus",
  category: Produce,
  energy: 64,
  activate: activateOrangeOpus,
  relatedCards: () => [Leviathan],
  relatedStats: () => [Defense],
  relatedEssences: () => [Salamander, Gnome]
}

function activateOrangeOpus(project: TemperingProject) {
  const { energy } = project
  const { sala, gnome } = project.levels

  widenStatRange(project, Defense, -5, 10)
  incrementStat(project, Defense)

  if (sala === 0 && gnome >= 5 && energy >= 8) {
    project.mysticPowers.prehidden = Leviathan
  }
}
