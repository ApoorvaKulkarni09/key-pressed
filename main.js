
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d")

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown" , my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if ((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{alphabetkey();
			document.getElementById("d1").innerHTML="YOU PRESSED AN ALPHABET KEY "
			console.log("alphabet key ")

		} 
		if (( keyPressed >= 48 && keyPressed <=57 ))
		{ img_image = "numkey.png";
		add();
		   document.getElementById("d1").innerHTML="YOU PRESSED A NUMBER KEY ";
		   console.log("number key ");}
	
		

		if (( keyPressed >= 37 && keyPressed <=40 ))
	{ img_image = "Arrkey.png";
	add();
		document.getElementById("d1").innerHTML="YOU PRESSED AN ARROW KEY ";
   console.log(" arrow key ");}

  //if (( keyPressed >= 17 && keyPressed <=18) || (keyPressed = 27) ){
//	img_image = "spkey.png";
//add();
	//document.getElementById("d1").innerHTML="YOU PRESSED A SPECIAL KEY ";
//console.log(" special key ");
//}
}


function alphabetkey()
{ img_image ="Alpkey.png";
add(); 
}



