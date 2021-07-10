import { taint, Wisp } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'

export const Cornflower: ActiveItem = {
  id: 'Cornflower',
  name: 'Cornflower',
  category: Produce,
  energy: 24,
  activate: activateCornflower,
  relatedEssences: () => [Wisp]
}

function activateCornflower(project: TemperingProject) {
  taint(project, Wisp)
}
