import { taint, Wisp } from 'model/Essences'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Cornflower: Item = {
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
