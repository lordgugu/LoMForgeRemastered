export type Stat = 'power' | 'skill' | 'defense' | 'magic' | 'hp' | 'spirit' | 'charm' | 'luck'

export const Power: Stat = 'power'
export const Skill: Stat = 'skill'
export const Defense: Stat = 'defense'
export const Magic: Stat = 'magic'
export const HP: Stat = 'hp'
export const Spirit: Stat = 'spirit'
export const Charm: Stat = 'charm'
export const Luck: Stat = 'luck'

export const AllStats: Stat[] = [Power, Skill, Defense, Magic, HP, Spirit, Charm, Luck]

/**
 * Stat modifiers do not increment by 1 at all times. They simply move along a sliding scale of 16 possible values.
 */
export type StatModifier = -10 | -5 | -3 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 7 | 9 | 10 | 12 | 15 | 20

export type StatsContext = {
  modifiers: { [stat in Stat]: StatModifier }
  minValues: { [stat in Stat]: StatModifier }
  rangeMin: { [stat in Stat]: StatModifier }
  rangeMax: { [stat in Stat]: StatModifier }
}

/**
 * Every time an item is added to a project, the modifier range and minimums are reset to [0; 1] and -10 for all stats.
 * As such, the resulting range and minimums will always correspond to the cumulative effects applied with the item.
 *
 * Only the resulting stat modifier persists after items, but if an item would push out cards providing a favorable (or
 * disfavorable) range or minimum, it's likely that the persisted stat modifier will be truncated. To prevent this,
 * it's important to be aware of what the final visible cards will be on the resulting project.
 *
 * @param context tempering project
 */
export function resetStatLimits(context: StatsContext) {
  AllStats.forEach((stat) => {
    context.minValues[stat] = -10
    context.rangeMin[stat] = 0
    context.rangeMax[stat] = 1
  })
}

const Increment: { [modifier in StatModifier]: StatModifier } = {
  '-10': -5,
  '-5': -3,
  '-3': -1,
  '-1': 0,
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 7,
  7: 9,
  9: 10,
  10: 12,
  12: 15,
  15: 20,
  20: 20
}

export function incrementStat(context: StatsContext, stat: Stat): void {
  context.modifiers[stat] = Increment[context.modifiers[stat]]
}

const Decrement: { [modifier in StatModifier]: StatModifier } = {
  '-10': -10,
  '-5': -10,
  '-3': -5,
  '-1': -3,
  0: -1,
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  7: 5,
  9: 7,
  10: 9,
  12: 10,
  15: 12,
  20: 15
}

export function decrementStat(context: StatsContext, stat: Stat): void {
  context.modifiers[stat] = Decrement[context.modifiers[stat]]
}

/**
 * This only overrides the low or high bound of the stat modifier range if the new value would create a greater window
 * of possible stat modifiers. As such, by the time stat modifiers are calculated, the range of possible values should
 * be the widest according to all previous effects.
 *
 * @param context tempering project
 * @param stat stat to update
 * @param min new low bound for minimum stat modifiers
 * @param max new high bound for maximum stat modifiers
 */
export function widenStatRange(context: StatsContext, stat: Stat, min: StatModifier, max: StatModifier): void {
  if (min < context.rangeMin[stat]) {
    context.rangeMin[stat] = min
  }

  if (max > context.rangeMax[stat]) {
    context.rangeMax[stat] = max
  }
}

/**
 * This differs from the stat range in that this minimum will always take precedence, even if it would fall outside the
 * range of allowed stat modifiers.
 *
 * Only the most recent effect to set a particular minimum takes precedence for any given stat.
 *
 * @param context tempering project
 * @param stat stat to update
 * @param minValue new minimum value for the stat modifier
 */
export function setMinimumStatValue(context: StatsContext, stat: Stat, minValue: StatModifier): void {
  context.minValues[stat] = minValue
}

/**
 * Constrains the stat modifier within the range. Afterwards, if the specified minimum is higher than the resulting
 * modifier, the modifier will be set to the minimum instead.
 *
 * @param context tempering project
 * @param stat stat to calculate
 */
function setFinalStat(context: StatsContext, stat: Stat): void {
  let mod = context.modifiers[stat]

  if (mod < context.rangeMin[stat]) {
    mod = context.rangeMin[stat]
  } else if (mod > context.rangeMax[stat]) {
    mod = context.rangeMax[stat]
  }

  if (mod < context.minValues[stat]) {
    mod = context.minValues[stat]
  }

  context.modifiers[stat] = mod
}

export function setFinalStats(context: StatsContext): void {
  AllStats.forEach((stat) => setFinalStat(context, stat))
}
