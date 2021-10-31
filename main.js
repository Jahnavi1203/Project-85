canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");                      //(done)Create a reference for canvas 

greencar_width = 75;
greencar_height = 100;                             //(Done)Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;                                 //(Done)Set initial position for a car image.

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;  
	
	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src  = greencar_image;        //(Done)upload car, and background images on the canvas.
}

function uploadBackground() {
	ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height)  //(Done)Define function ‘uploadBackground’

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag , greencar_x , greencar_y , greencar_width , greencar_height) //(Done)Define function ‘uploadgreencar’.

	
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
	else
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		else
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	else
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >= 0)
	{
		greencar_y = greencar_y - 10;            //(Done)Define function to move the car up     
		console.log("When up arrow is pressed, x = " + greencar_x , "When down arrow is presses,  y = " + greencar_y);
		uploadBackground();  
		uploadgreencar(); 
	}           
}                              

function down()
{
	if(greencar_y >= 0)
	{
        greencar_y = greencar_y + 10;    //(Done)Define function to move the car downward
		console.log("When up arrow is pressed, x = " + greencar_x , "When down arrow is presses,  y = " + greencar_y);
		uploadBackground();  
		uploadgreencar(); 
	}
	
}

function left()
{
	if(greencar_x >= 0)
	{
        greencar_x = greencar_x - 10;  //(Done)Define function to move the car left side  
		console.log("When up arrow is pressed, x = " + greencar_x , "When down arrow is presses,  y = " + greencar_y);
		uploadBackground();  
		uploadgreencar();
	}

}

function right()
{
	if(greencar_x >= 0)
	{
        greencar_x = greencar_x + 10;  //(Done)Define function to move the car right side  
		console.log("When up arrow is pressed, x = " + greencar_x , "When down arrow is presses,  y = " + greencar_y);
		uploadBackground();  
		uploadgreencar();
	}

}
