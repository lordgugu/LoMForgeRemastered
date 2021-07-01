import { TopSlotPlungeAttack } from 'model/PlungeAttacks'
import { TwoHandedSword } from 'model/Equipment'

export const ChaoticAvenger: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Chaotic Avenger',
  weapons: [TwoHandedSword],
  effects: ['Inflicts Sala/Gnome/Jinn/Undine Damage', 'Attack Gauge +'],
  cards: ['Fallen Angel']
}
