import { setPixel } from "../config";
import { round } from "../utils";

export function ddaLine(x0, y0, x1, y1) {
  let dx = Math.abs(x1 - x0);
  let dy = Math.abs(y1 - y0);

  let m = dy / dx;
  let xEnd = x0 > x1 ? x0 : x1;
  let yEnd = y0 > y1 ? y0 : y1;

  let x = x0 < x1 ? x0 : x1;
  let y = y0 < y1 ? y0 : y1;

  setPixel(x, y);

  if (m <= 1) {
    while (x <= xEnd) {
      setPixel(x, round(y));
      y = y + m;
      x++;
    }
  } else {
    while (y <= yEnd) {
      setPixel(round(x), y);
      x = x + 1 / m;
      y++;
    }
  }
}
