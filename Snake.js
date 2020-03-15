class Snake {
    constructor(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.xSpeed = speed;
        this.ySpeed = 0;
    }

    show() {
        square(this.x, this.y, this.size);
    }

    move() {
        this.x = constrain(this.x + this.xSpeed, 0, width - this.size);
        this.y = constrain(this.y + this.ySpeed, 0, height - this.size);
    }

    changeDirection(xSpeed, ySpeed) {
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }
}