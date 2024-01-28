import { setLabel, setPixel } from "../config";
import { round } from "../utils";

export function ddaLine(x0, y0, x1, y1) {
  setLabel(x0, y0, `ddaLine(${x0}, ${y0}, ${x1}, ${y1})`);

  [x0, y0, x1, y1] = ensureInitialLessThanFinal(x0, y0, x1, y1);

  let dx = Math.abs(x1 - x0);
  let dy = Math.abs(y1 - y0);

  let m = dy / dx;

  let x = x0;
  let y = y0;

  setPixel(x, y);

  if (m <= 1) {
    while (x <= x1) {
      setPixel(x, round(y));
      y = y + m;
      x++;
    }
  } else {
    while (y <= y1) {
      setPixel(round(x), y);
      x = x + 1 / m;
      y++;
    }
  }
}
