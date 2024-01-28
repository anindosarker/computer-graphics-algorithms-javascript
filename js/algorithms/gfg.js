// Javascript program for Bresenhams Line Generation

import { setPixel } from "../config";

export function plotPixel(x1, y1, x2, y2, dx, dy, decide) {
  // pk is initial decision making parameter
  // Note:x1&y1,x2&y2, dx&dy values are interchanged
  // and passed in plotPixel function so
  // it can handle both cases when m>1 & m<1
  let d = 2 * dy - dx;
  for (let i = 0; i <= dx; i++) {
    // If slope is less than one decide = 0
    if (decide == 0) {
      setPixel(x1, y1);
    } else {
      setPixel(y1, x1);
    }

    // checking either to decrement or increment the
    // value if we have to plot from (0,100) to
    // (100,0)
    if (x1 < x2) x1++;
    else x1--;
    if (d < 0) {
      // decision value will decide to plot
      // either x1 or y1 in x's position
      if (decide == 0) {
        d = d + 2 * dy;
      } else d = d + 2 * dy;
    } else {
      if (y1 < y2) y1++;
      else y1--;
      d = d + 2 * dy - 2 * dx;
    }
  }
}

// This code is contributed by akashish__ and kalil
