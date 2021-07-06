import { BeastHeadedGod, Clown, LordOfFlies } from 'model/Cards'
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
import { Jump, PoisonBlade, QuickBlade, SinisterBlade, Thrust, Uppercut } from 'model/MasterMoves'

export const Knife: WeaponEquipment = {
  id: 'Knife',
  name: 'Knife',
  attributes: {
    sharpness: 44,
    weight: 16,
    force: 12,
    technique: 48
  },
  markerThreshold: 1,
  priceCoefficient: 45,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  relatedMasterMoves: {
    top: () => [Thrust],
    middle: () => [Uppercut, PoisonBlade, QuickBlade],
    bottom: () => [Jump, SinisterBlade]
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
  relatedCards: () => [BeastHeadedGod, Clown, LordOfFlies]
}
