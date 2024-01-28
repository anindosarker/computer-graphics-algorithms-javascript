import { drawCircle } from "./algorithms/circle";

let context = null;

export function setupCanvas(element) {
  context = element.getContext("2d");
  displayDrawings();
}

export function setPixel(x, y) {
  if (!context) {
    throw new Error("Canvas context is not set up. Call setupCanvas first.");
  }
  context.fillRect(x, y, 1, 1);
}

function displayDrawings() {
  // Usage example:
  drawCircle(130, 250, 130);
  drawCircle(360, 200, 100);
}
