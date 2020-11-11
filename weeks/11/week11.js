// intro
console.log("These are key milestones for the different types of mediums over the years!");

//press any key from 1-4
console.log("Press any key from 1-4");

document.addEventListener('keydown', theEvent => {
  if (theEvent.keyCode === 49) {
    console.log("Speech");
  }
})

document.addEventListener('keydown', theEvent => {
  if (theEvent.keyCode === 50) {
    console.log("Writing");
  }
})

document.addEventListener('keydown', theEvent => {
  if (theEvent.keyCode === 51) {
    console.log("Printing");
  }
})

document.addEventListener('keydown', theEvent => {
  if (theEvent.keyCode === 52) {
    console.log("Electric Circuiting/Computers");
  }
})


//speech
let theSpeech = document.querySelector("#speech");
let theSpeechContent = document.querySelector('#speechc');

theSpeechContent.addEventListener('click', speechClick);

function speechClick(){
  theSpeechContent.textContent = "Before writing, we lived in an acoustic space. These were the times when there were a lot of orators who had to memorize long stories. Stories and journeys were accounted for word for word, as written text was not invented yet.";
}

//writing
let theWriting = document.querySelector("#writing");
let theWritingContent = document.querySelector('#writingc');

theWritingContent.addEventListener('click', writingClick);

function writingClick(){
  theWritingContent.textContent = "Writing gave architecture and towns; it brought roads and armies, bureaucracy. Writing allowed a place for ideas to be stored instead of constantly memorizing them. Writing increased the possbility for retaining and gaining knowledge.";
}

//printing
let thePrinting = document.querySelector("#printing");
let thePrintingContent = document.querySelector('#printingc');

thePrintingContent.addEventListener('click', printingClick);

function printingClick(){
  thePrintingContent.textContent = "first uniformly repeatable commodity - When printing was invented, more people were given the opportunity to learn and read and become scholars. Before printing, education was most likely reserved for those in the upper class. This means that printing expanded the circles of education and gave more people chances to conspire and share intellect. This paved the way for millions to contribute to human knowledge and scientific discovery.";
}

//computers
let theComputers = document.querySelector("#computers");
let theComputersContent = document.querySelector('#computersc');

theComputersContent.addEventListener('click', computersClick);

function computersClick(){
  theComputersContent.textContent = "Computers provide an ease of instant communication and instant knowledge sharing. Electric circuits and computers are a scientific breakthrough that truly contributed to the societal and technological boom in the late 1900s and early 200s. Computers truly 'forced us to move from the habit of data classification to the mode of pattern recognition.' We now have access to so much instantaneous data that there is no need to simply keep the information; we can also use this incoming and outcoming data to watch for trends or manipulate this data to create trends.";
}