import { ActiveCard, Bottom, CardSlot, Middle, Top } from 'model/Cards'
import { Phoenix } from 'model/Cards/BeastGod'
import { Stage } from 'model/Cards/Stage'
import { minus50Percent, plus50Percent } from 'model/Gear'
import { Hauberk, Pendant, Ring } from 'model/Gear/Equipment'
import { Force, Hammer, Tech } from 'model/Gear/Weapons'
import { addImmunity, Freeze } from 'model/Immunities'
import { Ash } from 'model/Items/Powders'
import { MagmaHammer } from 'model/MasterMoves/BottomSlot'
import { EquipmentProject, TemperingProject, WeaponProject } from 'model/Projects'
import { AutoRevive } from 'model/Specials'

export const Volcano: ActiveCard = {
  id: 'Volcano',
  name: 'Volcano',
  category: Stage,
  price: 1300,
  activate: activateVolcano,
  relatedItems: () => [Ash],
  relatedCards: () => [Phoenix],
  relatedEquipment: () => [Ring, Pendant, Hauberk],
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
        case WeaponProject:
          if (project.equipment === Hammer) {
            project.masterMoves.bottom = MagmaHammer
          }

          break
        case EquipmentProject:
          if (project.equipment === Hauberk) {
            addImmunity(project, Freeze)
          }

          break
      }

      break
  }
}
