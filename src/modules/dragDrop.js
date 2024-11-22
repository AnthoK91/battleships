import { shipsConfig } from "./htmlChangeAspect.js";
import { humanPlayer, placeShip } from "./gameboard.js"; // Assuming this exists

function drag(ev) {
  const shipType = ev.target.id;
  console.log("Dragging shipType:", shipType);
  ev.dataTransfer.setData("text/plain", shipType); // Use standard MIME type
}

export function allowDrop(event) {
  event.preventDefault(); // Allow the drop
}

export function drop(event) {
  event.preventDefault();

  const shipType = event.dataTransfer.getData("shipType"); // `shipType` should match a `shipId`
  console.log("Dropping ship:", shipType);

  const configEntry = shipsConfig.find((config) => config.shipId === shipType);
  if (!configEntry) {
    console.error(`Ship ID "${shipType}" not found in shipsConfig.`);
    return; // Stop if no match found
  }

  const aspectElement = document.querySelector(`#${configEntry.aspectId}`);
  if (!aspectElement) {
    console.error(`Aspect element not found for "${shipType}"`);
    return;
  }

  const aspect = aspectElement.textContent.split(": ")[1];
  const x = parseInt(event.target.getAttribute("x-data"));
  const y = parseInt(event.target.getAttribute("y-data"));

  const result = placeShip(y, x, humanPlayer, aspect.toLowerCase(), shipType);

  if (result === "placement out of bounds or taken") {
    console.log("Invalid placement!");
  } else {
    console.log(`Placed ${shipType} at (${y}, ${x}) facing ${aspect}`);
    document.getElementById(shipType).draggable = false;
  }
}

export function initializeDragAndDrop() {
  shipsConfig.forEach(({ shipId }) => {
    const shipElement = document.getElementById(shipId);
    if (shipElement) {
      console.log(`Attaching dragstart to ship: ${shipId}`);
      shipElement.addEventListener("dragstart", drag);
    } else {
      console.error(`Ship element not found: ${shipId}`);
    }
  });
}
