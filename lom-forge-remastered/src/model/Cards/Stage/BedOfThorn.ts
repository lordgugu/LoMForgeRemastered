import { Bottom, Card, CardSlot, Middle, Stage, Top } from 'model/Cards'
import { AncientMoon, DyingEarth, HeavensScale, MirroredWorld, Ragnarok, Yggdrasil } from 'model/Cards/World'
import { plus50Percent } from 'model/Gear'
import { AllEquipment, Magic, Pierce, Slash, Strike } from 'model/Gear/Equipment'
import { Needle } from 'model/Items/Pouch'
import { Needlettuce } from 'model/Items/Produce'
import { EquipmentProject, TemperingProject } from 'model/Projects'
import { NoHpRegeneration } from 'model/Specials'
import { AllStats, widenStatRange } from 'model/Stats'

export const BedOfThorn: Card = {
  id: 'BedOfThorn',
  name: 'Bed of Thorn',
  category: Stage,
  price: 1500,
  activate: activateBedOfThorn,
  relatedItems: () => [Needlettuce, Needle],
  relatedCards: () => [Yggdrasil, HeavensScale, DyingEarth, Ragnarok, AncientMoon, MirroredWorld],
  relatedEquipment: () => AllEquipment,
  relatedSpecials: () => [NoHpRegeneration],
  relatedEquipmentAttributes: () => [Strike, Slash, Pierce, Magic]
}

function activateBedOfThorn(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      AllStats.forEach((stat) => widenStatRange(project, stat, -1, 3))

      if (project.type === EquipmentProject) {
        project.special = NoHpRegeneration
      }

      plus50Percent(project, Strike)
      plus50Percent(project, Slash)
      plus50Percent(project, Pierce)
      plus50Percent(project, Magic)
      break
  }
}
