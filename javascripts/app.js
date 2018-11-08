// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================

// Function to make the rover turn left.
function turnLeft(rover){

    switch (rover.direction) {
      
      case "N": 
        rover.direction = "W";
        break;
      
      case "W":
        rover.direction = "S";
        break;

      case "S":
        rover.direction = "E";
        break;

      case "E":
        rover.direction = "N";
        break;
      }

  console.log("turnLeft was called!");
}

// Function to make the rover turn right.
function turnRight(rover){

  switch (rover.direction) {
      
    case "N": 
      rover.direction = "E";
      break;
    
    case "E":
      rover.direction = "S";
      break;

    case "S":
      rover.direction = "W";
      break;

    case "W":
      rover.direction = "N";
      break;
    }
  
  console.log("turnRight was called!");
}

// Function to make the rover move forward.
function moveForward(rover){

    // If to control movement from rover. Last else is for "East". 
    if (rover.direction === "N") {
      rover.y += -1;
    } else if (rover.direction === "W") {
      rover.x += -1;
    } else if (rover.direction === "S") {
      rover.y += 1;
    } else {
      rover.x += 1;
    }

    rover.travelLog.push(rover.x, rover.y, "Next"); // Tracking the rover and keeping coordinates.

  
  console.log("moveForward was called, rover is at position X " + rover.x + " and position Y " + rover.y);
}

// This function gets a string (movement) and iterates it in order to call the correct function to move the rover.
function commands(movement) {
  
  for (var i=0; i <= movement.length; i++) {

    switch(movement[i]) { // Iterate for each char of the string: movement[i]

      case "f": 
        moveForward(rover);
        break;

      case "r":
        turnRight(rover);
        break;

      case "l":
        turnLeft(rover);
        break;
    }
  }
  console.log(rover.travelLog); // Printing the final coordinates.
}
var movement = "ffrflf";