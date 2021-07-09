import { ActiveCard, Bottom, CardSlot, Middle, Noble, Top } from 'model/Cards'
import { Spear } from 'model/Equipment'
import { DragonsBreath } from 'model/Items'
import { SpearOfLight } from 'model/MasterMoves/TopSlot'
import { TemperingProject, WeaponProjectType } from 'model/Projects'
import { AllStats, HP, incrementStat, Power, widenStatRange } from 'model/Stats'

export const ManOfValor: ActiveCard = {
  id: 'ManOfValor',
  name: 'Man of Valor',
  category: Noble,
  price: 1000,
  activate: activateManOfValor,
  relatedItems: () => [DragonsBreath],
  relatedStatRanges: () => AllStats,
  relatedStats: () => [Power, HP],
  relatedWeapons: () => [Spear],
  relatedMasterMoves: {
    top: () => [SpearOfLight]
  }
}

function activateManOfValor(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      AllStats.forEach((stat) => widenStatRange(project, stat, -3, 5))

      incrementStat(project, Power)
      incrementStat(project, HP)

      if (project.type == WeaponProjectType && project.equipment === Spear) {
        project.masterMoves.top = SpearOfLight
      }

      break
  }
}
