class Wall {
    constructor(x) {
        var option = {
            isStatic:true
        }

        this.rand = random(35,465);

        this.width = 50;
        this.w1 = Bodies.rectangle(250+x*750, 25, 50, this.rand, option);
        this.height1 = this.rand;
        this.w2 = Bodies.rectangle(250+x*750, 475, 50, 500-this.rand, option);
        this.height2 = 500-this.rand;

        World.add(world, this.w1);
        World.add(world, this.w2);
    }

    display() {
        var pos1 = this.w1.position;
        var angle1 = this.w1.angle;

        var pos2 = this.w2.position;
        var angle2 = this.w2.angle;

        push();
        translate(pos1.x, pos1.y);
        rotate(angle1);
        fill("green");
        strokeWeight(8);
        stroke(10,100,10);
        rectMode(CENTER);
        rect(0,0,this.width,this.height1);
        pop();

        push();
        translate(pos2.x, pos2.y);
        rotate(angle2);
        fill("green");
        strokeWeight(8);
        stroke(10,100,10);
        rectMode(CENTER);
        rect(0,0,this.width,this.height2);
        pop();
    }
}