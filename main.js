import { setupCanvas, toggleGrid } from "./js/config.js";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <div class="card">
      <button id="toggleGrid">Toggle Grid</button>
    </div>
   
    <canvas id="myCanvas" class="myCanvas" width=1000 height=1000></canvas>
  </div>
`;

setupCanvas(document.querySelector("#myCanvas"));
document.querySelector("#toggleGrid").addEventListener("click", toggleGrid);
