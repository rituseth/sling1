class Stone  {
    constructor(x,y,r) {
        var options = {
           isStatic: false,
          //  restitution:0,
     
            density:1.2
        }

        this.r=r
        this.x=x
        this.y=y
        this.body = Bodies.circle(x,y,r/2,options);
        this.image=loadImage("unnamed.png")
        this.image.scale  = 0.1
        World.add(world, this.body);
      }
      display(){
   var pos = this.body.position 
        push();
        translate (pos.x , pos.y)
        imageMode(CENTER);
    ellipseMode(RADIUS)
        fill("brown");
        image(this.image,0,0,this.r*2 , this.r*2);
        pop();
      }
    };