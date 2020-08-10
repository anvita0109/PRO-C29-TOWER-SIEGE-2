class Box3 {
    constructor(x, y, width, height) {
      var options = {
           isStatic:false,
        'restitution':0.8,
          'friction':2,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed < 2 ) {
        rectMode(CENTER);
        strokeWeight(1);
        stroke(0);
        fill(154,248,97)
        rect(pos.x, pos.y, this.width, this.height);
       }
        else{
          World.remove(world, this.body);
        }
    }
  };
  