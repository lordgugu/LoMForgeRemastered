import { ActiveCard, Bottom, CardSlot, HeavenGod, Middle, Top } from 'model/Cards'
import { AllEquipment } from 'model/Gear/Equipment'
import { Spear } from 'model/Gear/Weapons'
import { addImmunity, Flameburst } from 'model/Immunities'
import { Orcaplant, Squalphin } from 'model/Items'
import { Trident } from 'model/MasterMoves/TopSlot'
import { EquipmentProject, TemperingProject, WeaponProject } from 'model/Projects'
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
  relatedEquipment: () => AllEquipment,
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
        case WeaponProject:
          if (project.equipment === Spear) {
            project.masterMoves.top = Trident
          }
          break
        case EquipmentProject:
          addImmunity(project, Flameburst)
          break
      }

      break
  }
}
