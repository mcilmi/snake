class Snake {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = 20;
    }

    show() {
        square(this.x, this.y, this.size);
    }

    move() {
        this.x += this.speed;
    }
}