import { Armor, Boots, Gauntlet, Hat, Hauberk, Helm, Mantle, Pendant, Ring, Robe, Shield, Shoes } from 'model/Armors'
import { SpecialAbility } from 'model/SpecialAbilities'

export const NoHpRegeneration: SpecialAbility = {
  name: 'No HP Regeneration',
  requirements: [
    {
      armors: [Shield, Helm, Hat, Hauberk, Robe, Gauntlet, Ring, Boots, Shoes, Armor, Mantle, Pendant],
      cards: ['Bed of Thorn']
    }
  ],
  effect: ['Prevents stationary HP regeneration in battle'],
  notes: []
}
