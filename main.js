//Create a reference for canvas 

const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext("2d");


//Give specific height and width to the car image

const greencar_width = 45;
const greencar_height = 60;

let background_image = "parkingLot.jpg";
let greencar_image = "car2.png";

//Set initial position for a car image.

let greencar_x = 5;
let greencar_y = 255;



function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onlode = uploadBackground();
	background_imgTag.src= background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onlode = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’

	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y,  greencar_width, greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greencar_y>=0){

		greencar_y = greencar_x-5; 
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	greencar_y=greencar_y+5;
	uploadBackground();
	uploadgreencar();
}

function left()
{
	//Define function to move the car left side
	greencar_x = greencar_x-5;
	uploadBackground();
	uploadgreencar();
}

function right()
{
	//Define function to move the car right side
	greencar_x = greencar_x+5
	uploadBackground();
	uploadgreencar();
}
