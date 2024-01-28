import { bresenhamCircle } from "./algorithms/bresenham-circle";
import { bresenhamLine } from "./algorithms/bresenham-line";
import { bresenhamLineDotted } from "./algorithms/bresenham-line-dotted";
import { ddaLine } from "./algorithms/dda-line";
import { plotPixel } from "./algorithms/gfg";
import { drawLine } from "./algorithms/line";
import { drawLineDashed } from "./algorithms/linedashed";

export function displayDrawings() {
  // // Problem 1

  drawLine(0, 400, 800, 400); // ok
  drawLine(100, 500, 700, 500); //ok bottom line
  drawLineDashed(50, 450, 750, 450); //ok middle dash
  drawLineDashed(0, 400, 50, 450); //ok left dash
  drawLine(50, 450, 100, 500); //ok left line \
  drawLineDashed(800, 400, 750, 450); // ok right dash
  drawLine(750, 450, 700, 500); // ok right line /

  drawLine(100, 400, 100, 100); // |-
  drawLine(200, 400, 200, 100); // -|
  drawLine(100, 100, 200, 100); //

  drawLine(600, 400, 600, 100); // |-
  drawLine(700, 400, 700, 100); // - |
  drawLine(600, 100, 700, 100); //

  drawLine(300, 205, 300, 100); // |- -
  drawLine(300, 295, 300, 400); // |- -
  drawLine(400, 140, 400, 100); // - | -
  drawLine(400, 360, 400, 400); // - | -
  drawLine(500, 205, 500, 100); // - - |
  drawLine(500, 295, 500, 400); // - - |

  drawLine(350, 20, 550, 20); // ok ---
  drawLine(300, 100, 350, 20); // ok /-
  drawLine(500, 100, 550, 20); // ok
  drawLine(400, 100, 450, 20); // ok

  bresenhamCircle(400, 250, 110); // circle ok

  // // Problem 2
  // // 1
  // drawLine(300, 100, 300, 300); // | -
  // drawLine(400, 100, 400, 300); // - |
  // drawLine(300, 100, 400, 100); // ok ---
  // drawLine(300, 300, 400, 300); // ok ---

  // // // 2
  // // drawLineDashed(100, 100, 200, 200); // |- -
  // // drawLine(200, 200, 100, 300); // |- -
  // // drawLineDashed(100, 300, 200, 400); // |- -
  // // 2
  // drawLineDashed(100, 100, 200, 125); // |- -
  // drawLine(200, 125, 100, 150); // |- -
  // drawLineDashed(100, 150, 200, 175); // |- -

  // // // 3
  // // drawLine(100, 500, 200, 525); // |- -
  // // drawLineDashed(200, 525, 100, 550); // |- -
  // // drawLine(100, 550, 200, 575); // |- -
  // // 3
  // drawLine(500, 100, 600, 125); // |- -
  // drawLineDashed(600, 125, 500, 150); // |- -
  // drawLine(500, 150, 600, 175); // |- -

  // //4
  // drawLine(700, 300, 900, 300); // ok ---
  // drawLine(700, 100, 700, 300); // ok ---
  // drawLine(880, 280, 880, 500); // ok ---
}
