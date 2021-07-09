import { Bottom, Card, CardSlot, Middle, Phoenix, Stage, Top } from 'model/Cards'
import { Force, Hammer, Hauberk, minus50Percent, Pendant, plus50Percent, Ring, Tech } from 'model/Equipment'
import { addImmunity, Freeze } from 'model/Immunities'
import { Ash } from 'model/Items'
import { MagmaHammer } from 'model/MasterMoves/BottomSlot'
import { ArmorProjectType, TemperingProject, WeaponProjectType } from 'model/Projects'
import { AutoRevive } from 'model/Specials'

export const Volcano: Card = {
  id: 'Volcano',
  name: 'Volcano',
  category: Stage,
  price: 1300,
  activate: activateVolcano,
  relatedItems: () => [Ash],
  relatedCards: () => [Phoenix],
  relatedArmors: () => [Ring, Pendant, Hauberk],
  relatedSpecials: () => [AutoRevive],
  relatedWeaponAttributes: () => [Force, Tech],
  relatedWeapons: () => [Hammer],
  relatedMasterMoves: {
    bottom: () => [MagmaHammer]
  },
  relatedImmunities: () => [Freeze]
}

function activateVolcano(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      plus50Percent(project, Force)
      minus50Percent(project, Tech)

      switch (project.type) {
        case WeaponProjectType:
          if (project.equipment === Hammer) {
            project.masterMoves.bottom = MagmaHammer
          }

          break
        case ArmorProjectType:
          if (project.equipment === Hauberk) {
            addImmunity(project, Freeze)
          }

          break
      }

      break
  }
}
