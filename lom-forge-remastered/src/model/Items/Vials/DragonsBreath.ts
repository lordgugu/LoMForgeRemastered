import { ManOfValor } from 'model/Cards'
import { plus25Percent } from 'model/Common'
import { AllWeapons } from 'model/Equipment'
import { Salamander, totalLevels, Wisp } from 'model/Essences'
import { Item, Vials } from 'model/Items'
import { TemperingProject, WeaponProjectType } from 'model/Projects'

export const DragonsBreath: Item = {
  id: 'DragonsBreath',
  name: "Dragon's Breath",
  category: Vials,
  energy: 24,
  activate: activateDragonsBreath,
  relatedCards: () => [ManOfValor],
  relatedWeapons: () => AllWeapons,
  relatedEssences: () => [Wisp, Salamander]
}

function activateDragonsBreath(project: TemperingProject) {
  const { energy } = project
  const { wisp, sala } = project.levels
  const total = totalLevels(project)

  if (project.type === WeaponProjectType) {
    const { force, technique } = project.attributes
    project.attributes.force = plus25Percent(force)
    project.attributes.technique = plus25Percent(technique)
  }

  if (wisp > 0 && sala > 0 && total >= 3 && energy >= 8) {
    project.cards.pending = ManOfValor
  }
}
