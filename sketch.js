function setup(){
  var canvas = createCanvas(550,300);
  canvas.parent('sketch-holder');

  b1 = new Ball(78.57,random(300));
	b2 = new Ball(157.14,random(300));
	b3 = new Ball(235.71,random(300));
	b4 = new Ball(314.38,random(300));
	b5 = new Ball(392.85,random(300));
	b6 = new Ball(471.42,random(300));


}
function draw(){
  background(250)
	balls = [b1,b2,b3,b4,b5,b6];

	for(let i = 0; i < balls.length; i++){
		balls[i].display();

  if(mouseIsPressed && dist(mouseX, mouseY, 50 + i *100, height -40) < 40)
    balls[i].bounce(2);
   else
     balls[i].reset(2);
	}

}

class Ball {
  constructor ( _x,  _y){ //the constructor! where we can inititalize variables
    this.xpos = _x;
    this.ypos = _y;
    this.xspeed = 3;
    this.yspeed = 5;
		this.damp = 0.98;
	  this.ballColor = color(random(255),random(255),random(255));
  }

 	 getXpos(){
 		return this.xpos;
	}

 	 getYpos(){
 		return this.ypos;
	}

	greenColor(){
		this.ballColor = color(0,255,0);
	}

	display(){
    noStroke();
		fill(this.ballColor);
    ellipse(this.xpos,this.ypos,40,40);
  }

 bounce(gravity){
    this.ypos+=this.yspeed;
    this.yspeed+=gravity;

    if(this.ypos > (height-20)){
      this.yspeed*=-this.damp;
      this.ypos=(height-20);
    }
   }
reset(gravity){
     this.yspeed += gravity;
     this.ypos+=this.yspeed;
     if(this.ypos > height - 20){
       this.yspeed *= -this.damp;
       this.ypos=(height-20);
     }
   }
}
