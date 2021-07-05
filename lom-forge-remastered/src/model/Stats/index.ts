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

export type Stats = {
  modifiers: { [key in Stat]: StatModifier }
  minValues: { [key in Stat]: StatModifier }
  rangeMin: { [key in Stat]: StatModifier }
  rangeMax: { [key in Stat]: StatModifier }
}

/**
 * Every time an item is added to a project, the modifier range and minimums are reset to [0; 1] and -10 for all stats.
 * As such, the resulting range and minimums will always correspond to the cumulative effects applied with the item.
 *
 * Only the resulting stat modifier persists after items, but if an item would push out cards providing a favorable (or
 * disfavorable) range or minimum, it's likely that the persisted stat modifier will be truncated. To prevent this,
 * it's important to be aware of what the final visible cards will be on the resulting project.
 *
 * @param stats tempering project
 */
export function resetStatLimits(stats: Stats) {
  AllStats.forEach((stat) => {
    stats.minValues[stat] = -10
    stats.rangeMin[stat] = 0
    stats.rangeMax[stat] = 1
  })
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

export function incrementStat(project: Stats, stat: Stat): void {
  project.modifiers[stat] = Increment[project.modifiers[stat]]
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

export function decrementStat(project: Stats, stat: Stat): void {
  project.modifiers[stat] = Decrement[project.modifiers[stat]]
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
export function widenStatRange(project: Stats, stat: Stat, min: StatModifier, max: StatModifier): void {
  if (min < project.rangeMin[stat]) {
    project.rangeMin[stat] = min
  }

  if (max > project.rangeMax[stat]) {
    project.rangeMax[stat] = max
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
export function setMinimumStatValue(project: Stats, stat: Stat, minValue: StatModifier): void {
  project.minValues[stat] = minValue
}

/**
 * Constrains the stat modifier within the range. Afterwards, if the specified minimum is higher than the resulting
 * modifier, the modifier will be set to the minimum instead.
 *
 * @param project tempering project
 * @param stat stat to calculate
 */
function calculateFinalStat(project: Stats, stat: Stat): void {
  let mod = project.modifiers[stat]

  if (mod < project.rangeMin[stat]) {
    mod = project.rangeMin[stat]
  } else if (mod > project.rangeMax[stat]) {
    mod = project.rangeMax[stat]
  }

  if (mod < project.minValues[stat]) {
    mod = project.minValues[stat]
  }

  project.modifiers[stat] = mod
}

export function calculateFinalStats(project: Stats): void {
  AllStats.forEach((stat) => calculateFinalStat(project, stat))
}
