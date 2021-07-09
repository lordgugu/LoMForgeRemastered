import { ActiveCard, Bottom, CardSlot, HeavenGod, Middle, Top } from 'model/Cards'
import { AllArmors } from 'model/Equipment'
import { Spear } from 'model/Equipment/Weapons'
import { addImmunity, Flameburst } from 'model/Immunities'
import { Orcaplant, Squalphin } from 'model/Items'
import { Trident } from 'model/MasterMoves/TopSlot'
import { ArmorProjectType, TemperingProject, WeaponProjectType } from 'model/Projects'
import { Power, setMinimumStatValue, Skill, widenStatRange } from 'model/Stats'

export const OceanGod: ActiveCard = {
  id: 'OceanGod',
  name: 'Ocean God',
  category: HeavenGod,
  price: 3000,
  activate: activateOceanGod,
  relatedItems: () => [Squalphin, Orcaplant],
  relatedStats: () => [Power, Skill],
  relatedStatRanges: () => [Power, Skill],
  relatedWeapons: () => [Spear],
  relatedArmors: () => AllArmors,
  relatedMasterMoves: {
    middle: () => [Trident]
  },
  relatedImmunities: () => [Flameburst]
}

function activateOceanGod(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      widenStatRange(project, Power, -3, 9)
      widenStatRange(project, Skill, -3, 9)

      setMinimumStatValue(project, Power, 7)
      setMinimumStatValue(project, Skill, 7)

      switch (project.type) {
        case WeaponProjectType:
          if (project.equipment === Spear) {
            project.masterMoves.top = Trident
          }
          break
        case ArmorProjectType:
          addImmunity(project, Flameburst)
          break
      }

      break
  }
}
