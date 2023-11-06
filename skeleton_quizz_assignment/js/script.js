window.onload = init;

// global variables
let currentQuestion = 0;
let scoreGlobal = 0;

let tableauQuestions = [ 
    {
    question: "Qui est le créateur de la saga Star Wars ?",
    answers: ["Georges Lucas", "Steven SPielberg", "Stanley Kubrick"],
    correctAnswer: 0,
    image: "https://deadline.com/wp-content/uploads/2023/10/star-wars.jpg",
    largeurImage: "500px",
    score:1,
    type: 'singleChoice'
    },
    {
    question: "Qui est l' auteur de Harry Potter ?",
    answers: ["Maurice Leblanc", "Agatha Christie", "JK Rowling"],
    correctAnswer: 2,
    image: "https://focus.telerama.fr/2023/10/06/315/96/3425/2283/1200/0/60/0/08bfac5_1696606856674-harry-potter-et-l-ordre-du-phenix-2007-94.jpg",
    largeurImage: "500px",
    score:1,
    type: 'singleChoice'
    }
];

function init() {
    console.log("Page is ready, elements displayed, and resources that can take time ready too (videos)")
    const startButton = document.querySelector('#startQuizz');
    startButton.onclick = startQuizz;
}

function startQuizz() {
    console.log("startQuizz");

    currentQuestion = 0;
    
    displayQuestion(currentQuestion);
}

function displayQuestion(currentQuestion) {
    // TODO : check the type of question....

    // we assume all questions are "simpleChoice"

    
    // we get the div that will be used to display the question
    let questionDiv = document.querySelector('#questionDiv');
    // We clear the div
    questionDiv.innerHTML = "";

    // we display the image
    // TODO !

    // we display the title of the question
    let questionTitle = document.createElement('h2');
    questionTitle.innerHTML = tableauQuestions[currentQuestion].question;
    questionDiv.append(questionTitle);

    // add a button for each possible answer
    let answerDiv = document.createElement('div');
    answerDiv.id = "answerDiv";
    // and we add this div to the question div
    questionDiv.append(answerDiv);
    
    answerDiv.innerHTML = "";
    for (let i = 0; i < tableauQuestions[currentQuestion].answers.length; i++) {
        let answerButton = document.createElement('button');
        answerButton.id = i;
        // on ajoute la classe CSS answerButton
        answerButton.classList.add("answerButton");

        answerButton.innerHTML = tableauQuestions[currentQuestion].answers[i];
        // we get the div for the answer buttons
        answerDiv.append(answerButton);

        answerButton.onclick = (evt) => {
            // we get the button that was clicked
            let button = evt.target;
            // its id is the index of the answer in the array

            // check if this was the right answer
            if(tableauQuestions[currentQuestion].correctAnswer === parseInt(button.id)) {
                scoreGlobal++;
                // change the display of the score on screen
                let scoreDiv = document.querySelector('#divScore');
                scoreDiv.innerHTML = "Score : " + scoreGlobal;
            }

            // on passe à la question suivante
            currentQuestion++;
            
            // check if we have another question to display
            if(currentQuestion < tableauQuestions.length) {
                displayQuestion(currentQuestion);
            } else {
                // we have finished the quizz
                gameOver();
            }
        };
    } 
}

function gameOver() {
    // we get the div that will be used to display the question
    let questionDiv = document.querySelector('#questionDiv');
    // We clear the div
    questionDiv.innerHTML = "";

    questionDiv.innerHTML = "Game Over ! Final Score is : " + scoreGlobal;
}