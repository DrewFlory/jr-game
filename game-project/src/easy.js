//--------------Game constructor function--------------//
document.getElementById("begin").onclick = function(){
    document.getElementById("begin").remove();


function Game (){

    this.gameBoard = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,2,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3,1],
        [1,3,1,1,1,3,1,1,1,1,1,1,1,1,3,1,1,1,3,1],
        [1,3,3,3,3,5,3,3,3,3,3,3,3,3,5,3,3,3,4,1],
        [1,3,1,1,1,3,1,1,1,3,3,1,1,1,3,1,1,1,3,1],
        [1,3,1,1,1,3,1,3,3,3,3,3,4,1,3,1,1,1,3,1],
        [1,3,1,1,1,3,1,1,1,1,1,1,3,1,3,1,1,1,3,1],
        [1,5,3,4,3,3,1,3,3,3,3,3,3,1,3,3,3,3,5,1],
        [1,3,1,1,1,3,1,3,1,1,1,1,1,1,3,1,1,1,3,1],
        [1,3,1,1,1,3,1,4,3,3,3,3,3,1,3,1,1,1,3,1],
        [1,3,1,1,1,3,1,1,1,1,1,1,3,1,3,1,1,1,3,1],
        [1,3,3,3,3,5,3,3,3,3,3,3,3,3,5,3,3,3,3,1],
        [1,3,1,1,1,3,1,3,1,1,1,1,3,1,3,1,1,1,4,1],
        [1,3,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ];

    this.hoops = [];
    this.jr= {};
    this.bottle = [];
    this.score = 0;

};

//------------JR constructor function-------------//

function Jr(){
    this.x = 1;
    this.y = 1;
    this.code = 2;
    this.bottlesDrank = 0;
};

//-----------Create matrix for game-------------//

Game.prototype.generateTiles = function(){

    let tilesArray = [];
    for(let row of this.gameBoard) {

        for  (let col of row) {

            let tile = document.createElement('div');
            tile.classList.add('tile');

            if(col === WALL) {
                tile.classList.add('wall');

            } else if (col === GROUND) {
                tile.classList.add('ground');

            } else if (col === JR) {
                tile.classList.add('jr');

            } else if (col === 4) {
                tile.classList.add('goal');

            } else if (col === 5) {
                tile.classList.add('backboard');

            } else if (col === 5) {
                tile.classList.add('backboard');

            } else if (col === 5) {
                tile.classList.add('backboard');

            } else if (col === 5) {
                tile.classList.add('backboard');
            }          
            tilesArray.push(tile);
        }

    let brTile = document.createElement('br');
    tilesArray.push(brTile);
}
    return tilesArray;
}

//---------Score Function------------//

function updateScore(){
   game.score = $("score").html();
}

//-----------Draw board and erase board---------------//
var score = document.getElementsByClassName('score');

Game.prototype.drawBoard = function(){
    board = document.createElement('div');

    let tiles = this.generateTiles();
    for (let tile of tiles) {
        board.appendChild(tile);
    }
    document.body.appendChild(board);
}


Game.prototype.eraseBoard = function(){
    document.body.removeChild(board);
}

//-------------Collision/Lose-----------------//

Game.prototype.collision = function(){
   
    for(var i = 0; i < game.hoops.length; i++){
        if(game.hoops[i].x === game.jr.x && game.hoops[i].y === game.jr.y){
            restartGame();
        }
    }
}

//------ Sound -------//

// function sound(src) {
//     this.sound = document.createElement("audio");
//     this.sound.src = src;
//     this.sound.setAttribute("preload", "auto");
//     this.sound.setAttribute("controls", "none");
//     this.sound.style.display = "none";
//     document.body.appendChild(this.sound);
//     this.play = function(){
//         this.sound.play();
//     }
//     this.stop = function(){
//         this.sound.pause();
//     }
//  }

//-------------- WIN ---------------//

Game.prototype.win = function(){
    if(game.score === 350){
        clearInterval(pause);
          if(confirm('You win!')){
              window.location.reload();
          }
    }
}

//-------------JR movements---------------//

// var mySound;

Jr.prototype.moveDown = function(){
    
    if (game.gameBoard[game.jr.y+1][game.jr.x] === GROUND) {
        game.gameBoard[game.jr.y][game.jr.x] = GROUND;
        game.jr.y = game.jr.y + 1 ;
        game.gameBoard[game.jr.y][game.jr.x] = this.code;
      } 
    else if(game.gameBoard[game.jr.y+1][game.jr.x] === GOAL){
        game.jr.bottlesDrank += 1;
        console.log(game.score += 50);
        game.gameBoard[game.jr.y][game.jr.x] = GROUND;
        game.jr.y = game.jr.y + 1 ;
        game.gameBoard[game.jr.y][game.jr.x] = this.code;
        game.win();
        // mySound = new sound("../Images/Slurping 2-SoundBible.com-1269549524.wav");
        // mySound.play();
      }
    else if(game.gameBoard[game.jr.y+1][game.jr.x] === 5){
        game.gameBoard[game.jr.y][game.jr.x] = GROUND;
        game.jr.y = game.jr.y + 1 ;
        game.gameBoard[game.jr.y][game.jr.x] = this.code;
        game.lives--;
      }
}

