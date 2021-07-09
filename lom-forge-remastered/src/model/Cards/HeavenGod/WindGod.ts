import { ActiveCard, Bottom, CardSlot, HeavenGod, Middle, Top } from 'model/Cards'
import { Magic, Pierce, Shoes, Slash, Staff, Strike } from 'model/Equipment'
import { addImmunity, Paralysis } from 'model/Immunities'
import { Diceberry } from 'model/Items'
import { Caduceus } from 'model/MasterMoves/TopSlot'
import { ArmorProjectType, TemperingProject, WeaponProjectType } from 'model/Projects'
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
  relatedArmors: () => [Shoes],
  relatedMasterMoves: {
    top: () => [Caduceus]
  },
  relatedImmunities: () => [Paralysis],
  relatedArmorAttributes: () => [Slash, Strike, Pierce, Magic]
}

function activateWindGod(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      widenStatRange(project, Skill, -5, 10)
      setMinimumStatValue(project, Skill, 10)

      switch (project.type) {
        case WeaponProjectType:
          if (project.equipment === Staff) {
            project.masterMoves.top = Caduceus
          }
          break
        case ArmorProjectType:
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
