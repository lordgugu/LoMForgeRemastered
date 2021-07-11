import { ActiveCard, Bottom, CardSlot, Middle, Top } from 'model/Cards'
import { HeavenGod } from 'model/Cards/HeavenGod'
import { Axe } from 'model/Gear/Weapons'
import { DragonBlood } from 'model/Items/Bottles'
import { DragonSlayer } from 'model/MasterMoves/MiddleSlot'
import { TemperingProject, WeaponProject } from 'model/Projects'
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

      if (project.type === WeaponProject && project.equipment === Axe) {
        project.masterMoves.middle = DragonSlayer
      }

      break
  }
}
