import { ActiveCard, Bottom, CardSlot, Middle, Spirit, Top } from 'model/Cards'
import { Hammer } from 'model/Equipment/Weapons'
import { Ether } from 'model/Items'
import { QuakeHammer } from 'model/MasterMoves/BottomSlot'
import { TemperingProject, WeaponProjectType } from 'model/Projects'
import { Defense, HP, incrementStat } from 'model/Stats'

export const SpiritOfMountain: ActiveCard = {
  id: 'SpiritOfMountain',
  name: 'Spirit (of Mountain)',
  category: Spirit,
  price: 800,
  activate: activateSpiritOfMountain,
  relatedItems: () => [Ether],
  relatedStats: () => [Defense, HP],
  relatedWeapons: () => [Hammer],
  relatedMasterMoves: {
    bottom: () => [QuakeHammer]
  }
}

function activateSpiritOfMountain(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      incrementStat(project, Defense)
      incrementStat(project, HP)

      if (project.type === WeaponProjectType && project.equipment === Hammer) {
        project.masterMoves.bottom = QuakeHammer
      }
      break
  }
}
