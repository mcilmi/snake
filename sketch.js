const snake = new Snake(30,20,50);

function setup() {
    createCanvas(600, 600);
    frameRate(16);
}

function draw() {
    background(51);
    snake.show();
    snake.move();
}