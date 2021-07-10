import { SpiritOfShoes } from 'model/Cards'
import { plus25Percent } from 'model/Gear'
import { Boots, Pierce, Shoes, Slash, Strike } from 'model/Gear/Equipment'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { EquipmentProject, TemperingProject } from 'model/Projects'

export const PearOHeels: ActiveItem = {
  id: 'PearOHeels',
  name: "Pear o'Heels",
  category: Produce,
  energy: 32,
  activate: activatePearOHeels,
  relatedCards: () => [SpiritOfShoes],
  relatedEquipment: () => [Boots, Shoes]
}

function activatePearOHeels(project: TemperingProject) {
  const { energy, equipment } = project

  if (project.type === EquipmentProject) {
    switch (equipment) {
      case Boots:
      case Shoes:
        plus25Percent(project, Strike)
        plus25Percent(project, Slash)
        plus25Percent(project, Pierce)
        break
    }
  }

  if (energy >= 16) {
    project.cards.pending = SpiritOfShoes
  }
}
