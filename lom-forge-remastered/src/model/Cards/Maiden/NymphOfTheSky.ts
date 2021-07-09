import { ActiveCard, Bottom, CardSlot, Maiden, Middle, Top } from 'model/Cards'
import { Mantle } from 'model/Gear/Equipment'
import { WhiteFeather } from 'model/Items'
import { EquipmentProject, TemperingProject } from 'model/Projects'
import { MoveHpRegeneration } from 'model/Specials'

export const NymphOfTheSky: ActiveCard = {
  id: 'NymphOfTheSky',
  name: 'Nymph of the Sky',
  category: Maiden,
  price: 1000,
  activate: activateNymphOfTheSky,
  relatedItems: () => [WhiteFeather],
  relatedEquipment: () => [Mantle],
  relatedSpecials: () => [MoveHpRegeneration]
}

function activateNymphOfTheSky(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      if (project.type === EquipmentProject && project.equipment === Mantle) {
        project.special = MoveHpRegeneration
      }
      break
  }
}
