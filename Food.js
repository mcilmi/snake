class Food {

    constructor(size) {
        this.size = size;
        this.pickLocation();
    }

    show() {
        fill(255, 0, 100);
        this.x = constrain(this.x, 0, width - size);
        this.y = constrain(this.y, 0, height - size);
        square(this.x, this.y, this.size);
    }

    pickLocation() {
        let rows = floor(height / size);
        let cols = floor(width / size);

        let location = createVector(floor(random(cols)), floor(random(rows)));
        this.x = location.x * size;
        this.y = location.y * size;
    }
}