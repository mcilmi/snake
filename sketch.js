const size = 20;
const speed = 15;
const snake = new Snake(30, 20, size, speed);

function setup() {
    createCanvas(600, 600);
    frameRate(20);
}

function draw() {
    background(51);
    snake.show();
    snake.move();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.changeDirection(0, -speed);
    }
    if (keyCode === DOWN_ARROW) {
        snake.changeDirection(0, speed);
    }

    if (keyCode === RIGHT_ARROW) {
        snake.changeDirection(speed, 0);
    }

    if (keyCode === LEFT_ARROW) {
        snake.changeDirection(-speed, 0);
    }
}