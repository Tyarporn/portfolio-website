balls = []
function setup(){
  myWidth = displayWidth-16
  var canvas = createCanvas(myWidth,500);
  background(240);
  for(let i = 50; i < displayWidth; i+=100){
    balls.push(new Ball(i,(i-50)/5));
  }
	gslider = createSlider(0,4,2,0.01);
  gslider.parent('sketch-holder');
  canvas.parent('sketch-holder');

  var myDiv = select('#coding');
  var myWidth = myDiv.style.width;
    // console.log("mydiv "  + myDiv);
    // console.log("mywidth " + displayWidth)
  console.log("Why are you looking at my code? hmmmmmmmmmmmmmmm")
}

function draw(){
  background(240);
	background(240);
	fill(0,255,0);
	for(let i = 0; i < balls.length; i++){
		balls[i].display();

  if(mouseIsPressed && dist(mouseX, mouseY, 50 + i *100, height -40) < 40)
    balls[i].bounce(gslider.value());
   else
     balls[i].reset(gslider.value());
	}

}
class Ball {
  constructor ( _x,  _y){
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
       // this.yspeed *= -this.damp;
       this.yspeed *= -1;
       this.ypos=(height-20);
     }
   }
}
