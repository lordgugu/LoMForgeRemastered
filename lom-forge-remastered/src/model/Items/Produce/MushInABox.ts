import { Shade, taint } from 'model/Essences'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const MushInABox: Item = {
  id: 'MushInABox',
  name: 'Mush-In-A-Box',
  category: Produce,
  energy: 32,
  activate: activateMushInABox,
  relatedEssences: () => [Shade]
}

function activateMushInABox(project: TemperingProject) {
  taint(project, Shade)
}
