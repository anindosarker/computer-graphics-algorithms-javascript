import { bresenhamCircle } from "./algorithms/bresenham-circle";
import { bresenhamLine } from "./algorithms/bresenham-line";
import { ddaLine } from "./algorithms/dda-line";
import { plotPixel } from "./algorithms/gfg";
import { drawLine } from "./algorithms/line";

export function displayDrawings() {
  //   // Usage example:
  //   drawCircle(130, 250, 130);
  //   drawCircle(360, 200, 100);
  // alphabet A
  //   drawLine(10, 0, 0, 10);
  //   drawLine(10, 0, 20, 10);
  //   drawLine(6, 5, 15, 5);
  //   drawLine(550, 10, 670, 10);
  //   drawLine(550, 120, 670, 120);
  //   drawLine(550, 240, 670, 240);
  //   drawLine(10, 5, 10, 20);
  //   drawLine(20, 5, 20, 20);
  //   drawLine(15, 5, 15, 20);
  //   drawLine(10, 5, 20, 5);
  //   drawLine(10, 20, 20, 20);
  //   ddaLine(0, 0, 10, 10);
  //   drawLine(0, 0, 10, 10);
  // ddaLine(9, 9, 0, 0);
  //   drawLine(10, 20, 0, 0);
  // bresenhamLine(9, 9, 0, 0);
  // bresenhamLine(25, 25, 15, 15);
  // ddaLine(25, 25, 15, 15);
  bresenhamCircle(20, 20, 4);
}
