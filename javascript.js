
let computerNumber;
let computerChoice;
let humanChoice;
let humanNumber;
let roundNumber = 1;
let humanScore = 0;
let computerScore = 0;

function getComputerNumber(){
   computerNumber =  Math.floor(Math.random() * 3 + 1); 
}

function getComputerChoice(){
switch (computerNumber){
    case 1:
        computerChoice = "rock"
        break;
    case 2:
        computerChoice = "paper"
        break;
    case 3:
        computerChoice = "scissors"
        break;
}
}

const btn = document.querySelectorAll('.choices');

btn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        humanChoice = event.target.textContent.toLowerCase();
        roundStart();
})
})


const humanScoreContainer = document.querySelector('#humanScore');
const computerScoreContainer = document.querySelector('#computerScore');

function getHumanNumber(){
switch (humanChoice){
    case "rock":
        humanNumber = 1
        break;
    case "paper":
        humanNumber = 2
        break;
    case "scissors":
        humanNumber = 3
        break;
    default:
        console.log("Choice not valid!")
}
}

function roundStart(){
    getComputerNumber();
    getComputerChoice();
    getHumanNumber();
    console.log("Computer's choice is " + computerChoice + ", Your choice is " + humanChoice );
    if(humanNumber - computerNumber == 1 || humanNumber - computerNumber ==-2 ){
        console.log("You won this round!")
        humanScore = ++humanScore
    } else if ( humanNumber == computerNumber) {
        console.log("Tie!")
    } else {
        console.log("You lost this round!")
        computerScore = ++computerScore
    }
    nextRound();
}

let tryagain;

function nextRound(){
    humanScoreContainer.textContent = humanScore;
    computerScoreContainer.textContent = computerScore;
    if(humanScore == 5){
        alert("You've won the game. Congrats!");
        nextGame();
    } else if (computerScore == 5){
        tryagain = prompt("You've lost the game. Try again?");
        if(tryagain == "yes"){
        nextGame();
    }
    }
}

function nextGame(){
        humanScore = 0;
        computerScore = 0;
        humanScoreContainer.textContent = humanScore;
        computerScoreContainer.textContent = computerScore;
}