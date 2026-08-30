function getRandomInt(){
   return Math.floor(Math.random() * 3 + 1); 
}

let randomNumber = getRandomInt();

function getComputerChoice(){
    switch(randomNumber){
        case 1: 
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        default:
            return "scissors"; 
    }
}

console.log(getComputerChoice());

function getHumanChoice(){
    return prompt("What do you choose?")
}

console.log(getHumanChoice());
