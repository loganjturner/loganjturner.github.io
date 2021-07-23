/**
CODE ADAPTED FROM 'Simple JavaScript Quiz' BY HARRY SADLER
https://codepen.io/harrysadlermusic/pen/DihjK
*/

function submitQuiz() {

	// get each answer score
	function answerScore (qName) {
		var radiosNo = document.getElementsByName(qName);

		for (var i = 0, length = radiosNo.length; i < length; i++) {
			if (radiosNo[i].checked) {
				// do something with radiosNo
				var answerValue = Number(radiosNo[i].value);
			}
		}
		
		// NaN - user doesn't answer a question
		if (isNaN(answerValue)) {
			answerValue = 0;
			// window.alert("You left an answer blank!");
		}

		return answerValue;
	}

	// calc score with answerScore function
	var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5') + answerScore('q6') + answerScore('q7'));


	// function to return correct answer string
	function correctAnswer (qNumber) {
		return ("Check your answer for Q" + qNumber + "!");
	}

	// print correct answers only if wrong (calls correctAnswer function)
	if (answerScore('q1') == 0) {
		document.getElementById('correctAnswer1').innerHTML = correctAnswer(1);
	}
	if (answerScore('q2') == 0) {
		document.getElementById('correctAnswer2').innerHTML = correctAnswer(2);
	}
	if (answerScore('q3') == 0) {
		document.getElementById('correctAnswer3').innerHTML = correctAnswer(3);
	}
	if (answerScore('q4') == 0) {
		document.getElementById('correctAnswer4').innerHTML = correctAnswer(4);
	}	
	if (answerScore('q5') == 0) {
		document.getElementById('correctAnswer5').innerHTML = correctAnswer(5);
	}
	if (answerScore('q6') == 0) {
		document.getElementById('correctAnswer6').innerHTML = correctAnswer(6);
	}
	if (answerScore('q7') == 0) {
		document.getElementById('correctAnswer7').innerHTML = correctAnswer(7);
	}

	// calculate "possible score" integer
	var numQuestions = document.getElementsByClassName('question');
	var questionCounter = 0;
	var length = numQuestions.length;
	
	for (var i = 0; i < length; i++) {
		questionCounter++;
	}

	// show score as "score/possible score"
	var showScore = "You scored: " + calcScore + "/" + questionCounter;
	
	// if all were correct
	if (calcScore == questionCounter) {
		showScore += "<br /><strong>Outstanding!</strong>"
	};
	document.getElementById('userScore').innerHTML = showScore;
	document.getElementById('retry').innerHTML = "Refresh the page to try again!";
}

$(document).ready(function() {

	$('#submitButton').click(function() {
		$(this).addClass('hide');
	});

});