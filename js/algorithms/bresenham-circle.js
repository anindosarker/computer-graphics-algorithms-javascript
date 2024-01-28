import { setLabel, setPixel } from "../config";
import { round } from "../utils";

// Function to put pixels at subsequence points
function drawCircle(xc, yc, x, y) {
  setPixel(xc + x, yc + y);
  setPixel(xc - x, yc + y);
  setPixel(xc + x, yc - y);
  setPixel(xc - x, yc - y);
  setPixel(xc + y, yc + x);
  setPixel(xc - y, yc + x);
  setPixel(xc + y, yc - x);
  setPixel(xc - y, yc - x);
}

// Function for circle-generation using Bresenham's algorithm
export function bresenhamCircle(xCenter, yCenter, radius) {
  setLabel(
    xCenter,
    yCenter,
    `bresenhamCircle(${xCenter}, ${yCenter}, ${radius})`
  );

  let x = 0,
    y = radius;
  let d = 3 - 2 * radius;
  drawCircle(xCenter, yCenter, x, y);
  while (y >= x) {
    x++;

    // check for decision parameter and correspondingly update d, x, y
    if (d > 0) {
      y--;
      d = d + 4 * (x - y) + 10;
    } else {
      d = d + 4 * x + 6;
    }
    drawCircle(xCenter, yCenter, x, y);
  }
}
