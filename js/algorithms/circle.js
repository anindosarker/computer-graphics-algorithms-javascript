import { setPixel } from "../config";

export function drawCircle(centerX, centerY, radius) {
  let x = 0;
  let y = radius;
  let d = 3 - 2 * radius;

  while (x <= y) {
    //right half circle
    setPixel(centerX + x, centerY + y);
    setPixel(centerX + x, centerY - y);
    setPixel(centerX + y, centerY + x);
    setPixel(centerX + y, centerY - x);

    //left half circle
    setPixel(centerX - x, centerY + y);
    setPixel(centerX - x, centerY - y);
    setPixel(centerX - y, centerY + x);
    setPixel(centerX - y, centerY - x);

    if (d < 0) {
      d = d + 4 * x + 6;
    } else {
      d = d + 4 * (x - y) + 10;
      y--;
    }
    x++;
  }
}
