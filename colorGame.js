var numOfSquares = 6;
var colors = [];
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	// mode button event listeners
	for (var i = 0; i< modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			// figure out how many squares to show
			this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6
			// reset game 
			reset()
		})
	}
	// initialize squares and event listeners
	for (var i=0; i< squares.length; i++){
		squares[i].style.backgroundColor = colors[i] 
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;

			if (clickedColor === pickedColor) {
				h1.style.backgroundColor = pickedColor;
				messageDisplay.textContent = "Correct";
				changeColors(pickedColor);
				resetButton.textContent = "Play Again?"
			} else {
				this.style.backgroundColor = "#232323"
				messageDisplay.textContent = 'Try Again'
			}
		})
	}
	reset();
}


resetButton.addEventListener("click", function(){
	reset();
})

function reset (){
		colors = generateRandomColors(numOfSquares);
		// pick a new random color 
		pickedColor = pickColor();
		// Display rbg in the header
		colorDisplay.textContent = pickedColor
		// set h1 background color to steelblue
		h1.style.backgroundColor = "steelblue"
		// clear message in middle
		messageDisplay.textContent = "";
		// change reset button text to "New Colors"
		resetButton.textContent = "New Colors"
		// render each square color from color array
		for (var i=0; i< squares.length; i++){
			if(colors[i]){
				squares[i].style.display = "block"
				squares[i].style.backgroundColor = colors[i];
			} else {
				squares[i].style.display = "none";
			}
		}
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