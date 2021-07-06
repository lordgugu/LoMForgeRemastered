import { Cleric, RulerOfTheSky, WindGod, WingsOfDarkness } from 'model/Cards'
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
import { Caduceus, Demonicide, Electrosceptre, GoldenTouch, Jump, Thrust, Uppercut } from 'model/MasterMoves'

export const Staff: WeaponEquipment = {
  id: 'Staff',
  name: 'Staff',
  attributes: {
    sharp: 4,
    heavy: 44,
    force: 16,
    tech: 32
  },
  markerThreshold: 1,
  priceCoefficient: 30,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  relatedMasterMoves: {
    top: () => [Thrust, Caduceus],
    middle: () => [Uppercut],
    bottom: () => [Jump, Demonicide, Electrosceptre, GoldenTouch]
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
  relatedCards: () => [WindGod, Cleric, RulerOfTheSky, WingsOfDarkness]
}
