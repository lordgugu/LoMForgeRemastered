import { ActiveCard, Bottom, CardSlot, HeavenGod, Middle, Top } from 'model/Cards'
import { Magic, Pierce, Shoes, Slash, Strike } from 'model/Gear/Equipment'
import { Staff } from 'model/Gear/Weapons'
import { addImmunity, Paralysis } from 'model/Immunities'
import { Diceberry } from 'model/Items'
import { Caduceus } from 'model/MasterMoves/TopSlot'
import { EquipmentProject, TemperingProject, WeaponProject } from 'model/Projects'
import { setMinimumStatValue, Skill, widenStatRange } from 'model/Stats'

export const WindGod: ActiveCard = {
  id: 'WindGod',
  name: 'Wind God',
  category: HeavenGod,
  price: 3000,
  activate: activateWindGod,
  relatedItems: () => [Diceberry],
  relatedStats: () => [Skill],
  relatedStatRanges: () => [Skill],
  relatedWeapons: () => [Staff],
  relatedEquipment: () => [Shoes],
  relatedMasterMoves: {
    top: () => [Caduceus]
  },
  relatedImmunities: () => [Paralysis],
  relatedEquipmentAttributes: () => [Slash, Strike, Pierce, Magic]
}

function activateWindGod(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      widenStatRange(project, Skill, -5, 10)
      setMinimumStatValue(project, Skill, 10)

      switch (project.type) {
        case WeaponProject:
          if (project.equipment === Staff) {
            project.masterMoves.top = Caduceus
          }
          break
        case EquipmentProject:
          if (project.equipment === Shoes) {
            project.attributes.strike += 10
            project.attributes.slash += 10
            project.attributes.pierce += 10
            project.attributes.magic += 10

            addImmunity(project, Paralysis)
          }
          break
      }

      break
  }
}
