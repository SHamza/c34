class Ball{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius,{frictionAir:0.005,density:1});
        this.r=radius;
  World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill("blue");
  ellipse(pos.x,pos.y,this.r,this.r);
    }
}