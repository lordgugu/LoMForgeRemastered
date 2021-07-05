import { Leviathan } from 'model/Cards'
import { minus50Percent, plus50Percent } from 'model/Common'
import { AllWeapons } from 'model/Equipment'
import { Gnome, Salamander } from 'model/Essences'
import { FangClaw, Item } from 'model/Items'
import { TemperingProject, WeaponProjectType } from 'model/Projects'

export const GiantsHorn: Item = {
  id: 'GiantsHorn',
  name: "Giant's Horn",
  category: FangClaw,
  energy: 32,
  activate: activateGiantsHorn,
  relatedCards: () => [Leviathan],
  relatedWeapons: () => AllWeapons,
  relatedEssences: () => [Salamander, Gnome]
}

function activateGiantsHorn(project: TemperingProject) {
  const { energy } = project
  const { sala, gnome } = project.levels

  if (project.type === WeaponProjectType) {
    const { sharpness, weight } = project.attributes
    project.attributes.sharpness = minus50Percent(sharpness)
    project.attributes.weight = plus50Percent(weight)
  }

  if (sala === 0 && gnome >= 5 && energy >= 8) {
    project.mysticPowers.prehidden = Leviathan
  }
}
