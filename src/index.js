import "./style.css";
import { initializeDragAndDrop } from "./modules/dragDrop.js";
import { shipsConfig, addAspectSwitching } from "./modules/htmlChangeAspect.js";
import { startGame } from "./modules/playGame.js";

document.addEventListener("DOMContentLoaded", () => {
  shipsConfig.forEach(({ shipId, buttonId, aspectId }) => {
    addAspectSwitching(shipId, buttonId, aspectId);
  });

  startGame(); // Create the grid and other elements
  initializeDragAndDrop(); // Attach event listeners after elements are in the DOM
});
