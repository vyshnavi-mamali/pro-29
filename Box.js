class Box{
    constructor(x, y, width, height) {
        var options = {
            //isStatic:false,
            restitution:0.4,
            friction:0.0,
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("yellow");
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}