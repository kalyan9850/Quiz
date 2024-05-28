const questions =[
    {
        question:"Who is the owner of pathlogics technologies ?",
        answers:[
            {text:"Shailesh Sir",correct:false},
            {text:"Pratap Sir",correct:false},
            {text:"Avinash Sir",correct:true},
            {text:"Seema Madam",correct:false},

        ]
    },
    {
        question:"Who is the Trainer of pathlogics technologies ?",
        answers:[
            {text:"Shailesh Sir",correct:true},
            {text:"Pratap Sir",correct:false},
            {text:"Avinash Sir",correct:false},
            {text:"Seema Madam",correct:false},

        ]

    },
    {
        question:"Where is the  of pathlogics technologies ?",
        answers:[
            {text:"Hadapsar",correct:false},
            {text:"Viman Nagar",correct:false},
            {text:"Shivaji Nagar",correct:false},
            {text:"Baner",correct:true},

        ]
    },
    {
        question:" Which type of Institute pathlogics technologies ?",
        answers:[
            {text:"Institute of civil Services",correct:false},
            {text:"Institute of Science",correct:false},
            {text:"Institute of It services",correct:true},
            {text:"Institute of Law services",correct:false},

        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML = "Next";
    showquestion();

}

function showquestion()
{
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML =questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}


function selectAnswer(e){
    const selectedBtn=e.target;
    const iscorrect =selectedBtn.dataset.correct==="true";

    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;

    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true")
        {
            button.classList.add("correct");
            

        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display ="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showquestion();

    }
    else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();

    }
    else{
        startQuiz();
    }
});

startQuiz();
