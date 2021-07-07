import { ActiveCard, CardSlot, Metropolis, None } from 'model/Cards'
import { Heavy, minus50Percent, plus50Percent, Sharp, Slash, Staff, Strike } from 'model/Equipment'
import { HolyWater } from 'model/Items'
import { Demonicide } from 'model/MasterMoves'
import { TemperingProject, WeaponProjectType } from 'model/Projects'
import { AllStats, Charm, incrementStat, Magic, Spirit, widenStatRange } from 'model/Stats'

export const Cleric: ActiveCard = {
  id: 'Cleric',
  name: 'Cleric',
  category: None,
  price: 500,
  activate: activateCleric,
  relatedItems: () => [HolyWater],
  relatedCards: () => [Metropolis],
  relatedStats: () => [Magic, Charm, Spirit],
  relatedStatRanges: () => AllStats,
  relatedWeapons: () => [Staff],
  relatedWeaponAttributes: () => [Sharp, Heavy],
  relatedArmorAttributes: () => [Slash, Strike],
  relatedMasterMoves: {
    middle: () => [Demonicide]
  }
}

function activateCleric(project: TemperingProject, slot: CardSlot) {
  const { top, middle, bottom } = project.cards

  if (Array.of(top, middle, bottom).includes(Metropolis)) {
    AllStats.forEach((stat) => widenStatRange(project, stat, -3, 5))

    incrementStat(project, Magic)
    incrementStat(project, Spirit)
    incrementStat(project, Charm)
  } else {
    AllStats.forEach((stat) => widenStatRange(project, stat, -1, 3))

    incrementStat(project, Spirit)
  }

  if (project.type === WeaponProjectType && project.equipment === Staff) {
    project.masterMoves.bottom = Demonicide
  }

  minus50Percent(project, Sharp)
  plus50Percent(project, Heavy)

  minus50Percent(project, Slash)
  plus50Percent(project, Strike)
}
