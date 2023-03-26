
var totalScore = 0;


// Process Q1


function checkQ1() {
  // Initialise variables
  thisQuestionScore = 0;
  var radioQ1 = document.forms.lemur1.elements.LemurQ1.value;

  // check if the Q has already been answered
  if (document.getElementById("panelQ1").style.display == 'block') {
    // Answer Panel has already been displayed
    alert("You've already answered this question");

    // Q1 hasn't been answered. Is there an answer to mark?
  } else if (radioQ1 === "") {
    // No radio button has been selected. Display alert
    alert("Have a guess! Choose an answer");

  } else {
    // Q1 answered - Display the Answer Panel
    document.getElementById("panelQ1").style.display = 'block';
    //  Mark answer  
    if (radioQ1 == "Q1Answer4") {
      //Right answer. Update scores and display them
      thisQuestionScore = 1;
      totalScore = totalScore + thisQuestionScore;
      alert("Right answer! You've scored " + thisQuestionScore + ", bringing your total so far to " + totalScore);

    } else {
      // Wrong Answer
      alert("Almost right! You've scored " + thisQuestionScore + " and your total is " + totalScore);
    }
  }
}

// Process Q2


function checkQ2() {
  // Initialise variables
  thisQuestionScore = 0;
  var checkboxes = document.getElementsByName("LemurQ2");

  // check if the Q has already been answered
  if (document.getElementById("panelQ2").style.display == 'block') {
    // Answer Panel has already been displayed
    alert("You've already answered this question");


  } else {
    // Q1 hasn't been answered before. Is there an answer to mark now?
    // Count the ticks

    for (var i = 0; i < checkboxes.length; i++)

      if (checkboxes[i].checked)
        thisQuestionScore++;

    if (thisQuestionScore === 0) {
      alert("You've not ticked any of the options. Try again!");
    } else {

      // Q2 answered - Display the Answer Panel

      document.getElementById("panelQ2").style.display = 'block';

      // If 'none of the these' was ticked, then score zero
      i = i - 1
      if (checkboxes[i].checked) {
        thisQuestionScore = 0;
        alert("'None of these' scores " + thisQuestionScore + ", leaving your total = " + totalScore);
      } else {
        totalScore = totalScore + thisQuestionScore;
        alert("You've scored " + thisQuestionScore + ", bringing your total to " + totalScore);
      }
    }
  }
}


// Process Q3


function checkQ3() {
  // Initialise variables
  thisQuestionScore = 0;
  var checkboxes = document.getElementsByName("LemurQ3");

  // check if the Q has already been answered
  if (document.getElementById("panelQ3").style.display == 'block') {
    // Answer Panel has already been displayed
    alert("You've already answered this question");


  } else {
    // Q3 hasn't been answered before. Is there an answer to mark now?
    // Count the ticks

    for (var i = 0; i < checkboxes.length; i++)

      if (checkboxes[i].checked)
        thisQuestionScore++;

    if (thisQuestionScore === 0) {
      alert("You've not ticked any of the options. Try again!");
    } else {

      // Q3 answered - Display the Answer Panel

      document.getElementById("panelQ3").style.display = 'block';

      // and validate the answers
      // Check for 'gaming' the quiz
      if (thisQuestionScore === 6) {
        alert("You've simply ticked all the options. For trying to game the quiz, score 0. Total stays at " + totalScore);

      } else {

        // valid answer - score points for i=2 and i-5 
        thisQuestionScore = 0;
        if (checkboxes[2].checked)
          thisQuestionScore = thisQuestionScore + 1;
        if (checkboxes[5].checked)
          thisQuestionScore = thisQuestionScore + 1;

        totalScore = totalScore + thisQuestionScore;
        alert("You've scored " + thisQuestionScore + ", bringing your total to " + totalScore);
      }
    }
  }
}


// Process Q4


function checkQ4() {
  // Initialise variables
  var radioQ4 = document.forms.lemur4.elements.LemurQ4.value;

  // check if the Q has already been answered
  if (document.getElementById("panelQ4").style.display == 'block') {
    // Answer Panel has already been displayed
    alert("You've already answered this question");

    // Q1 hasn't been answered. Is there an answer to mark?
  } else if (radioQ4 === "") {
    // No radio button has been selected. Display alert
    alert("Choose an answer that's nearest the truth");

  } else {
    // Q1 answered - Display the Answer Panel
    document.getElementById("panelQ4").style.display = 'block';
    //  Mark answer  
    if (radioQ4 == "Q4Answer5") {
      //Probably BS! Score nothing
      thisQuestionScore = 0;
      totalScore = totalScore + thisQuestionScore;
      alert("Nothing scored for what may be a fib! You've scored " + thisQuestionScore + ", bringing your total score to " + totalScore + " out of a possible 13");

    } else {
      // Any other answer
      thisQuestionScore = 2;
      totalScore = totalScore + thisQuestionScore;
      alert("Double points for admitting that you pick your nose! You've scored " + thisQuestionScore + " bringing your total score to " + totalScore + " out of a possible 13");
    }
  }
}

// Process Q5
function checkQ5() {
  var name = document.getElementById("lemurNameQ5").value;
  var field = document.getElementById("lemurNameQ5");
  if (name.length < 1) {
    // No name to process
    alert("Suggest a new name!");
    // Nothing to change

    // change suggestions 
  } else {
    document.getElementById("addName").innerHTML = '<div id="addName"><p> Suggestions include ' + name + ', Yoda, Gollum, and Dobby.</p></div>';
    // and reset the input field
    field.value = "";
  }
}




