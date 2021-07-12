import { ActiveCard, Bottom, CardSlot, Middle, Top } from 'model/Cards'
import { Noble } from 'model/Cards/Noble'
import { Spear } from 'model/Gear/Weapons'
import { DragonsBreath } from 'model/Items/Vials'
import { SpearOfLight } from 'model/MasterMoves/TopSlot'
import { TemperingProject, WeaponProject } from 'model/Projects'
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

      if (project.type == WeaponProject && project.equipment === Spear) {
        project.masterMoves.top = SpearOfLight
      }

      break
  }
}
