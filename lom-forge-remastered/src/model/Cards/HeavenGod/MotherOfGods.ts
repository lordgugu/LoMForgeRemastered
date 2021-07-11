import { ActiveCard, Bottom, CardSlot, Middle, Top } from 'model/Cards'
import { HeavenGod } from 'model/Cards/HeavenGod'
import { Flail } from 'model/Gear/Weapons'
import { HeartMint } from 'model/Items/Produce'
import { RedDream } from 'model/MasterMoves/BottomSlot'
import { GameOfDeath } from 'model/MasterMoves/MiddleSlot'
import { GreenPrincess } from 'model/MasterMoves/TopSlot'
import { TemperingProject, WeaponProject } from 'model/Projects'
import { Charm, Magic, setMinimumStatValue, Spirit, widenStatRange } from 'model/Stats'

export const MotherOfGods: ActiveCard = {
  id: 'MotherOfGods',
  name: 'Mother of Gods',
  category: HeavenGod,
  price: 4000,
  activate: activateMotherOfGods,
  relatedItems: () => [HeartMint],
  relatedStats: () => [Magic, Spirit, Charm],
  relatedStatRanges: () => [Magic, Spirit, Charm],
  relatedWeapons: () => [Flail],
  relatedMasterMoves: {
    top: () => [GreenPrincess],
    middle: () => [GameOfDeath],
    bottom: () => [RedDream]
  }
}

function activateMotherOfGods(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      widenStatRange(project, Magic, -3, 5)
      widenStatRange(project, Spirit, -3, 5)
      widenStatRange(project, Charm, -3, 5)

      setMinimumStatValue(project, Magic, 5)
      setMinimumStatValue(project, Spirit, 5)
      setMinimumStatValue(project, Charm, 5)

      if (project.type === WeaponProject && project.equipment === Flail) {
        project.masterMoves.top = GreenPrincess
        project.masterMoves.middle = GameOfDeath
        project.masterMoves.bottom = RedDream
      }
  }
}
