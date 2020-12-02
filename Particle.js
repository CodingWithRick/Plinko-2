class Particle {
    constructor(x, y) {
        var options = {
            restitution: 0.4
        }
        this.radius = 10;
        this.body = Bodies.circle(x, y, this.radius, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
    display() {
        push();
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();
    }
}