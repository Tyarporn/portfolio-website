// function setup(){
//   var canvas = createCanvas(500,500);
//   // var canvas = createCanvas(w,500);
//   background(240);
//   b1 = new Ball(50,random(300));
// 	b2 = new Ball(150,random(300));
// 	b3 = new Ball(250,random(300));
// 	b4 = new Ball(350,random(300));
// 	b5 = new Ball(450,random(300));
//
//
// 	gslider = createSlider(0,4,2,0.01);
//   gslider.parent('sketch-holder');
//   // gslider.position(0,0,'relative');
//   canvas.parent('sketch-holder');
//
//   var myDiv = select('#coding');
//   var myWidth = myDiv.style.width;
//     console.log("mydiv "  + myDiv);
//     console.log("mywidth " + displayWidth)
// }
//
// function draw(){
//   background(240);
// 	balls = [b1,b2,b3,b4,b5];
// 	background(240);
// 	fill(0,255,0);
// 	for(let i = 0; i < balls.length; i++){
// 		balls[i].display();
//
//   if(mouseIsPressed && dist(mouseX, mouseY, 50 + i *100, height -40) < 40)
//     balls[i].bounce(gslider.value());
//    else
//      balls[i].reset(gslider.value());
// 	}
//
// }
// class Ball {
//   constructor ( _x,  _y){ //the constructor! where we can inititalize variables
//     this.xpos = _x;
//     this.ypos = _y;
//     this.xspeed = 3;
//     this.yspeed = 5;
// 		this.damp = 0.98;
// 	  this.ballColor = color(random(255),random(255),random(255));
//   }
//
//  	 getXpos(){
//  		return this.xpos;
// 	}
//
//  	 getYpos(){
//  		return this.ypos;
// 	}
//
// 	greenColor(){
// 		this.ballColor = color(0,255,0);
// 	}
//
// 	display(){
//     noStroke();
// 		fill(this.ballColor);
//     ellipse(this.xpos,this.ypos,40,40);
//   }
//
//  bounce(gravity){
//     this.ypos+=this.yspeed;
//     this.yspeed+=gravity;
//
//     if(this.ypos > (height-20)){
//       this.yspeed*=-this.damp;
//       this.ypos=(height-20);
//     }
//    }
// reset(gravity){
//      this.yspeed += gravity;
//      this.ypos+=this.yspeed;
//      if(this.ypos > height - 20){
//        this.yspeed *= -this.damp;
//        this.ypos=(height-20);
//      }
//    }
// }
balls = []
function setup(){
  var canvas = createCanvas(displayWidth,500);
  // var canvas = createCanvas(w,500);
  background(240);
  for(let i = 50; i < displayWidth; i+=100){
    balls.push(new Ball(i,random(300)))
  }
	gslider = createSlider(0,4,2,0.01);
  gslider.parent('sketch-holder');
  canvas.parent('sketch-holder');

  var myDiv = select('#coding');
  var myWidth = myDiv.style.width;
    console.log("mydiv "  + myDiv);
    console.log("mywidth " + displayWidth)
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
