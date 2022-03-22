var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var dojoDiv = document.querySelector("#the-dojo");
    
// Creates the rows of buttons for this game
function render(theDojo) {
  var result = "";
  for(var i=0; i<theDojo.length; i++) {
    for(var j=0; j<theDojo[i].length; j++) {
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
  }
  return result;
}
    
// Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
  console.log({i, j});
  console.log(element)
  
  var top
  var topLeft
  var topRight

  var left 
  var right 

  var down 
  var downLeft 
  var downRight 

  if(theDojo[i-1] == undefined && theDojo[j-1] == undefined){      // upper left corner condition
  right = theDojo[i][j+1]
  down = theDojo[i+1][j]
  downRight = theDojo[i+1][j+1]

  top = 0; topLeft = 0; topRight = 0; left = 0; downLeft = 0
  }

  else if(theDojo[i-1] == undefined && theDojo[j+1] == undefined){      // upper right corner condition
  left = theDojo[i][j-1]
  down = theDojo[i+1][j]
  downLeft = theDojo[i+1][j-1]

  top = 0; topLeft = 0; topRight = 0; right = 0; downRight = 0
  }

  else if(theDojo[i+1] == undefined && theDojo[j-1] == undefined){      // lower left corner condition
  right = theDojo[i][j+1]
  top = theDojo[i-1][j]
  topRight = theDojo[i-1][j+1]

  down = 0; topLeft = 0; downLeft = 0; left = 0; downRight = 0
  }

  else if(theDojo[i+1] == undefined && theDojo[j+1] == undefined){      // lower right corner condition
  left = theDojo[i][j-1]
  top = theDojo[i-1][j]
  topLeft = theDojo[i-1][j-1]

  down = 0; topRight = 0; downLeft = 0; right = 0; downRight = 0
  }
 
  else if(theDojo[i-1] == undefined && theDojo[j-1] != undefined && theDojo[j+1] != undefined){      // upper mid conditions
  left = theDojo[i][j-1]
  right = theDojo[i][j+1]
  down = theDojo[i+1][j]
  downLeft = theDojo[i+1][j-1]
  downRight = theDojo[i+1][j+1]

  topRight = 0; topLeft = 0; topLeft = 0; top = 0
  }

  else if(theDojo[i+1] == undefined && theDojo[j-1] != undefined && theDojo[j+1] != undefined){      // lower mid conditions
  left = theDojo[i][j-1]
  right = theDojo[i][j+1]
  top = theDojo[i-1][j]
  topLeft = theDojo[i-1][j-1]
  topRight = theDojo[i-1][j+1]

  downRight = 0; downLeft = 0; down = 0
  }

  else if(theDojo[i+1] != undefined && theDojo[i-1] != undefined && theDojo[j-1] == undefined){      // left mid conditions
  right = theDojo[i][j+1]
  top = theDojo[i-1][j]
  down = theDojo[i+1][j]
  topRight = theDojo[i-1][j+1]
  downRight = theDojo[i+1][j+1]

  left = 0; downLeft = 0; topLeft = 0
  }

  else if(theDojo[i+1] != undefined && theDojo[i-1] != undefined && theDojo[j+1] == undefined){      // right mid conditions
  left = theDojo[i][j-1]
  top = theDojo[i-1][j]
  down = theDojo[i+1][j]
  topLeft = theDojo[i-1][j-1]
  downLeft = theDojo[i+1][j-1]

  right = 0; downRight = 0; topRight = 0
  }

  else if(theDojo[i+1] != undefined && theDojo[i-1] != undefined && theDojo[j+1] == undefined){      // right mid conditions
  left = theDojo[i][j-1]
  top = theDojo[i-1][j]
  down = theDojo[i+1][j]
  topLeft = theDojo[i-1][j-1]
  downLeft = theDojo[i+1][j-1]

  right = 0; downRight = 0; topRight = 0
  }
  else{
  top = theDojo[i-1][j]
  topLeft = theDojo[i-1][j-1]
  topRight = theDojo[i-1][j+1]
  left = theDojo[i][j-1]
  right = theDojo[i][j+1]
  down = theDojo[i+1][j]
  downLeft = theDojo[i+1][j-1]
  downRight = theDojo[i+1][j+1]
  }

  totalNinjas =  top+left+right+down+topLeft+topRight+downLeft+downRight   // Adds all ninjas around you 
  console.log(totalNinjas) 
  
  // alert("TODO - determine how many ninjas are hiding in adjacent squares");
  alert(`${totalNinjas} Ninjas surround you!`);
}
    
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    

