import { Card } from 'model/Cards'
import { Essence } from 'model/Essences'
import { Equipment, EquipmentAttribute } from 'model/Gear/Equipment'
import { Weapon, WeaponAttribute } from 'model/Gear/Weapons'
import { Immunity } from 'model/Immunities'
import { Item } from 'model/Items'
import { MasterMove, MasterMoveSlot } from 'model/MasterMoves'
import { Material } from 'model/Materials'
import { Special } from 'model/Specials'
import { Stat } from 'model/Stats'

type Name =
  | { readonly name: string }
  | {
      readonly originalName: string
      readonly remasteredName: string
    }

type ID = Name & {
  readonly id: string
}

type RelatedEntities = {
  readonly relatedCards?: () => Card[]
  readonly relatedWeapons?: () => Weapon[]
  readonly relatedWeaponAttributes?: () => WeaponAttribute[]
  readonly relatedEquipment?: () => Equipment[]
  readonly relatedEquipmentAttributes?: () => EquipmentAttribute[]
  readonly relatedEssences?: () => Essence[]
  readonly relatedImmunities?: () => Immunity[]
  readonly relatedItems?: () => Item[]
  readonly relatedMasterMoves?: { readonly [slot in MasterMoveSlot]?: () => MasterMove[] }
  readonly relatedMaterials?: () => Material[]
  readonly relatedSpecials?: () => Special[]
  readonly relatedStatRanges?: () => Stat[]
  readonly relatedStats?: () => Stat[]
}

export type Entity = ID & RelatedEntities
