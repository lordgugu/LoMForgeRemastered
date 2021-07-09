import { ActiveCard, Bottom, CardSlot, HeavenGod, Middle, Top } from 'model/Cards'
import { Axe } from 'model/Equipment/Weapons'
import { DragonBlood } from 'model/Items'
import { DragonSlayer } from 'model/MasterMoves/MiddleSlot'
import { TemperingProject, WeaponProjectType } from 'model/Projects'
import { Power, setMinimumStatValue, widenStatRange } from 'model/Stats'

export const GodOfWar: ActiveCard = {
  id: 'GodOfWar',
  name: 'God of War',
  category: HeavenGod,
  price: 3000,
  activate: activateGodOfWar,
  relatedItems: () => [DragonBlood],
  relatedStats: () => [Power],
  relatedStatRanges: () => [Power],
  relatedWeapons: () => [Axe],
  relatedMasterMoves: {
    middle: () => [DragonSlayer]
  }
}

function activateGodOfWar(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      widenStatRange(project, Power, -5, 10)
      setMinimumStatValue(project, Power, 10)

      if (project.type === WeaponProjectType && project.equipment === Axe) {
        project.masterMoves.middle = DragonSlayer
      }

      break
  }
}
