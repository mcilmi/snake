class Snake {

    constructor(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.xSpeed = speed;
        this.ySpeed = 0;
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.x = constrain(this.x, 0, width - size);
        this.y = constrain(this.y, 0, height - size);
    }

    show() {
        fill(255);
        square(this.x, this.y, this.size);
    }

    dir(x, y) {
        this.xSpeed = x * this.speed;
        this.ySpeed = y * this.speed;
    }

    eat(food) {
        if (dist(this.x, this.y, food.x, food.y) < size) {
            food.pickLocation();
        }
    }

}