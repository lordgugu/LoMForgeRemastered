import { ActiveCard, Bottom, CardSlot, HeavenGod, Middle, Top } from 'model/Cards'
import { AllEquipment, Ring } from 'model/Gear/Equipment'
import { addImmunity, Petrification } from 'model/Immunities'
import { EarOfWheat } from 'model/Items/Urns'
import { EquipmentProject, TemperingProject } from 'model/Projects'
import { ShareExperience } from 'model/Specials'
import { HP, setMinimumStatValue, widenStatRange } from 'model/Stats'

export const FertilityGoddess: ActiveCard = {
  id: 'FertilityGoddess',
  name: 'Fertility Goddess',
  category: HeavenGod,
  price: 3000,
  activate: activateFertilityGoddess,
  relatedItems: () => [EarOfWheat],
  relatedStats: () => [HP],
  relatedStatRanges: () => [HP],
  relatedEquipment: () => AllEquipment,
  relatedImmunities: () => [Petrification],
  relatedSpecials: () => [ShareExperience]
}

function activateFertilityGoddess(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      widenStatRange(project, HP, -5, 10)
      setMinimumStatValue(project, HP, 10)

      if (project.type === EquipmentProject) {
        addImmunity(project, Petrification)

        if (project.equipment === Ring) {
          project.special = ShareExperience
        }
      }
      break
  }
}
