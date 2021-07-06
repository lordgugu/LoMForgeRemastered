import { GodOfDestruction, MoonGoddess, SunGod, WitchOfMoon } from 'model/Cards'
import { WeaponEquipment } from 'model/Equipment'
import {
  AngryEye,
  Apricat,
  BlankEye,
  Citrisquid,
  ClearFeather,
  DragonsBreath,
  GiantsHorn,
  GoldClover,
  MaskedPotato,
  Needlettuce,
  PeachPuppy,
  PoisonFang,
  Rhinoloupe,
  Scissors,
  SharpClaw,
  SillyEye,
  SpadeBasil,
  SpinyCarrot,
  WickedEye
} from 'model/Items'
import { FlameTongue, Jump, Moonlight, Sunlight, Thrust, Uppercut, Vampsword } from 'model/MasterMoves'

export const Sword: WeaponEquipment = {
  id: 'Sword',
  name: 'Sword',
  attributes: {
    sharp: 32,
    heavy: 32,
    force: 32,
    tech: 32
  },
  markerThreshold: 1,
  priceCoefficient: 50,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  relatedMasterMoves: {
    top: () => [Thrust, FlameTongue, Sunlight, Vampsword],
    middle: () => [Uppercut, Moonlight],
    bottom: () => [Jump]
  },
  relatedItems: () => [
    Apricat,
    Citrisquid,
    PeachPuppy,
    Rhinoloupe,
    SpinyCarrot,
    Needlettuce,
    MaskedPotato,
    SpadeBasil,
    GoldClover,
    SharpClaw,
    PoisonFang,
    GiantsHorn,
    Scissors,
    SillyEye,
    AngryEye,
    BlankEye,
    WickedEye,
    ClearFeather,
    DragonsBreath
  ],
  relatedCards: () => [GodOfDestruction, SunGod, WitchOfMoon, MoonGoddess]
}
