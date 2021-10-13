function setup() {
  var canvas = createCanvas(525,525);
	//createCanvas(525, 525);
	background(255);
	noStroke();
  canvas.parent('sketch-holder2');
}
let colors;
function draw() {
	let red = ("#FF9AA2");
	let orange = ("#FFB7B2");
	let yellow = ("#FFDAC1");
	let light_green = ("#E2F0CB");
	let dark_green = ("#B5EAD7");
	let blue = ("#C7CEEA");

	let vivid_burgundy = ("#A51931");
	let cultured = ("#F4F5F8");
	let space_cadet = ("#2D2A4A");

	let am_white = ("#ffffff");
	let am_red = ("#b22234");
	let am_blue = ("#3c3b6e");

	colors = [red, orange, yellow, light_green, dark_green, blue];

	/*
	   Upper left
	*/
	rectMode(CORNER);
		let first_color;
		let third_color;
		let second_color;
		let fourth_color;
	for(let i = 0; i <= 525; i += 30){
		first_color = random(colors);
		second_color = random(colors);
		while(first_color == second_color){
			second_color = random(colors);
		}
		fill(first_color);
		rect(i,0,15,525);

		fill(second_color);
		rect(i + 5, 0,5,525);
	}

	noLoop();
	rectMode(CENTER);

	//vertical
	// fill(vivid_burgundy);
	// rect(262.5,0,15,1050);
	// fill(cultured);
	// rect(262.5,0,10,1050);
	// fill(space_cadet);
	// rect(262.5,0,5,1050);

	//horizontal
	// fill(am_blue);
	// rect(0,262.5,1050,15);
	// fill(am_red);
	// rect(0,262.5,1050,10);
	// fill(am_white);
	// rect(0,262.5,1050,5);

  fill(vivid_burgundy);
  rect(0,262.5,1050,15);
  fill(cultured);
  rect(0,262.5,1050,10);
  fill(space_cadet);
  rect(0,262.5,1050,5);
}
