class mangoes {
    constructor(x,y,r){
        var options = {
            isStatic :true,
          "restitution":0,
        "friction":1
          
         
        }
  
         this.x=x;
         this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,r, options) 
        this.image=loadImage("mango.png");
        World.add(world,this.body);
   
    }
    display(){
        

        push();
        fill (255,255,0)
       imageMode(CENTER)
translate (this.body.position.x , this.body.position.y)
       image(this.image,0,0, 50,50);
       pop();
    }
}