import { Wolf } from 'model/Cards'
import { minus25Percent, plus25Percent } from 'model/Gear'
import { Heavy, Sharp } from 'model/Gear/Weapons'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'

export const PeachPuppy: ActiveItem = {
  id: 'PeachPuppy',
  name: 'Peach Puppy',
  category: Produce,
  energy: 24,
  activate: activatePeachPuppy,
  relatedCards: () => [Wolf],
  relatedWeaponAttributes: () => [Sharp, Heavy]
}

function activatePeachPuppy(project: TemperingProject) {
  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = Wolf
  }

  plus25Percent(project, Sharp)
  minus25Percent(project, Heavy)
}
