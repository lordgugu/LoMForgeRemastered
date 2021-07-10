import { Item, ItemCategory } from 'model/Items'
import { GiantsHorn, HealingClaw, PoisonFang, Scissors, SharpClaw, VampireFang, ZombieClaw } from 'model/Items/FangClaw'

export const FangClaw: ItemCategory = 'Fang / Claw'

export const AllFangClaws: Item[] = [SharpClaw, PoisonFang, GiantsHorn, Scissors, HealingClaw, ZombieClaw, VampireFang]

export const AllFangClawsByForgeCode: { [code: string]: Item } = {
  '71': SharpClaw,
  '72': PoisonFang,
  '73': GiantsHorn,
  '74': Scissors,
  '75': HealingClaw,
  '76': ZombieClaw,
  '77': VampireFang
}

export const AllFangClawsById: { [id: string]: Item } = Object.fromEntries(
  AllFangClaws.map((fangClaw) => [fangClaw.id, fangClaw])
)

export * from './GiantsHorn'
export * from './HealingClaw'
export * from './PoisonFang'
export * from './Scissors'
export * from './SharpClaw'
export * from './VampireFang'
export * from './ZombieClaw'
