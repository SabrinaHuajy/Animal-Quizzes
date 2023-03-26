function translate_heading() {
  const head = document.getElementById("Translate");
  let h1 = head.innerHTML;
  let h2 = h1.match("FACT");

  if (h2 == "FACT") {
    head.innerHTML = "<a onmouseover='translate_heading()'>动物小知识</a>";
  } else {
    head.innerHTML = "<a onmouseout='translate_heading()'>ANIMAL FACTS</a>";
  }
}

function translate_subheading() {
  const head = document.getElementById("Translatesubheading");
  let h1 = head.innerHTML;
  let h2 = h1.match("Pig");

  if (h2 == "Pig") {
    head.innerHTML = "<a onmouseover='translate_subheading()'>荷兰猪小知识</a>";
  } else {
    head.innerHTML = "<a onmouseout='translate_subheading()'>Your Guinea Pig Pal</a>";
  }
}

function show_hide() {
  if (document.getElementById("appear").style.display == 'none') {
    document.getElementById("appear").style.display = 'block';
  } else {
    document.getElementById("appear").style.display = 'none';
  }
}



function finishFunction() {
  alert("Thank you for completing the quiz.");
}

/*
//Save the element with the id "heading" to the "headingElement" variable:
var headingElement = document.getElementById("heading");
//Prompt dialog box for the user to enter a new heading
var newheading = prompt("Please enter new heading:");
//Set the "innerHTML" property of "headingElement" to the new heading that the user entered
headingElement.innerHTML = newheading;


//Save the element with the id "welcome" to the "welcomeElement" variable:
var welcomeElement = document.getElementById("welcome");
//Prompt dialog box for the user to enter their name
var yourName = prompt("Please enter your name:");
//Set the "innerHTML" property of "welcomeElement" to 'Welcome' and the name that the user entered
welcomeElement.innerHTML = "Welcome " + yourName;
*/

function rndm_colour() {
  var letters = '0123456789ABCDEF';
  //console.log(letters);
  var colour = '#';
  //console.log(colour);
  for (var i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
  }
  return colour
}

function change_heading() {
  colour = rndm_colour();
  document.getElementById("heading").style.color = colour;

}

function show_hide() {
  if (document.getElementById("appear").style.display == 'none') {
    document.getElementById("appear").style.display = 'block';
  } else {
    document.getElementById("appear").style.display = 'none';
  }
}

function say_hello() {
  var name = document.getElementById("shortName").value;
  document.getElementById("Welcome").innerHTML = "<h2>Welcome " + name + "</h2>";
  if (name.length < 1) {
    document.getElementById("Welcome").innerHTML = "";
  }
}

function validateText() {
  //store the values from the form text fields into named variable
  var fullName = document.forms.Quiz.fullName.value;
  var shortName = document.forms.Quiz.shortName.value;
  //if either variable contains an empty string show an alert in the browser:
  if (fullName === "") {
    alert("Full name must be filled out");
    return false;
  } else if (shortName === "") {
    alert("What shall we call you must be filled out");
    return false;
  }
  else {
    return true;
  }
}

function validateRadio() {
  // Check a value is present for the groups of radio buttons:
  var radioQ1 = document.forms.Quiz.elements.GPQ1.value;
  var radioQ2 = document.forms.Quiz.elements.GPQ2.value;
  //if there is no value present an alert will appear in the browser:
  if (radioQ1 === "") {
    alert("One answer button must be selected for Question 1");
    return false;
  }
  else if (radioQ2 === "") {
    alert("One answer button must be selected for Question 2");
    return false;
  }
  else {
    return true;
  }
}


function validateNumber() {
  var numQ3;
  var numQ4;
  numQ3 = document.getElementById("GPQ3").value;
  numQ4 = document.getElementById("GPQ4").value;
  // If Q3 value is equal to zero show an alert
  if (numQ3 == 0) {
    alert("You must enter a number above 0 for Question 3");
    return false;
  }
  else if (numQ4 == 0) {
    alert("You must enter a number above 0 for Question 4");
    return false;
  }
  else {
    return true;
  }
}

function validateQuestions() {
  //if any of the validation functions return `false` indicate the data is not valid.
  if (validateText() && validateRadio() && validateNumber()) {
    return true;
  } else {
    return false;
  }
}

function checkAnswers() {
  //assign 0 to the score variable
  var score = 0
  //assign the quiz elements to the quiz variable:
  quiz = document.forms.Quiz.elements;
  //assign the answer to the question to variables and check:
  answerQ1 = quiz.GPQ1.value;
  // Check the answer to the first question:
  if (answerQ1 == "Q1Answer1") {
    //Add 1 to the score if the user was correct
    score = score + 1;
  }

  answerQ2 = quiz.GPQ2.value;
  if (answerQ2 == "Q2Answer2") {
    //Add 1 to the score if the user was correct
    score = score + 1;
  }
  answerQ3 = quiz.GPQ3.value;
  if (answerQ3 == "4") {
    //Add 1 to the score if the user was correct
    score = score + 1;
  }
  answerQ4 = quiz.GPQ4.value;
  if (answerQ4 == "3000") {
    //Add 1 to the score if the user was correct
    score = score + 1;
  }

  //return the score value as part of an alert in the browser
  //alert("Your score is " + score);
  showFeedback(score);
}



function showFeedback(score) {
  //assign the area of the form to the feedback variable. getElementsByTagName will return a list so [0] is used to access the first (and only) element.
  feedback = document.getElementsByTagName("form")[0]
  //replace the HTML content inside the form tag with a heading displaying the score
  if (score === 0) {
    feedback.innerHTML = '<h2>Sorry, your score was... 0 </h2>';
  } else if (score < 4) {
    feedback.innerHTML = '<h2>Getting there, your score was... ' + score + '</h2>';
  } else {
    feedback.innerHTML = '<h2>Well done, full marks! Your score was... ' + score + '</h2>';
  }
}


function quizCheck() {
  if (validateQuestions()) {
    alert("Thank you for completing the quiz.");
    checkAnswers()
  }
  else
    alert("Please complete incomplete entries");

}


function finishFunction() {
  alert("Thank you for completing the quiz.");
}
