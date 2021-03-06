//notes
// Rover changes direction and continues orders after reaching edge of map or finding crater(this can be changed by uncommenting the break statement).
// map is generated with function.
// map size can be input with createMap(NUM OF ROWS/COLUMNS) function.
// number of craters is input my user and are randomly placed.

// Rover object goes here:
const rover1 = {
  direction: ["N", "S", "E", "W"],
  currentDirection: "N",
  x: 0,
  y: 0,
  travelLog: []
};

const rover2 = {
  direction: ["N", "S", "E", "W"],
  currentDirection: "N",
  x: 0,
  y: 0,
  travelLog: []
};

// ======================
//create map with 2d arrays
let map = [];

function createMap(grid) {
  for (let x = 0; x < grid; x++) {
    map[x] = [];
    for (let y = 0; y < grid; y++) {
      addCell(x, y);
    }
  }
}
function addCell(x, y) {
  map[x][y] = (0, 0); // create a new object on x and y
}

// add number of craters
const addCrater = (numCraters) => {
  for (i = 0; i < numCraters; i++) {
    map[Math.floor(Math.random() * map.length)][
      Math.floor(Math.random() * map.length)
    ] = 1;
  }
};

//ENTER GRID SIZE.  This will be a square.
createMap(10);

//ENTER NUMBER OF CRATERS
addCrater(10);

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

// create command
const command = (rover, commands) => {
  for (i = 0; i < commands.length; i++) {
    //make sure rover does not leave map
    if (
      rover.x >= 0 &&
      rover.x < map.length &&
      rover.y >= 0 &&
      rover.y < map.length
    ) {
      //check craters and move rover
      if (map[rover.x][rover.y] === 1) {
        console.log(
          `The rover has found a crater at ${rover.x},${rover.y} and is turning around.`
        );
        // break; // uncomment to stop rover when obstacle is found.
        turnRight(rover);
        turnRight(rover);
      } else if (map[rover.x][rover.y] === 0) {
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
          default:
            console.log(
              "invalid input!  Captain, You must check the commands."
            );
        }
      }
    } else {
      console.log(
        "The rover has reached the edge of the map and is turning around."
      );
      moveBackward(rover);
      turnRight(rover);
      turnRight(rover);
    }

    rover.travelLog.push([rover.x, rover.y, rover.currentDirection]);
    console.log(rover.x, rover.y, rover.currentDirection);
  }
};

console.log(map);

command(rover1, "ffffffffffffffffffffff");
console.log(`Rover 1 Travel Log ${rover1.travelLog}`);

command(rover2, "fffrfflffrffflfffrfffff");
console.log(`Rover 2 Travel Log ${rover2.travelLog}`);
