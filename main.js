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

createMap();

function createMap() {
  for (let x = 0; x < 10; x++) {
    map[x] = [];
    for (let y = 0; y < 10; y++) {
      addCell(x, y);
    }
  }
}

function addCell(x, y) {
  map[x][y] = (0, 0); // create a new object on x and y
}

// add number of craters
const addCrater = (numCraters) => {
  for(i=0;i < numCraters;i++) {
  map[Math.floor(Math.random() * 10)][Math.floor(Math.random() * 10)] = 1;
}
}

addCrater(10)





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
const command = (rover, commands) => {
  for (i = 0; i < commands.length; i++) {
    console.log(map[rover.x][rover.y])
    //check correct inputs
    if (
      commands[i] === "f" ||
      commands[i] === "b" ||
      commands[i] === "l" ||
      commands[i] === "r"
    ) {
      //check that rover is on the map
      if(map[rover.x][rover.y] === undefined) {
        console.log('The rover has run off of the map')
        break;
      } 
      //check that there are no craters
      if (map[rover.x][rover.y] === 0) {
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
          "The rover has run into a crater and has backed up and turned right."
        );
        moveBackward(rover)
        turnRight(rover);
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
      rover.travelLog.push([rover.x, rover.y]);  //, rover.currentDirection
      console.log(rover.x, rover.y);
    } else {
      console.log("invalid input!  Captain, You must check the commands.");
      break;
    }
  }
};

console.log('rover1')
command(rover1, "bbbbf");
console.log('rover2')
command(rover2, 'ffff');


console.log(map);


// console.log(rover.x, rover.y);
console.log(`Rover 1 ${rover1.travelLog}`);
console.log(`Rover 2 ${rover2.travelLog}`);

