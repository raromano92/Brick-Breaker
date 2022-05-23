console.log("testing!")

// Setting up canvas and all of my elements for game
let game = document.querySelector("#canvas")
let ctx = game.getContext("2d"); // 2d canvas for the game
let score = document.querySelector("score"); // keeping track of score

let paddle = document.querySelector("#paddle")
let ball = document.querySelector("#ball")

// Setting our width and height for the canvas
game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute("width", getComputedStyle(game)["width"]);

class BrickBreak {
    constructor(x, y, color, width, height){
        this.x = x;
        this.y = y;
        this.color = color;
        this.height = height;
        this.width = width;
        this.alive = true;
}


render() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height)
}

}

// Loading DOM Content
window.addEventListener("DOMContentLoaded", function (e) {
    
});






// Rendering our paddle on screen
function makePaddle() {
    
    ctx.fillStyle = 'white'
    ctx.fillRect(380, 435, 60, 10)
    
}
// Invoking Paddle


// Setting up our brick variables

let brickRowTotal = 5;
let brickColumnTotal = 10;
let brickWidth = 65;
let brickHeight = 15;
let brickPadding = 10;
let brickOffSetTop = 30;
let brickOffSetLeft = 30;

// Creating our field of bricks utilizing for loops for the rows and columns

function makeBricks() {

    let bricks = [];
    for(let c = 0; c < brickColumnTotal; c++) {
        bricks[c] = [];
        console.log("firstLoop")
    
        for(let r = 0; r < brickRowTotal; r++) {
            bricks[c][r] = { x: 0, y: 0 };
            console.log("secondLoop")
        
    
    // Creating new variables which will calculate new position of the next brick as for loop is running
    let brickX = (c*(brickWidth+brickPadding))+brickOffSetLeft;
    console.log(brickX)
   
    console.log(brickX)
    let brickY = (r*(brickHeight+brickPadding))+brickOffSetTop;

         // Setting our starting positions based on calculations above
         bricks[c][r].x = brickX
         bricks[c][r].y = brickY

         // Triggering the path of bricks to start from the top left then cascade out
        ctx.beginPath();
        // Re assiging new x and y variables for each brick so they don't all spawn in same location
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        // Setting color for our bricks
        ctx.fillStyle = 'green'
        // running fill method to populate total bricks based on the for loops
        ctx.fill();
        // Ending path here
        ctx.closePath();
    }
    }
    }

    // Build everything in here (ball, interval, etc.)
function drawGame() {

    makeBricks();
    makePaddle();

}
drawGame();

    

  





