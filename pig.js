class Pig{
    constructor(x,y){
        var b_options = {
            restitution: 0.5,
            density: 1.2,
            friction:1.2        }
        this.body = Bodies.rectangle(x,y,50,50,b_options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }

    display(){
        var gos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(gos.x,gos.y);
        rotate(angle);
        fill("green")
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}