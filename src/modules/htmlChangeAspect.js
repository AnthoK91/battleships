const shipsConfig = [
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
  {
    shipId: "computer-carrier",
    buttonId: "computer-button-carrier",
    aspectId: "human-aspect-carrier",
  },
  {
    shipId: "computer-submarine",
    buttonId: "computer-button-submarine",
    aspectId: "computer-aspect-submarine",
  },
  {
    shipId: "computer-battleship",
    buttonId: "computer-button-battleship",
    aspectId: "computer-aspect-battleship",
  },
  {
    shipId: "computer-vessel",
    buttonId: "computer-button-vessel",
    aspectId: "computer-aspect-vessel",
  },
  {
    shipId: "computer-destroyer",
    buttonId: "computer-button-destroyer",
    aspectId: "computer-aspect-destroyer",
  },
];

function addAspectSwitching(shipId, buttonId, aspectId) {
  const button = document.querySelector(`#${buttonId}`);
  const ship = document.querySelector(`#${shipId}`);
  const aspectText = document.querySelector(`#${aspectId}`);
  let rotTracker = 0;

  button.addEventListener("click", () => {
    rotTracker = (rotTracker + 1) % 4; // Cycle through 0, 1, 2, 3
    let aspect = "North";
    ship.classList.toggle("rotated");

    // Determine aspect based on rotTracker
    switch (rotTracker) {
      case 0:
        aspect = "North";
        break;
      case 1:
        aspect = "East";
        break;
      case 2:
        aspect = "South";
        break;
      case 3:
        aspect = "West";
        break;
    }

    // Update the aspect text
    aspectText.textContent = `Aspect: ${aspect}`;
  });
}

// Loop through the configuration array and add event listeners
shipsConfig.forEach(({ shipId, buttonId, aspectId }) => {
  addAspectSwitching(shipId, buttonId, aspectId);
});
