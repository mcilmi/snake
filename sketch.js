const size = 20;
const speed = 20;
const canvasWidth = 600;
const canvasHeight = 600;
var snake;
var food;

function setup() {
    createCanvas(600, 600);
    snake = new Snake(canvasWidth / 2, canvasHeight / 2, size, speed);
    food = new Food(size);
    frameRate(15);
}

function draw() {
    background(51);
    snake.update();
    snake.show();
    snake.eat(food);
    food.show();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        snake.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        snake.dir(-1, 0);
    } else if (keyCode === 32) {
        food.pickLocation();
    }
}