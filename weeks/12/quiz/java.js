const questions = [
  {
    "question": "You're in a group project, which type of person are you?",
    "answer1": "The one that opens the google doc 1 hour before its due ",
    "answer1Total": "1",
    "answer2": "The one that does the whole project by themselves",
    "answer2Total": "3",
    "answer3": "The one that brings others together",
    "answer3Total": "4",
    "answer4": "The one that does their part on time and well done",
    "answer4Total": "2",
  },
  {
    "question": "What is your biggest pet peeve?",
    "answer1": "When one of my friends loses one of my things I let her borrow",
    "answer1Total": "2",
    "answer2": "When someone incompetent, and is not able to make any contributions to an interesting conversation",
    "answer2Total": "3",
    "answer3": "When someone is cocky, rude, and thinks they are better than everyone else",
    "answer3Total": "4",
    "answer4": "When someone is boring to be around with, they are just there and are not down to do the same activities as you",
    "answer4Total": "1"
  },
  {
    "question": "My ideal spring break vacation would be …",
    "answer1": "Go on a 3 day missionary trip to Ecuador to help those in need",
    "answer1Total": "4",
    "answer2": "Go to an extreme sports trips were I would bungee jump and hiking in dangerous spots ",
    "answer2Total": "1",
    "answer3": "Going to a three day learning course at your dream college about your favorite subject",
    "answer3Total": "3",
    "answer4": "Having a perfect schedule to be able to visit all of my favorite European cities and do all of the activities I want to do there",
    "answer4Total": "2"
  },
  {
    "question": "People like to be around me because … ",
    "answer1": "I have insightful thoughts.",
    "answer1Total": "3",
    "answer2": "I am fun to be around with",
    "answer2Total": "1",
    "answer3": "I am a good listener",
    "answer3Total": "4",
    "answer4": "People can rely on me",
    "answer4Total": "2"
  },
  {
    "question": "Your best friend from your hometown visits you in college. Where will you take her?",
    "answer1": "We will visit the 10 museums that are open in my city!",
    "answer1Total": "3",
    "answer2": "I will ask him/her what they would like to do.",
    "answer2Total": "4",
    "answer3": "I will take them to the big party this afternoon.",
    "answer3Total": "1",
    "answer4": "I already got tickets for a broadway show and made a reservation at her favorite restaurant.",
    "answer4Total": "2"
  },
  {
    "question":
      "What three adjectives best describe you?",
    "answer1":
      "Communicative, compassionate, sympathetic",
    "answer1Total": "4",
    "answer2": "Analytical, inventive, problem-solver",
    "answer2Total": "3",
    "answer3": "Dependable, organized, loyal",
    "answer3Total": "2",
    "answer4": "Witty, spontaneous, optimistic",
    "answer4Total": "1"
  },
  {
    "question": "Which motto resonates the most with you?",
    "answer1": "Find out what life’s purpose is ",
    "answer1Total": "3",
    "answer2": "Motivate people around you to be happy and more successful",
    "answer2Total": "4",
    "answer3": "Focus on the present and have a fun time",
    "answer3Total": "1",
    "answer4": "Make sure you prepare well in advance for your best future possible",
    "answer4Total": "2"
  },
  {
    "question": "I feel proud when …",
    "answer1": "I am appreciated for the task that I successfully completed",
    "answer1Total": "2",
    "answer2": "I help others finish a task",
    "answer2Total": "4",
    "answer3": "I can finish a task that was very hard to complete",
    "answer3Total": "1",
    "answer4": "I can figure out a technical problem and solve it",
    "answer4Total": "3"
  },
  {
    "question": "I feel that others care about me when they ...",
    "answer1": "Give me some alone time to wind down",
    "answer1Total": "3",
    "answer2": "Keep their promise to hang out with me and do not back down",
    "answer2Total": "2",
    "answer3": "Hang out with me and have a really fun time",
    "answer3Total": "1",
    "answer4": "Just spend some quality time with me doing whatever ",
    "answer4Total": "4"
  },
  {
    "question": "When I want to make a decision, I ...",
    "answer1": "Make the decision as soon as possible, with the first gut answer",
    "answer1Total": "1",
    "answer2": "I carefully consider the options numerous times to find the best possible solution, and then decide",
    "answer2Total": "3",
    "answer3": "I get very serious and make sure my decision was absolutely correct",
    "answer3Total": "2",
    "answer4": "My feelings lead my decision making and I make sure to consider how my decision might affect others around me",
    "answer4Total": "4"
  }
]


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.quiz-container');
const theQuestion = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
    //Populate html elements 
    theQuestion.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('You did not choose anything yet! Please select an answer before moving on!');
        return;
    }
    //Get value of selected answer
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the total score (array)
    score.push(answerScore);
    selectedAnswersData.push()
    
    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Increment the current question number
    currentQuestion++;

    //once finished clear the checked option
    selectedOption.checked = false;

    //If quiz is on the final question, change the button content to Results
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Results';
    }

    var myColor = "You are ..."
    
    //Once all the questions have been answered, hide the questions container and show the results container
    if(currentQuestion == totalQuestions) {
      //depending on which questions were picked, the total score leads to a different color personality type.

      //mostly orange type answers
      if(totalScore >= 10 && totalScore <= 19) {
        myColor = "You are Orange!";
      }
  
      //mostly gold type answers
      if(totalScore >= 20 && totalScore <= 26) {
        myColor = "You are Gold!";
      }

      //mostly green type answers
      if(totalScore >= 27 && totalScore <= 33) {
        myColor = "You are Green!";
      }
  
      //mostly blue type answers
      if(totalScore >= 34 && totalScore <= 40) {
        myColor = "You are Blue!";
      }
        //hide the quiz container
        container.style.display = 'none';
        //show the result as a flex, not hidden anymore
        result.style.display = 'flex';
        result.innerHTML =
         `
          <h1 class="final-score">${myColor}</h1>
          <button class="restart">Restart Quiz</button>
          <a href= "personality/color_psych.html"><button class="restart">Color Psychology List</button</a>
         `;
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.assign('./landing/front_page.html');
    }

}

generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);


// code source credit: https://codepen.io/edubz99/pen/PeRjNb