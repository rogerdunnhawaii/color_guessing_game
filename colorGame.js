
var colors = generateRandomColors(6)

// [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)",
// ]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

colorDisplay.textContent=pickedColor;




for (var i=0; i< squares.length; i++){
	squares[i].style.backgroundColor = colors[i] 

	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;

		if (clickedColor === pickedColor) {
			h1.style.backgroundColor = pickedColor;
			messageDisplay.textContent = "Correct";
			changeColors(pickedColor);
		} else {
			this.style.backgroundColor = "#232323"
			messageDisplay.textContent = 'Try Again'
		}
	})
}

function changeColors (color) {
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length)
	return colors[random]
}

function generateRandomColors(num){
	// make an array
	var arr = []
	//add num random colors to array
	for(var i=0; i<num; i++){
		arr.push(randomColor())
	}
	return arr
}

function randomColor(){
	var r = Math.floor(Math.random()*256)
	var g = Math.floor(Math.random()*256)
	var b = Math.floor(Math.random()*256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}