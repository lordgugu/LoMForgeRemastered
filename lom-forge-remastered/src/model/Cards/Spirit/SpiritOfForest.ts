import { ActiveCard, Bottom, CardSlot, Middle, Spirit, Top } from 'model/Cards'
import { Bow } from 'model/Equipment'
import { MothWing } from 'model/Items'
import { ElvenArcher } from 'model/MasterMoves/MiddleSlot'
import { TemperingProject, WeaponProjectType } from 'model/Projects'
import { Charm, incrementStat, Spirit as SpiritStat } from 'model/Stats'

export const SpiritOfForest: ActiveCard = {
  id: 'SpiritOfForest',
  name: 'Spirit (of Forest)',
  category: Spirit,
  price: 800,
  activate: activateSpiritOfForest,
  relatedItems: () => [MothWing],
  relatedStats: () => [SpiritStat, Charm],
  relatedWeapons: () => [Bow],
  relatedMasterMoves: {
    middle: () => [ElvenArcher]
  }
}

function activateSpiritOfForest(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      incrementStat(project, SpiritStat)
      incrementStat(project, Charm)

      if (project.type === WeaponProjectType && project.equipment === Bow) {
        project.masterMoves.middle = ElvenArcher
      }
      break
  }
}
