var colors = generateRandomColors(6);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

const harBtnSel = hardBtn.classList.add("selected");

harBtnSel;

easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  colors = generateRandomColors(3);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function() {
  /*generate all new colors*/
  colors = generateRandomColors(6);
  /*pick a new random color from array*/
  pickedColor = pickColor();
  /*change colorDisplay to match picked Color*/
  colorDisplay.textContent = pickedColor;
  /*change colors of squares*/
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
});
/*Picked Color rgb Displayed*/

colorDisplay.textContent = pickedColor;

/*loop through the squares*/
for (var i = 0; i < squares.length; i++) {
  /*add initial colors to squares*/
  squares[i].style.backgroundColor = colors[i];

  /*add click listener to squares*/
  squares[i].addEventListener("click", function() {
    var clickedSquare = this.style.backgroundColor;

    /*compare color to pickedColor*/
    if (clickedSquare == pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedSquare);
      h1.style.backgroundColor = clickedSquare;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  });
}
/*loop through all squares*/
function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    /*change each color to match given color*/
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num) {
  /*make an array*/
  var arr = [];
  /*add num random colors to array*/
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
    /*get random color and push into arr*/
  }
  return arr;
}

function randomColor() {
  /*pick a "red" from 0 - 255*/
  var r = Math.floor(Math.random() * 256);
  /*pick a "red" from 0 - 255*/
  var g = Math.floor(Math.random() * 256);
  /*pick a "red" from 0 - 255*/
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
