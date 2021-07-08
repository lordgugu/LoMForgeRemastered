import { ActiveCard, Bottom, CardSlot, Middle, Spirit, Top } from 'model/Cards'
import { Boots, Shoes } from 'model/Equipment'
import { addImmunity, Paralysis } from 'model/Immunities'
import { LoquatShoe, PearOHeels } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'
import { ExtraExperience } from 'model/Specials'
import { incrementStat, Skill } from 'model/Stats'

export const SpiritOfShoes: ActiveCard = {
  id: 'SpiritOfShoes',
  name: 'Spirit (of Shoes)',
  category: Spirit,
  price: 800,
  activate: activateSpiritOfShoes,
  relatedItems: () => [LoquatShoe, PearOHeels],
  relatedStats: () => [Skill],
  relatedArmors: () => [Boots, Shoes],
  relatedImmunities: () => [Paralysis],
  relatedSpecials: () => [ExtraExperience]
}

function activateSpiritOfShoes(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      incrementStat(project, Skill)

      if (project.type === ArmorProjectType) {
        switch (project.equipment) {
          case Boots:
            addImmunity(project, Paralysis)
            break
          case Shoes:
            project.special = ExtraExperience
            break
        }
      }
      break
  }
}
