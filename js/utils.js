export function round(n) {
  if (n - Math.floor(n) < 0.5) return Math.floor(n);
  return Math.floor(n + 1);
}

export function swap(a, b) {
  return [b, a];
}

export function ensureInitialLessThanFinal(x0, y0, x1, y1) {
  if (x0 > x1) [x0, x1] = swap(x0, x1);
  if (y0 > y1) [y0, y1] = swap(y0, y1);
  return [x0, y0, x1, y1];
}
