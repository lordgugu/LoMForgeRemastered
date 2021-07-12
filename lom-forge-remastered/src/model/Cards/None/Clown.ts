import { ActiveCard, Bottom, CardSlot, Middle, Top } from 'model/Cards'
import { None } from 'model/Cards/None'
import { Metropolis } from 'model/Cards/Stage'
import { minus50Percent, plus50Percent } from 'model/Gear'
import { Pierce, Strike } from 'model/Gear/Equipment'
import { Heavy, Knife, Sharp } from 'model/Gear/Weapons'
import { Bumpkin } from 'model/Items/Produce'
import { QuickBlade } from 'model/MasterMoves/MiddleSlot'
import { TemperingProject, WeaponProject } from 'model/Projects'
import { AllStats, widenStatRange } from 'model/Stats'

export const Clown: ActiveCard = {
  id: 'Clown',
  name: 'Clown',
  category: None,
  price: 250,
  activate: activateClown,
  relatedItems: () => [Bumpkin],
  relatedCards: () => [Metropolis],
  relatedStatRanges: () => AllStats,
  relatedWeapons: () => [Knife],
  relatedWeaponAttributes: () => [Sharp, Heavy],
  relatedEquipmentAttributes: () => [Pierce, Strike],
  relatedMasterMoves: {
    middle: () => [QuickBlade]
  }
}

function activateClown(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      const { top, middle, bottom } = project.cards

      if (Array.of(top, middle, bottom).includes(Metropolis)) {
        AllStats.forEach((stat) => widenStatRange(project, stat, -5, 12))
      } else {
        AllStats.forEach((stat) => widenStatRange(project, stat, -3, 9))
      }

      if (project.type === WeaponProject && project.equipment === Knife) {
        project.masterMoves.middle = QuickBlade
      }

      plus50Percent(project, Sharp)
      minus50Percent(project, Heavy)

      plus50Percent(project, Pierce)
      minus50Percent(project, Strike)
      break
  }
}