Jr.prototype.moveUp = function(){

    if (game.gameBoard[game.jr.y-1][game.jr.x] === GROUND) {
        game.gameBoard[game.jr.y][game.jr.x] = GROUND;
        game.jr.y = game.jr.y - 1 ;
        game.gameBoard[game.jr.y][game.jr.x] = this.code;
      } 

  else if(game.gameBoard[game.jr.y-1][game.jr.x] === GOAL){
        game.jr.bottlesDrank += 1;
        console.log(game.score += 50);
        game.gameBoard[game.jr.y][game.jr.x] = GROUND;
        game.jr.y = game.jr.y - 1 ;
        game.gameBoard[game.jr.y][game.jr.x] = this.code;
        game.win();
        // mySound = new sound("../Images/Slurping 2-SoundBible.com-1269549524.wav");
        // mySound.play();
  }

  else if(game.gameBoard[game.jr.y-1][game.jr.x] === 5){
      game.gameBoard[game.jr.y][game.jr.x] = GROUND;
        game.jr.y = game.jr.y - 1 ;
        game.gameBoard[game.jr.y][game.jr.x] = this.code;
        game.lives--;
        }
}

Jr.prototype.moveLeft = function(){
 
    if (game.gameBoard[game.jr.y][game.jr.x - 1] === GROUND) {
        game.gameBoard[game.jr.y][game.jr.x] = GROUND;
        game.jr.x = game.jr.x - 1 ;
        game.gameBoard[game.jr.y][game.jr.x] = this.code;
      } 

  else if(game.gameBoard[game.jr.y][game.jr.x-1] === GOAL){
        game.jr.bottlesDrank += 1;
        console.log(game.score += 50);
        game.gameBoard[game.jr.y][game.jr.x] = GROUND;
        game.jr.x = game.jr.x - 1 ;
        game.gameBoard[game.jr.y][game.jr.x] = this.code;
        game.win();
        // mySound = new sound("../Images/Slurping 2-SoundBible.com-1269549524.wav");
        // mySound.play();
  }

  else if(game.gameBoard[game.jr.y][game.jr.x-1] === 5){
      game.gameBoard[game.jr.y][game.jr.x] = GROUND;
        game.jr.x = game.jr.x - 1 ;
        game.gameBoard[game.jr.y][game.jr.x] = this.code;
        game.lives--;
        }
}
  
  Jr.prototype.moveRight = function() {
    
    if (game.gameBoard[game.jr.y][game.jr.x + 1] === GROUND) {
        game.gameBoard[game.jr.y][game.jr.x] = GROUND;
        game.jr.x = game.jr.x + 1 ;
        game.gameBoard[game.jr.y][game.jr.x] = this.code;
    } 

  else if(game.gameBoard[game.jr.y][game.jr.x+1] === GOAL){
        game.jr.bottlesDrank += 1;
        console.log(game.score += 50);
        game.gameBoard[game.jr.y][game.jr.x] = GROUND;
        game.jr.x = game.jr.x + 1 ;
        game.gameBoard[game.jr.y][game.jr.x] = this.code;
        game.win();
        // mySound = new sound("../Images/Slurping 2-SoundBible.com-1269549524.wav");
        // mySound.play();
    }

  else if(game.gameBoard[game.jr.y][game.jr.x+1] === 5){
      game.gameBoard[game.jr.y][game.jr.x] = GROUND;
        game.jr.x = game.jr.x + 1 ;
        game.gameBoard[game.jr.y][game.jr.x] = this.code;
        game.lives--;
        }
}



//------------------Hoop Movements------------------//

var Hoop = function(x,y){
this.x = x;
this.y = y;
this.img = "../Images/hoop.png"
this.code = 5;
}

Hoop.prototype.goDown = function(){
    if (game.gameBoard[this.y+1][this.x] === GROUND) {
          game.gameBoard[this.y][this.x] = GROUND;
          this.y = this.y + 1 ;
          game.gameBoard[this.y][this.x] = this.code;
        } 
    else if(game.gameBoard[this.y+1][this.x] === GOAL){
          game.gameBoard[this.y][this.x] = GOAL;
          this.y = this.y + 1 ;
          game.gameBoard[this.y][this.x] = this.code;
        }
    else if(game.gameBoard[this.y+1][this.x] === JR){
        game.gameBoard[this.y][this.x] = GROUND;
          this.y = this.y + 1 ;
          game.gameBoard[this.y][this.x] = this.code;
          console.log("HIT JR");
        }
}

