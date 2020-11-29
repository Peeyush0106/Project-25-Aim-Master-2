class Paper {
    constructor(x, y, radius, options) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.options = options;
        this.body = Bodies.circle(this.x, this.y, this.radius, this.options);
        World.add(world, this.body);
    }
    display() {
        image(paperImage, ball.body.position.x, ball.body.position.y, 70, 70);
    }
}