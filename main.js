// Rover object goes here:
const rover = {
    direction: ["N", "S", "E", "W"],
    currentDirection: "N",
    x: 0,
    y: 0,
    travelLog: []
  };
  
  // ======================
  const turnLeft = (rover) => {
    console.log("turnLeft was called!");
  
    switch (rover.currentDirection) {
      case "N":
        rover.currentDirection = "W";
        break;
      case "W":
        rover.currentDirection = "S";
        break;
      case "S":
        rover.currentDirection = "E";
        break;
      case "E":
        rover.currentDirection = "N";
        break;
      default:
        rover.currentDirection = "N";
        console.log(`Invalid Direction.  We will head North`);
    }
  };
  // turnLeft(rover);
  // console.log(rover.currentDirection);
  
  const turnRight = (rover) => {
    console.log("turnRight was called!");
    switch (rover.currentDirection) {
      case "N":
        rover.currentDirection = "E";
        break;
      case "W":
        rover.currentDirection = "N";
        break;
      case "S":
        rover.currentDirection = "W";
        break;
      case "E":
        rover.currentDirection = "S";
        break;
      default:
        rover.currentDirection = "N";
        console.log(`Invalid Direction.  We will head North`);
    }
  };
  // turnRight(rover);
  // console.log(rover.currentDirection);
  
  const moveForward = (rover) => {
    console.log("moveForward was called");
    switch (rover.currentDirection) {
      case "N":
        rover.y++;
        break;
      case "S":
        rover.y--;
        break;
      case "E":
        rover.x++;
        break;
      case "W":
        rover.x--;
        break;
    }
  };
  // moveForward(rover);
  
  const moveBackward = (rover) => {
    console.log("moveBackward was called");
    switch (rover.currentDirection) {
      case "N":
        rover.y--;
        break;
      case "S":
        rover.y++;
        break;
      case "E":
        rover.x--;
        break;
      case "W":
        rover.x++;
        break;
    }
  };
  // moveBackward(rover);

  const command = (commands) => {
    for (i = 0; i < commands.length; i++) {
      if ((rover.x < 10 && rover.x > -10) && (rover.y < 10 && rover.y > -10)){
      switch (commands[i]) {
        case "f":
          moveForward(rover);
          break;
        case "b":
          moveBackward(rover);
          break;  
        case "l":
          turnLeft(rover);
          break;
        case "r":
          turnRight(rover);
          break;
      }
    } else {
      console.log("The rover has run to the edge of the grid and has turned around.")
      turnLeft(rover);
      turnLeft(rover);
      switch (commands[i]) {
        case "f":
          moveForward(rover);
          break;
        case "b":
          moveBackward(rover);
          break;  
        case "l":
          turnLeft(rover);
          break;
        case "r":
          turnRight(rover);
          break;
      }
    }
      rover.travelLog.push([rover.x, rover.y, rover.currentDirection]);
      console.log(rover.x, rover.y);
    }
  };
  
  command("bbbllffff");
  // console.log(rover.x, rover.y);
  console.log(rover.travelLog);
  
  