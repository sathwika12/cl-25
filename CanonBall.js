class CanonBall{
    constructor(x,y){
        var CanonBallOption = {
            isStatic: true,
            restitution: 1,
            friction: 1,
            density: 1
        }
        this.image = loadImage("cannonball.png");
        this.body = Bodies.circle(x,y,40, CanonBallOption);
        this.r = 40
        World.add(world,this.body)
    }
    shoot() {
        var velocity = p5.Vector.fromAngle(cannon.angle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
      }
    display(){
    push()
    translate(this.body.position.x, this.body.position.y)
    rotate(this.body.angle)
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
    }
    
}