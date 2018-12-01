function Rover(startDirection, startPosition) { // Pasamos direction de paramtro ya que consideramos que habrá más de una dirección.
  this.direction = startDirection; // Propiedad
  this.position = startPosition; // Propiedad
  this.travelLog = [];
}

Rover.prototype.turnLeft = function () {
  switch (this.direction) {
      
    case "N": 
      this.direction = "W";
      break;
    
    case "W":
      this.direction = "S";
      break;

    case "S":
      this.direction = "E";
      break;

    case "E":
      this.direction = "N";
      break;
    }

  console.log("turnLeft was called! Actual direction is " + this.direction);
}

Rover.prototype.turnRight = function () {
  switch (this.direction) {
      
    case "N": 
      this.direction = "E";
      break;
    
    case "E":
      this.direction = "S";
      break;

    case "S":
      this.direction = "W";
      break;

    case "W":
      this.direction = "N";
      break;
    }
  
  console.log("turnRight was called! Actual direction is " + this.direction);
}

Rover.prototype.moveForward = function () {

  if (this.direction === "N" && this.position.y > 0) {
    this.position.y += -1;
  } else if (this.direction === "W" && this.position.x > 0) {
    this.position.x += -1;
  } else if (this.direction === "S" && this.position.y < 10) {
    this.position.y += 1;
  } else if (this.direction === "E" && this.position.x < 10) {
    this.position.x += 1;
  } else {
    console.log("You are moving out of the grid. Turn and try again.");
  }
  console.log(this.travelLog);
  this.travelLog.push(this.position.x, this.position.y, "Next"); // Tracking the rover and keeping coordinates.


console.log("moveForward was called, rover is at position X " + this.position.x + " and position Y " + this.position.y);
}

Rover.prototype.moveBackwards = function () {
  if (this.direction === "N" && this.position.y < 10) {
    this.position.y += 1;
  } else if (this.direction === "W" && this.position.x < 10) {
    this.position.x += 1;
  } else if (this.direction === "S" && this.position.y > 0) {
    this.position.y += -1;
  } else if (this.direction === "E" && this.position.x > 0) {
    this.position.x += -1;
  } else {
    console.log("You are moving out of the grid. Turn and try again.");
  }

  this.travelLog.push(this.position.x, this.position.y, "Next"); // Tracking the rover and keeping coordinates.


console.log("moveBackward was called, rover is at position X " + this.position.x + " and position Y " + this.position.y);
}

function commands(movement, rover) {
  
  for (var i=0; i <= movement.length; i++) {

    switch(movement[i]) { // Iterate for each char of the string: movement[i]

      case "f": 
        rover.moveForward();
        break;

      case "r":
        rover.turnRight();
        break;

      case "l":
        rover.turnLeft();
        break;

      case "b":
        rover.moveBackwards();
        break;
    }
  }
  console.log(rover.travelLog); // Printing the final coordinates.
}

let rover1 = new Rover('N', {x: 0, y: 0});
let rover2 = new Rover('N', {x: 1, y: 0});
let rover = new Rover('N', {x: 2, y: 3});
