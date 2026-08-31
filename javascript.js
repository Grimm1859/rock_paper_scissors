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

function getHumanChoice(){
    humanChoice = prompt("What do you choose?")
}

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
    getHumanChoice();
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

roundStart();

function nextRound(){
    console.log("Current score is: You: " + humanScore + " Computer: " + computerScore)
    if(humanScore == 5){
        console.log("You've won the game. Congrats!")
    } else if (computerScore == 5){
        console.log("You've lost the game. Try again?")
    } else {
        roundStart();
    }
}