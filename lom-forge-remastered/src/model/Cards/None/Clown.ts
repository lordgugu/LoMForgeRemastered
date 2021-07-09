import { ActiveCard, CardSlot, Metropolis, None } from 'model/Cards'
import { Heavy, Knife, minus50Percent, Pierce, plus50Percent, Sharp, Strike } from 'model/Equipment'
import { Bumpkin } from 'model/Items'
import { QuickBlade } from 'model/MasterMoves/MiddleSlot'
import { TemperingProject, WeaponProjectType } from 'model/Projects'
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
  relatedArmorAttributes: () => [Pierce, Strike],
  relatedMasterMoves: {
    middle: () => [QuickBlade]
  }
}

function activateClown(project: TemperingProject, slot: CardSlot) {
  const { top, middle, bottom } = project.cards

  if (Array.of(top, middle, bottom).includes(Metropolis)) {
    AllStats.forEach((stat) => widenStatRange(project, stat, -5, 12))
  } else {
    AllStats.forEach((stat) => widenStatRange(project, stat, -3, 9))
  }

  if (project.type === WeaponProjectType && project.equipment === Knife) {
    project.masterMoves.middle = QuickBlade
  }

  plus50Percent(project, Sharp)
  minus50Percent(project, Heavy)

  plus50Percent(project, Pierce)
  minus50Percent(project, Strike)
}
