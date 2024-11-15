// Create a Gameboard class/factory.
// Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.log or DOM methods to make sure your code is doing what you expect it to.
// Gameboards should be able to place ships at specific coordinates by calling the ship factory or class.
// Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
// Gameboards should keep track of missed attacks so they can display them properly.
// Gameboards should be able to report whether or not all of their ships have been sunk.

//Aspect = North, South, East, West
//yCo = where the starting pos of the placement is on the y axis
//xCo = where the starting pos of the placement is on the x axis
//shipLength = the ships.{ship}.length - how many places it will be put across
//Idea is that you choose an X/Y starting spot, and an aspect. Then we do an if formula to check that you can place there. If you can't becuse you're out of bounds throw an error.
//If you can place there, push an o to the gameboard array, and sequentially push based on the aspect (N,E,S,W) until the length of the ship has been reached.

export function placeShip(yCo, xCo, player, aspect, shipType) {
  // Prevent xCo or yCo being out of bounds
  //todo: do I need to add the ship length + yCo/xCo within the aspect to initially determine whether or not the ship is within bounds?

  if (yCo >= 8 || xCo >= 8 || player.gameboard[yCo][xCo] === "x") {
    return "placement out of bounds or taken";
  } else {
    for (let index = 0; index < player.ships[shipType].length; index++) {
      if (yCo >= 8 || xCo >= 8 || player.gameboard[yCo][xCo] === "x") {
        return "placement out of bounds";
      } else {
        player.gameboard[yCo][xCo] = "x";
        player.ships[shipType].coords.push([yCo, xCo]);
        switch (aspect) {
          case "north":
            yCo--;
            break;
          case "east":
            xCo++;
            break;
          case "south":
            yCo++;
            break;
          case "west":
            xCo--;
            break;
        }
      }
    }
  }
}

//receive attack
//Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.

export function receiveAttack(yCo, xCo, beingAttacked, attacker) {
  console.log("y: ", yCo, "x: ", xCo);
  //check if place has already been hit
  if (beingAttacked.gameboard[yCo][xCo] === "o") {
    console.log("already been hit!");
  } else {
    //mark gameboard as hit
    beingAttacked.gameboard[yCo][xCo] = "o";
    let conditionMet = false;
    //loop through playeroneships.ship.coords and check if any of the value coords match yco/xco

    for (const [key, value] of Object.entries(beingAttacked.ships)) {
      if (value.coords) {
        for (const [shipY, shipX] of value.coords) {
          // console.log(
          //   `Checking coordinates: ${shipY}, ${shipX} against ${yCo}, ${xCo}`
          // );
          if (
            parseInt(shipY) === parseInt(yCo) &&
            parseInt(shipX) === parseInt(xCo)
          ) {
            conditionMet = true;
            console.log("Hit detected on ship:", key);
            beingAttacked.ships[key].getHit();
            beingAttacked.ships[key].isSunk();
            beingAttacked.totalLengthRemaining--;
            console.log(
              `Total ship spaces remaining for player: ${beingAttacked.totalLengthRemaining}!`
            );
            if (beingAttacked.ships[key].sunk) {
              console.log(`You sunk the ${key}!`);
            }
            return;
          }
        }
      }
    }

    if (!conditionMet) {
      missedAttack(attacker);
      console.log("Miss!");
    }
  }
}

// Gameboards should keep track of missed attacks so they can display them properly.
export function missedAttack(currentPlayer) {
  currentPlayer.missedAttacksTotal++;
}
