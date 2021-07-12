import { Leviathan } from 'model/Cards/EvilGod'
import { Gnome, Salamander } from 'model/Essences'
import { minus50Percent, plus50Percent } from 'model/Gear'
import { Heavy, Sharp } from 'model/Gear/Weapons'
import { ActiveItem } from 'model/Items'
import { FangClaw } from 'model/Items/FangClaw'
import { TemperingProject } from 'model/Projects'

export const GiantsHorn: ActiveItem = {
  id: 'GiantsHorn',
  name: "Giant's Horn",
  category: FangClaw,
  energy: 32,
  activate: activateGiantsHorn,
  relatedCards: () => [Leviathan],
  relatedWeaponAttributes: () => [Sharp, Heavy],
  relatedEssences: () => [Salamander, Gnome]
}

function activateGiantsHorn(project: TemperingProject) {
  const { energy } = project
  const { salamander, gnome } = project.levels

  minus50Percent(project, Sharp)
  plus50Percent(project, Heavy)

  if (salamander === 0 && gnome >= 5 && energy >= 8) {
    project.cards.pending = Leviathan
  }
}
