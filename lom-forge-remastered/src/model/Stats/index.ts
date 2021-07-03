const All: Stat[] = ['power', 'skill', 'defense', 'magic', 'hp', 'spirit', 'charm', 'luck']

export type Stat = 'power' | 'skill' | 'defense' | 'magic' | 'hp' | 'spirit' | 'charm' | 'luck'

/**
 * Stat modifiers do not increment by 1 at all times. They simply move along a sliding scale of 16 possible values.
 */
export type StatModifier = -10 | -5 | -3 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 7 | 9 | 10 | 12 | 15 | 20

export type StatProps = {
  stats: { [key in Stat]: StatModifier }
  minStatValues: { [key in Stat]: StatModifier }
  statRangeMin: { [key in Stat]: StatModifier }
  statRangeMax: { [key in Stat]: StatModifier }
}

/**
 * Every time an item is added to a project, the modifier range and minimums are reset to [0; 1] and -10 for all stats.
 * As such, the resulting range and minimums will always correspond to the cumulative effects applied with the item.
 * 
 * Only the resulting stat modifier persists after items, but if an item would push out cards providing a favorable (or
 * disfavorable) range or minimum, it's likely that the persisted stat modifier will be truncated. To prevent this,
 * it's important to be aware of what the final visible cards will be on the resulting project.
 * 
 * @param project tempering project
 */
export function resetStatLimits(project: StatProps) {
  project.minStatValues = {
    power: -10,
    skill: -10,
    defense: -10,
    magic: -10,
    hp: -10,
    spirit: -10,
    charm: -10,
    luck: -10
  }

  project.statRangeMin = {
    power: 0,
    skill: 0,
    defense: 0,
    magic: 0,
    hp: 0,
    spirit: 0,
    charm: 0,
    luck: 0
  }

  project.statRangeMax = {
    power: 1,
    skill: 1,
    defense: 1,
    magic: 1,
    hp: 1,
    spirit: 1,
    charm: 1,
    luck: 1
  }
}

const Increment: { [key in StatModifier]: StatModifier } = {
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

export function incrementStat(project: StatProps, stat: Stat): void {
  project.stats[stat] = Increment[project.stats[stat]]
}

export function incrementAllStats(project: StatProps): void {
  All.forEach((stat) => incrementStat(project, stat))
}

const Decrement: { [key in StatModifier]: StatModifier } = {
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

export function decrementStat(project: StatProps, stat: Stat): void {
  project.stats[stat] = Decrement[project.stats[stat]]
}

export function decrementAllStats(project: StatProps): void {
  All.forEach((stat) => decrementStat(project, stat))
}

/**
 * This only overrides the low or high bound of the stat modifier range if the new value would create a greater window
 * of possible stat modifiers. As such, by the time stat modifiers are calculated, the range of possible values should
 * be the widest according to all previous effects.
 *
 * @param project tempering project
 * @param stat stat to update
 * @param min new low bound for minimum stat modifiers
 * @param max new high bound for maximum stat modifiers
 */
export function setStatRange(project: StatProps, stat: Stat, min: StatModifier, max: StatModifier): void {
  if (min < project.statRangeMin[stat]) {
    project.statRangeMin[stat] = min
  }

  if (max > project.statRangeMax[stat]) {
    project.statRangeMax[stat] = max
  }
}

/**
 * This differs from the stat range in that this minimum will always take precedence, even if it would fall outside the
 * range of allowed stat modifiers.
 *
 * Only the most recent effect to set a particular minimum takes precedence for any given stat.
 *
 * @param project tempering project
 * @param stat stat to update
 * @param minValue new minimum value for the stat modifier
 */
export function setMinimumStatValue(project: StatProps, stat: Stat, minValue: StatModifier): void {
  project.minStatValues[stat] = minValue
}

/**
 * Constrains the stat modifier within the range. Afterwards, if the specified minimum is higher than the resulting
 * modifier, the modifier will be set to the minimum instead.
 *
 * @param project tempering project
 * @param stat stat to calculate
 */
function calculateFinalStat(project: StatProps, stat: Stat): void {
  let mod = project.stats[stat]

  if (mod < project.statRangeMin[stat]) {
    mod = project.statRangeMin[stat]
  } else if (mod > project.statRangeMax[stat]) {
    mod = project.statRangeMax[stat]
  }

  if (mod < project.minStatValues[stat]) {
    mod = project.minStatValues[stat]
  }

  project.stats[stat] = mod
}

export function calculateFinalStats(project: StatProps): void {
  All.forEach((stat) => calculateFinalStat(project, stat))
}
