class Bird {
    constructor(x,y) {
        var option = {
            isStatic:true,
            'friction':0.3,
            'density':1,
            'restitution':0.1
        }

        this.body = Bodies.rectangle(x,y,75,75,option);
        this.image = loadImage("bird.gif")
        this.width = 100;
        this.height = 100;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("red");
        strokeWeight(8);
        stroke("yellow");
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}