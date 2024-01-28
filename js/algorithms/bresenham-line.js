import { setLabel, setPixel } from "../config";
import { ensureInitialLessThanFinal } from "../utils";

export function bresenhamLine(x0, y0, x1, y1) {
  setLabel(x0, y0, `bresenhamLine(${x0}, ${y0}, ${x1}, ${y1})`);
  [x0, y0, x1, y1] = ensureInitialLessThanFinal(x0, y0, x1, y1);

  let dx = Math.abs(x1 - x0);
  let dy = Math.abs(y1 - y0);
  let dT = 2 * (dy - dx);
  let dS = 2 * dy;
  let d = 2 * dy - dx;

  let x = x0;
  let y = y0;

  // m < 1
  if (dx > dy) {
    setPixel(x, y);
    while (x < x1) {
      x++;
      if (d < 0) {
        d = d + dS;
      } else {
        y++;
        d = d + dT;
      }
      setPixel(x, y);
    }
  }
  // m >= 1
  else {
    setPixel(y, x);
    while (y < y1) {
      y++;
      if (d < 0) {
        d = d + dS;
      } else {
        x++;
        d = d + dT;
      }
      setPixel(x, y);
    }
  }
}
