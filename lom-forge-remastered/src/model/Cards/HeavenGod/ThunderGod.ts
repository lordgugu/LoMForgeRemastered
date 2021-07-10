import { ActiveCard, Bottom, CardSlot, HeavenGod, Middle, Top } from 'model/Cards'
import { Hammer } from 'model/Gear/Weapons'
import { Electricity } from 'model/Items/Urns'
import { Mjolnir } from 'model/MasterMoves/BottomSlot'
import { TemperingProject, WeaponProject } from 'model/Projects'
import { Defense, Power, setMinimumStatValue, Skill, widenStatRange } from 'model/Stats'

export const ThunderGod: ActiveCard = {
  id: 'ThunderGod',
  name: 'Thunder God',
  category: HeavenGod,
  price: 4000,
  activate: activateThunderGod,
  relatedItems: () => [Electricity],
  relatedStats: () => [Power, Skill, Defense],
  relatedStatRanges: () => [Power, Skill, Defense],
  relatedWeapons: () => [Hammer],
  relatedMasterMoves: {
    bottom: () => [Mjolnir]
  }
}

function activateThunderGod(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      widenStatRange(project, Power, -3, 5)
      widenStatRange(project, Skill, -3, 5)
      widenStatRange(project, Defense, -3, 5)

      setMinimumStatValue(project, Power, 5)
      setMinimumStatValue(project, Skill, 5)
      setMinimumStatValue(project, Defense, 5)

      if (project.type === WeaponProject && project.equipment === Hammer) {
        project.masterMoves.bottom = Mjolnir
      }
      break
  }
}
