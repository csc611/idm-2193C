/*
console.log("the Message!!");
console.log("yay!")

let theYear = ["Jan", "Feb", "March", "April"];

for (var i=0; i < theYear.length; i++){
  console.log(theYear[i]);
}

theYear.push("may");
console.log(theYear);


document.addEventListener('keydown', theEvent => {
  if (theEvent.keyCode === 32) {
    console.log('key 32!!');
  }
})

*/

const theBody = document.querySelector('body');
console.log(theBody);
console.log(theBody.style);
let theText = document.querySelector('h2');
console.log(theText.textContent);


var redClicked = false;
var yellowClicked = false;
var blueClicked = false;

// RED BUTTON ---------------------------------------
let theRedButton = document.querySelector("#red");

theRedButton.addEventListener('click', redClick);

function redClick(){
  //console.log("click!")
  redClicked = true;
  theBody.style.backgroundColor= "red";
  theText.textContent = "this is red!";
}

// YELLOW --------------------------------------------
let theYellowButton = document.querySelector("#yellow");

theYellowButton.addEventListener('click', yellowClick);

function yellowClick(){
  //console.log("click!")
  yellowClicked = true;
  theBody.style.backgroundColor= "yellow";
  theText.textContent = "this is yellow!";
}

// BLUE ----------------------------------------------
let theBlueButton = document.querySelector("#blue");

theBlueButton.addEventListener('click', blueClick);

function blueClick(){
  //console.log("click!")
  blueClicked = true;
  theBody.style.backgroundColor= "blue";
  theText.textContent = "this is blue!";
}

// MIXING ----------------------------------------------

if (redClicked && yellowClicked === true){
  theBody.style.backgroundColor = "orange";
  redClicked = false;
  yellowClicked = false;
  theText.textContent = "red and yellow make orange!";
  console.log("orange")
}

if ((redClicked && blueClicked) === true){
  theBody.style.backgroundColor = "purple";
  redClicked = false;
  blueClicked = false;
  theText.textContent = "red and blue make purple!";
  console.log("purple")
}

if ((yellowClicked && blueClicked) === true){
  theBody.style.backgroundColor = "green";
  yellowClicked = false;
  blueClicked = false;
  theText.textContent = "yellow and blue make green!";
  console.log("green")
}