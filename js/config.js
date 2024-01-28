import { displayDrawings } from "./display";
import { drawGrid } from "./gird";

let context = null;
let step = 20;
let gridVisible = false; // Grid is initially visible

export function setupCanvas(element) {
  context = element.getContext("2d");
  toggleGrid();
}

export function setPixel(x, y) {
  console.log("🚀 ~ setPixel ~ x, y:\n", x, y);
  if (!context) {
    throw new Error("Canvas context is not set up. Call setupCanvas first.");
  }
  // Multiply the x and y coordinates by the step size to get the actual position on the canvas
  const actualX = x * step;
  const actualY = y * step;

  // Draw the "pixel"
  context.fillStyle = "black";
  context.fillRect(actualX, actualY, step, step);
  // context.fillRect(x, y, 1, 1);
}

export function toggleGrid() {
  if (gridVisible) {
    // Clear the canvas if the grid is currently visible
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    displayDrawings();
  } else {
    // Draw the grid if it's not currently visible
    drawGrid(context, step);
    displayDrawings();
  }

  // Toggle the gridVisible flag
  gridVisible = !gridVisible;
}
