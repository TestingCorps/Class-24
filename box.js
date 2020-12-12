class Box{
    constructor(x,y,w,h){
        var b_options = {
            restitution: 0.5,
            density: 1.2,
            friction:1.2        }
        this.body = Bodies.rectangle(x,y,w,h,b_options);
        this.width = w;
        this.height = h;
        World.add(world,this.body);
    }

    display(){
        var gos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(gos.x,gos.y);
        rotate(angle);
        fill("black");
        stroke("chocolate");
        strokeWeight(6);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}