class Plinko{
constructor(x,y,r){
var options = {
    isStatic:true
}

this.r = r;
this.body = Bodies.circle(x,y,this.r,options);
World.add(world,this.body);
}

display(){
var pos = this.body.position;
var angle = this.body.angle;

push()
translate(pos.x,pos.y)
rotate(angle)
noStroke()
fill("white")
ellipseMode(RADIUS)
ellipse(x,y,this.r,this.r)
pop()

}







}