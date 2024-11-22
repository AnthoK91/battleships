export const shipsConfig = [
  {
    shipId: "carrier",
    buttonId: "human-button-carrier",
    aspectId: "human-aspect-carrier",
  },
  {
    shipId: "submarine",
    buttonId: "human-button-submarine",
    aspectId: "human-aspect-submarine",
  },
  {
    shipId: "battleship",
    buttonId: "human-button-battleship",
    aspectId: "human-aspect-battleship",
  },
  {
    shipId: "vessel",
    buttonId: "human-button-vessel",
    aspectId: "human-aspect-vessel",
  },
  {
    shipId: "destroyer",
    buttonId: "human-button-destroyer",
    aspectId: "human-aspect-destroyer",
  },
];

export function addAspectSwitching(shipId, buttonId, aspectId) {
  const button = document.querySelector(`#${buttonId}`);
  const ship = document.querySelector(`#${shipId}`);
  const aspectText = document.querySelector(`#${aspectId}`);

  if (!button || !ship || !aspectText) {
    console.error(
      `Missing elements for shipId=${shipId}, buttonId=${buttonId}, aspectId=${aspectId}`
    );
    return; // Skip if any element is missing
  }

  let rotTracker = 0;

  button.addEventListener("click", () => {
    rotTracker = (rotTracker + 1) % 4; // Cycle through 0, 1, 2, 3
    const aspect = ["North", "East", "South", "West"][rotTracker];
    ship.classList.toggle("rotated");
    aspectText.textContent = `Aspect: ${aspect}`;
  });
}

// Loop through the configuration array and add event listeners
shipsConfig.forEach(({ shipId, buttonId, aspectId }) => {
  addAspectSwitching(shipId, buttonId, aspectId);
});