Hoop.prototype.goUp = function(){
    if (game.gameBoard[this.y-1][this.x] === GROUND) {
        game.gameBoard[this.y][this.x] = GROUND;
        this.y = this.y - 1 ;
        game.gameBoard[this.y][this.x] = this.code;
    } 

  else if(game.gameBoard[this.y-1][this.x] === GOAL){
        game.gameBoard[this.y][this.x] = GOAL;
        this.y = this.y - 1 ;
        game.gameBoard[this.y][this.x] = this.code;
    }

  else if(game.gameBoard[this.y-1][this.x] === JR){
      game.gameBoard[this.y][this.x] = GROUND;
        this.y = this.y - 1 ;
        game.gameBoard[this.y][this.x] = this.code;
        console.log("HIT JR");
    }
}

Hoop.prototype.goLeft = function(){
    if (game.gameBoard[this.y][this.x - 1] === GROUND) {
        game.gameBoard[this.y][this.x] = GROUND;
        this.x = this.x - 1 ;
        game.gameBoard[this.y][this.x] = this.code;
    } 

  else if(game.gameBoard[this.y][this.x-1] === GOAL){
        game.gameBoard[this.y][this.x] = GOAL;
        this.x = this.x - 1 ;
        game.gameBoard[this.y][this.x] = this.code;
    }

  else if(game.gameBoard[this.y][this.x-1] === JR){
      game.gameBoard[this.y][this.x] = GROUND;
        this.x = this.x - 1 ;
        game.gameBoard[this.y][this.x] = this.code;
        console.log("HIT JR");
    }
}

Hoop.prototype.goRight = function(){
    if (game.gameBoard[this.y][this.x + 1] === GROUND) {
        game.gameBoard[this.y][this.x] = GROUND;
        this.x = this.x + 1 ;
        game.gameBoard[this.y][this.x] = this.code;
    } 

  else if(game.gameBoard[this.y][this.x+1] === GOAL){
        game.gameBoard[this.y][this.x] = GOAL;
        this.x = this.x + 1 ;
        game.gameBoard[this.y][this.x] = this.code;
    }

  else if(game.gameBoard[this.y][this.x+1] === JR){
      game.gameBoard[this.y][this.x] = GROUND;
        this.x = this.x + 1 ;
        game.gameBoard[this.y][this.x] = this.code;
        console.log("HIT JR");
    }
}

//------------------Random Hoop Movements--------------------//

Hoop.prototype.randomMovement = function(){
    var randomNumber = Math.floor(Math.random() * 4)

    if (randomNumber === 0){
        this.goDown();
    }
    else if (randomNumber === 1){
        this.goUp();
    } 
    else if (randomNumber === 2){
        this.goRight();
    } 
    else if (randomNumber === 3){
        this.goLeft();
    } 
}

//---------Hennessy------------//

var Bottle = function(x, y){
    this.x = x;
    this.y = y;
    this.img = "../Images/hennessy (1).png"
    this.code = 4;
}

//---------Prevent scrolling-------------//

window.addEventListener("keydown", function(e) {
    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


//-------Set up arrow functionality----------//

function keyboardControls() {
    document.addEventListener('keydown', function (e) {
        game.eraseBoard();
        
        if (e.keyCode === 37) {        
            game.jr.moveLeft();
            
        } else if (e.keyCode === 38) {  
            game.jr.moveUp();
            
        } else if (e.keyCode === 39){   
            game.jr.moveRight();
            
        } else if (e.keyCode === 40){  
            game.jr.moveDown();
        }
            game.drawBoard();
            game.collision(); 
    });
  }

//--------Game constants/variables----------//

    const game = new Game();
    const WALL = 1;
    const JR = 2;
    const GROUND = 3;
    const GOAL = 4;
    const goal1 = new Bottle(3, 7);
    const goal2 = new Bottle(8, 10);
    const goal3 = new Bottle(9, 1);
    const goal4 = new Bottle(9, 13);
    const goal5 = new Bottle(12, 5);
    const goal6 = new Bottle(18, 3);
    const goal7 = new Bottle(18, 12);
    const hoop1 = new Hoop(5, 3);
    const hoop2 = new Hoop(5, 11);
    const hoop3 = new Hoop(14, 3);
    const hoop4 = new Hoop(14, 11);
    const hoop5 = new Hoop(1, 7);
    const hoop6 = new Hoop(18, 7);
    game.hoops.push(hoop1, hoop2, hoop3, hoop4, hoop5, hoop6);
    game.bottle.push(goal1, goal2, goal3, goal4, goal5, goal6, goal7);
    game.jr = new Jr();
    
    game.drawBoard();
    keyboardControls();

//---------Hoop movement timing----------//
    var pause = 
    setInterval(function(){
        game.eraseBoard();
        game.hoops[0].randomMovement();
        game.hoops[1].randomMovement();
        game.hoops[2].randomMovement();
        game.hoops[3].randomMovement();
        game.hoops[4].randomMovement();
        game.hoops[5].randomMovement();
        game.drawBoard();
        game.collision();
      },200);

      function restartGame(){
          clearInterval(pause);
          if(confirm('Game Over! You Hit a Backboard.')){
              window.location.reload();
          }
        
      }

    };
    
    
    
    
    








