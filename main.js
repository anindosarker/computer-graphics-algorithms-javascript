import { setupCanvas } from "./js/config.js";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <div class="card">
      <p class="read-the-docs">
      Canvas
      </p>
    </div>
   
    <canvas id="myCanvas" class="myCanvas" width=1200 height=600></canvas>
  </div>
`;

setupCanvas(document.querySelector("#myCanvas"));
