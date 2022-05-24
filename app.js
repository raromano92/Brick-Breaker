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

// Setting up render function so we can get our elements to appear on canvas once created
render() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height)
}

}

// Loading DOM Content
window.addEventListener("DOMContentLoaded", function (e) {
    
});


// Creating and styling our paddle within this one function
function makePaddle() {
    
    ctx.fillStyle = 'white'
    ctx.fillRect(365, 435, 60, 10)
    
}

// Setting up our brick variables

let brickRowTotal = 6;
let brickColumnTotal = 10;
let brickWidth = 70;
let brickHeight = 15;
let brickPadding = 10;
let brickOffSetTop = 10;
let brickOffSetLeft = 10;


// Creating our field of bricks utilizing for loops for the rows and columns
function makeBricks() {

    // Creating our empty array and for loop for brick columns
    let bricks = [];
    for(let c = 0; c < brickColumnTotal; c++) {
        bricks[c] = [];
        console.log("firstLoop")
    
    // Creating our empty array and for loop for brick rows
        for(let r = 0; r < brickRowTotal; r++) {
            bricks[c][r] = { x: 0, y: 0 };
            console.log("secondLoop")
        
    
    // Creating new X and Y variables which will calculate new position of the next brick as for loop is running
    let brickX = (c*(brickWidth+brickPadding))+brickOffSetLeft;
    console.log(brickX)
   
    let brickY = (r*(brickHeight+brickPadding))+brickOffSetTop;
    console.log(brickY)

         // Setting our x and y coords for each new brick in the grid based on calculations above
         bricks[c][r].x = brickX
         bricks[c][r].y = brickY

         // Triggering the path of bricks to start from the top left of canvas then cascade out
        ctx.beginPath();
        // This sets new x and y variables for each brick placed so they don't all spawn on top of each other
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        // Setting color for our bricks
        ctx.fillStyle = 'green'
        // running fill method to populate all bricks based on the for loops
        ctx.fill();
        // Ending path here
        ctx.closePath();
    }
    }
    }

    // Making our variables for the game ball
    // Ball will start it's path from center canvas for now
    let ballX = canvas.width / 2
    let ballY = canvas.height / 2
    // Delta refers to the new location of the ball everytime it's moving on screen (using to set direction/speed of ball)
    let ballXDelta = 2;
    let ballYDelta = 2;
    // Basically setting size of the ball using radius here
    let radius = 10;

    // Going to set up our function for the ball's animation
    function makeBall() {

    // outline color of ball
    ctx.strokeStyle = "gold"
    // method used to start ball pathing
    ctx.beginPath();
    // Here we invoke starting spot of ball, it's radius and multiplying PI by 2 to create perfect circle
    ctx.arc(ballX, ballY, radius, 0, 2 * Math.PI);
    // renders ball on canvas
    ctx.fill();
    // outline for ball
    ctx.stroke();
    
    }

    // Making a function for hit detection whenever ball collides with sides of canvas
   function hitDetect() {
    //  if ball on X axis trys to leave canvas, we set the movement to a negative value using Delta to rebound it in the opposite direction
       if(ballX + radius > 806 || ballX - radius < 0) {
        // Shorthand syntax for multiplying current location for new location
           ballXDelta *= -1
       }
       //  if ball on Y axis trys to leave canvas, we set the movement to a negative value using Delta to rebound it in the opposite direction
       if(ballY + radius > 450 || ballY - radius < 0) {
           ballYDelta *= -1
       }

   }

    // This will be our **MEGA** function that holds all the other functions and runs them once it's called
    // Call everything in here (ball, interval, etc.)
    function gameLoop() {

    // Utilizing clearRect to "erase" each previous ball movement to the human eye
    ctx.clearRect(0, 0, 806, 450)
    makeBall();
    hitDetect();
    ballX = ballX + ballXDelta;
    ballY = ballY + ballYDelta;
    makeBricks();
    makePaddle();

}

// Using SetInterval for how often the gameloop updates
    setInterval(gameLoop, 10);


    // Logging mousemovements to determine dimensions of canvas
    // top left: x: 170, y: 202 / bottom right x: 978, y: 652
    canvas.addEventListener('mousemove', function(e) {
    console.log(`x: ${ e.x } | y: ${ e.y }`);
});



   




    

  





