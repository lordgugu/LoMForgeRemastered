import { SpiritOfShoes } from 'model/Cards'
import { plus25Percent } from 'model/Gear'
import { Boots, Pierce, Shoes, Slash, Strike } from 'model/Gear/Equipment'
import { Item, Produce } from 'model/Items'
import { EquipmentProject, TemperingProject } from 'model/Projects'

export const LoquatShoe: Item = {
  id: 'LoquatShoe',
  originalName: 'Loquat-Shoes',
  remasteredName: 'Loquat-Shoe',
  category: Produce,
  energy: 16,
  activate: activateLoquatShoes,
  relatedCards: () => [SpiritOfShoes],
  relatedEquipment: () => [Boots, Shoes]
}

function activateLoquatShoes(project: TemperingProject) {
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
