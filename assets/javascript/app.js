var answer, random, total;
var timeLimit = 15;
var time = timeLimit;
var correct = 0;
var wrong = 0;
canClick = false;

function askQuestion(){
	random = Math.floor(Math.random()*questionBank.length);
	$('#ask-question').html(questionBank[random].question);
	$('#answer-a').html(questionBank[random].A);
	$('#answer-b').html(questionBank[random].B);
	$('#answer-c').html(questionBank[random].C);
	$('#answer-d').html(questionBank[random].D);
	$('.btn-success').removeClass("btn-success");
	$('.btn-danger').removeClass("btn-danger");
	canClick = true;
	time = timeLimit;
	$('#timer').html(time);


}
function startTimer(){
    timer = setInterval(count, 1000)
}
function stopTimer(){
    clearInterval(timer)
    time = timeLimit;
    $('#timer').html(time);
}

function count(){
    time--;
    $('#timer').html(time);
    if (time == 0) {
    	$('#answer-' + (questionBank[random].answer).toLowerCase() ).addClass("btn-success");
    	setTimeout(askQuestion, 5000);
    	wrong++;
    	total++;
    	$('#wrong-count').html(wrong);
    	$('#total-count').html(total);
    }
    
}
function restart(){
	correct = 0;
	wrong = 0;
	total = 0;
	canClick = false;
	$('#correct-count').html(correct);
	$('#wrong-count').html(wrong);
	$('#total-count').html(total);
	askQuestion();
	startTimer();
}


restart();

$('#new-game').click(restart);


$('.answer-btn').click(function(){
answer = this.value;
if (canClick == true) {
	if (answer == questionBank[random].answer) {
	$(this).addClass("btn-success");
	correct++;
	setTimeout(askQuestion, 2000);
	$('#correct-count').html(correct);
	} else { 
		// $(this).addClass("btn-success");
		$(this).addClass("btn-danger");
		$('#answer-' + (questionBank[random].answer).toLowerCase() ).addClass("btn-success");
		wrong++;
		$('#wrong-count').html(wrong);
		setTimeout(askQuestion, 5000);
	}
	total = wrong + correct;
	$('#total-count').html(total);
}
canClick = false;
});





