import { Wolf } from 'model/Cards'
import { AllWeapons, Heavy, minus25Percent, plus25Percent, Sharp } from 'model/Equipment'
import { Item, Produce } from 'model/Items'
import { TemperingProject, WeaponProjectType } from 'model/Projects'

export const PeachPuppy: Item = {
  id: 'PeachPuppy',
  name: 'Peach Puppy',
  category: Produce,
  energy: 24,
  activate: activatePeachPuppy,
  relatedCards: () => [Wolf],
  relatedWeapons: () => AllWeapons
}

function activatePeachPuppy(project: TemperingProject) {
  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = Wolf
  }

  plus25Percent(project, Sharp)
  minus25Percent(project, Heavy)
}
