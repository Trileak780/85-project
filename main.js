canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

car_width = 75;
car_height = 100;

background_image = "parkingLot.jpg";
car_image = "car2.png";

x = 5;
y = 225;

function add() {
	background_img_tag = new Image();
	background_img_tag.onload = upload_background;
	background_img_tag.src = "parkingLot.jpg";

	car_img_tag = new Image();
	car_img_tag.onload = upload_car;
	car_img_tag.src = "car2.png";
}

function upload_background() {
	ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}

function upload_car() {
	ctx.drawImage(car_img_tag, x, y, car_width, car_height);
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
	if (y >= 0 && x != 435 || y != 95) {
		y = y - 10
		console.log("Up pressed, x ="+ x +", new y ="+ y)
		upload_background();
		upload_car();
		if (x == 435 && y == 95) {
			document.getElementById("instruct").innerHTML = "You parked!";
		}
	}
}

function down()
{
	if (y <= 400 && x != 435 || y != 95) {
		y = y + 10
		console.log("Down pressed, x ="+ x +", new y ="+ y)
		upload_background();
		upload_car();
		if (x == 435 && y == 95) {
			document.getElementById("instruct").innerHTML = "You parked!";
		}
	}
}

function left()
{
	if (x >= 0 && x != 435 || y != 95) {
		x = x - 10
		console.log("Right pressed, new x ="+ x +", y ="+ y)
		upload_background();
		upload_car();
		if (x == 435 && y == 95) {
			document.getElementById("instruct").innerHTML = "You parked!";
		}
	}
}

function right()
{
	if (x <= 800 && x != 435 || y != 95) {
		x = x + 10
		console.log("Right pressed, new x ="+ x +", y ="+ y)
		upload_background();
		upload_car();
		if (x == 435 && y == 95) {
			document.getElementById("instruct").innerHTML = "You parked!";
		}
	}
}

