import { Item, ItemCategory } from 'model/Items'
import {
  AngryEye,
  BlankEye,
  CreepyEye,
  DangerousEye,
  LittleEye,
  SillyEye,
  SleepyEye,
  WickedEye
} from 'model/Items/Eyes'

export const Eyes: ItemCategory = 'Eyes'

export const AllEyes: Item[] = [BlankEye, AngryEye, SleepyEye, LittleEye, WickedEye, DangerousEye, SillyEye, CreepyEye]

export const AllEyesByForgeCode: { [code: string]: Item } = {
  '78': LittleEye,
  '79': SleepyEye,
  '80': SillyEye,
  '81': DangerousEye,
  '82': AngryEye,
  '83': BlankEye,
  '84': WickedEye,
  '85': CreepyEye
}

export const AllEyesById: { [id: string]: Item } = Object.fromEntries(AllEyes.map((eye) => [eye.id, eye]))

export * from './AngryEye'
export * from './BlankEye'
export * from './CreepyEye'
export * from './DangerousEye'
export * from './LittleEye'
export * from './SillyEye'
export * from './SleepyEye'
export * from './WickedEye'
