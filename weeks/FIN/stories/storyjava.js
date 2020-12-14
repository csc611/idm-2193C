//click on the button for the info! :D

function lionAndMouse() {
  var x = document.getElementById("info1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function baldAndFly() {
  var x = document.getElementById("info2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function sunAndWind() {
  var x = document.getElementById("info3");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// SECRET PART FOR THE PARENTS TO CHECK MOTTO BEFOREHAND (if they know how to use the inspect tool/console log) - Press a key from 1-3 to see the motto (corresponding to each story)

console.log("Press any key from 1-3 to see the motto for the corresponding story.");

document.addEventListener('keydown', theEvent => {
  if (theEvent.keyCode === 49) {
    console.log("We should help each other, whoever it be, no matter the size.");
  }
})

document.addEventListener('keydown', theEvent => {
  if (theEvent.keyCode === 50) {
    console.log("You only get hurt when you give your enemies more attention.");
  }
})

document.addEventListener('keydown', theEvent => {
  if (theEvent.keyCode === 51) {
    console.log("Kindness has more effects than harshness.");
  }
})