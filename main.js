// Rover object goes here:
const rover = {
  direction: ["N", "S", "E", "W"],
  currentDirection: "N",
  x: 0,
  y: 0,
  travelLog: []
};

// ======================
//create map with 2d arrays
let map = [];

createMap();

console.log(map);

function createMap() {
  for (let x = 0; x < 10; x++) {
    map[x] = [];
    for (let y = 0; y < 10; y++) {
      addCell(x, y);
    }
  }
}

function addCell(x, y) {
  map[x][y] = cell(x, y); // create a new object on x and y
}

function cell(x, y) {
  return x + 1, y + 1;
}

console.log(map[1][1]);

console.log(typeof map[1][1]);

//create turn left function
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

//create turn right function
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

// create move forward function
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

//create move backward function
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

// create command
const command = (commands) => {
  for (i = 0; i < commands.length; i++) {
    if (
      commands[i] === "f" ||
      commands[i] === "b" ||
      commands[i] === "l" ||
      commands[i] === "r"
    ) {
      if (rover.x < 10 && rover.x > -10 && rover.y < 10 && rover.y > -10) {
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
        console.log(
          "The rover has run to the edge of the grid and has turned around."
        );
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
    } else {
      console.log("invalid input!  Captain, You must check the commands.");
      break;
    }
  }
};

command("bbbllfasdfadsffff");
// console.log(rover.x, rover.y);
console.log(rover.travelLog);
