import { ActiveCard, Bottom, CardSlot, Middle, Top } from 'model/Cards'
import { HeavenGod } from 'model/Cards/HeavenGod'
import { Hammer } from 'model/Gear/Weapons'
import { Ether } from 'model/Items/Bottles'
import { SledgeHammer } from 'model/MasterMoves/BottomSlot'
import { TemperingProject, WeaponProject } from 'model/Projects'
import { Defense, setMinimumStatValue, widenStatRange } from 'model/Stats'

export const BlacksmithGod: ActiveCard = {
  id: 'BlacksmithGod',
  name: 'Blacksmith God',
  category: HeavenGod,
  price: 2800,
  activate: activateBlacksmithGod,
  relatedItems: () => [Ether],
  relatedStats: () => [Defense],
  relatedStatRanges: () => [Defense],
  relatedWeapons: () => [Hammer],
  relatedMasterMoves: {
    bottom: () => [SledgeHammer]
  }
}

function activateBlacksmithGod(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      widenStatRange(project, Defense, -5, 10)
      setMinimumStatValue(project, Defense, 10)

      if (project.type === WeaponProject && project.equipment === Hammer) {
        project.masterMoves.bottom = SledgeHammer
      }

      break
  }
}
