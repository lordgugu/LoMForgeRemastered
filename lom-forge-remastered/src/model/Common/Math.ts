export function minus25Percent(value: number): number {
  return Math.trunc(value / 4) * 3
}

export function minus50Percent(value: number): number {
  return Math.trunc(value / 2)
}

export function plus25Percent(value: number): number {
  return Math.min(255, Math.trunc((value * 5) / 4))
}

export function plus50Percent(value: number): number {
  return Math.min(255, Math.trunc((value * 3) / 2))
}
