console.log("testing!")

let game = document.querySelector("#game")
let ctx = game.getContext("2d"); // 2d canvas for the game
let score = document.querySelector("score"); // keeping track of score

const paddle = document.querySelector("#paddle")
const bricks = document.querySelector("#bricks")
const ball = document.querySelector("#ball")

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

window.addEventListener("DOMContentLoaded", function (e) {
    paddle = new BrickBreak(10, 20, "white", 20, 20);
    ball = new BrickBreak(100, 100, "white", 40, 80);

});

