import { Armor, Boots, Gauntlet, Hat, Hauberk, Helm, Mantle, Pendant, Ring, Robe, Shield, Shoes } from 'model/Armors'
import { SpecialAbility } from 'model/SpecialAbilities'

export const NoRevive: SpecialAbility = {
  name: 'No Revive',
  requirements: [
    {
      armors: [Shield, Helm, Hat, Hauberk, Robe, Gauntlet, Ring, Boots, Shoes, Armor, Mantle, Pendant],
      cards: ["Heaven's Scale"]
    }
  ],
  effect: ['Wearer no longer revives when they are knocked out'],
  notes: []
}
