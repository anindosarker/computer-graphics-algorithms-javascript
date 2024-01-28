export function round(n) {
  if (n - Math.floor(n) < 0.5) return Math.floor(n);
  return Math.floor(n + 1);
}
