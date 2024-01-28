import { displayDrawings } from "./display";
import { drawGrid } from "./grid";

let context = null;
let GRID_STEP = 20;
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
  const actualX = x * GRID_STEP;
  const actualY = y * GRID_STEP;

  // Draw the "pixel"
  context.fillStyle = "black";
  context.fillRect(actualX, actualY, GRID_STEP, GRID_STEP);
  // context.fillRect(x, y, 1, 1);
}

let labels = {}; // Keep track of labels at each pixel

export function setLabel(x, y, label = "") {
  if (!context) {
    throw new Error("Canvas context is not set up. Call setupCanvas first.");
  }
  // Multiply the x and y coordinates by the step size to get the actual position on the canvas
  const actualX = x * GRID_STEP;
  const actualY = y * GRID_STEP;

  // Append to the existing label if there is one
  const key = `${x},${y}`;
  if (labels[key]) {
    labels[key] += ", " + label;
  } else {
    labels[key] = label;
  }

  // Draw the label
  context.fillStyle = "red";
  context.fillText(labels[key], actualX + 5, actualY - 5);
}

export function toggleGrid() {
  if (gridVisible) {
    // Clear the canvas if the grid is currently visible
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    displayDrawings();
  } else {
    // Draw the grid if it's not currently visible
    drawGrid(context, GRID_STEP);
    displayDrawings();
  }

  // Toggle the gridVisible flag
  gridVisible = !gridVisible;
}
