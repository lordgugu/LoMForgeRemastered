import { Shade, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'

export const MushInABox: ActiveItem = {
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
