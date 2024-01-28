import { setupCanvas } from "./js/config.js";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <div class="">
      <p class="read-the-docs">
      Canvas
      </p>
    </div>
   
    <canvas id="myCanvas" class="myCanvas" width=1000 height=1000></canvas>
  </div>
`;

setupCanvas(document.querySelector("#myCanvas"));
