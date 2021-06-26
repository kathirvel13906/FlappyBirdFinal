class Ground {
    constructor(x,y,width,height) {
        var option = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("brown");
        strokeWeight(5);
        stroke(109,25,40);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}