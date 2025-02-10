export function floatRound(value, precision = 4) {
  if (!value) return 0;
  const factor = 10 ** precision;
  return Math.round(value * factor) / factor;
}
