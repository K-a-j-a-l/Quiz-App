var questions = [{
        question: 'What is the longest river in the world',
        options: ['The Nile', 'The Ganga', 'The Amazon', 'The Yangtze'],
        correctAnswer: 0
    },
    {
        question: ' What is the fastest land animal?',
        options: ['Lion', 'Leopard', 'Cheetah', 'Kangaroo'],
        correctAnswer: 2
    },
    {
        question: 'What famous ship sank in 1912?',
        options: ['Lenin', 'Victory', 'Titanic', 'Missouri'],
        correctAnswer: 2
    },
    {
        question: 'Which superhero swings on a web?',
        options: ['Batman', 'Superman', 'Ironman', 'Spiderman'],
        correctAnswer: 3
    }

]

var currenQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

window.addEventListener('DOMContentLoaded', function(e) {
    displayCurrentQuestion();
    var quizMsg = document.querySelector('.message');
    quizMsg.style.display = 'none';
    document.querySelector('.nextbtn').addEventListener('click', function() {
        if (!quizOver) {
            var radioBtnsChecked = document.querySelector('input[type=radio]:checked');
            if (radioBtnsChecked == null) {
                quizMsg.innerText = 'Please Select an answer';
                quizMsg.style.display = 'block';
            } else {
                console.log(radioBtnsChecked.value);
                quizMsg.style.display = 'none';
                if (parseInt(radioBtnsChecked.value) === questions[currenQuestion].correctAnswer) {
                    correctAnswers++;
                }
                currenQuestion++;
                if (currenQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    document.querySelector('.nextbtn').innerText = 'Play Again?';
                    document.querySelector('.nextbtn').style.background = 'green';
                    quizOver = true;
                }
            }

        } else {
            quizOver = false;
            document.querySelector('.nextbtn').innerText = 'Next Question';
            document.querySelector('.nextbtn').style.background = 'red';
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion() {
    var question = questions[currenQuestion].question;
    var questionClass = document.querySelector('.quiz-container > .question');
    var choiceList = document.querySelector('.quiz-container > .options');
    var numchoices = questions[currenQuestion].options.length;
    questionClass.innerText = question;
    choiceList.innerHTML = '';
    var choice;
    for (i = 0; i < numchoices; i++) {
        choice = questions[currenQuestion].options[i];
        var li = document.createElement('li');
        li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
        choiceList.appendChild(li);
    }
}

function resetQuiz() {
    currenQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function hideScore() {
    document.querySelector('.result').style.display = 'none';
}

function displayScore() {
    document.querySelector('.quiz-container > .result').innerText = 'You scored ' + correctAnswers + ' out of ' + questions.length;
    document.querySelector('.quiz-container > .result').style.display = 'block';
}