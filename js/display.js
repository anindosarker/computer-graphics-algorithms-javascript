import { drawCircle } from "./algorithms/circle";
import { drawLine } from "./algorithms/line";

export function displayDrawings() {
  // Usage example:
  drawCircle(130, 250, 130);
  drawCircle(360, 200, 100);

  // alphabet E
  drawLine(400, 10, 400, 240);
  drawLine(400, 10, 520, 10);
  drawLine(400, 120, 480, 120);
  drawLine(400, 240, 520, 240);
}
