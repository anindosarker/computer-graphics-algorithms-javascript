import { displayDrawings } from "./display";

let context = null;

export function setupCanvas(element) {
  context = element.getContext("2d");
  drawGrid(context, 50); // Draw a grid with a step of 50 pixels
  
  displayDrawings();
  
}

export function setPixel(x, y) {
  if (!context) {
    throw new Error("Canvas context is not set up. Call setupCanvas first.");
  }
  context.fillRect(x, y, 1, 1);
}

function drawGrid(context, step) {
  const width = context.canvas.width;
  const height = context.canvas.height;

  context.strokeStyle = "lightgray";
  context.lineWidth = 0.5;

  // Draw vertical lines
  for (let x = 0; x < width; x += step) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.stroke();

    // Label the x coordinate
    context.fillText(x, x, 10);
  }

  // Draw horizontal lines
  for (let y = 0; y < height; y += step) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();

    // Label the y coordinate
    context.fillText(y, 0, y);
  }
}
