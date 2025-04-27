//console.log("Hello World");



function getComputerChoice(){
    randomNum = Math.random();
    //console.log(randomNum);
    if(randomNum <= .33){
        return "rock";
    }
    else if(randomNum > .33 && randomNum <= .66){
        return "paper";
    }
    else{
        return "scissors";
    }

}

function getHumanChoice(){
    choice=prompt("Please enter 'rock', 'paper' or 'scissors'");
    //console.log(choice);
    choice = choice.toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    }
    if(humanChoice === 'rock' && computerChoice === 'paper'){
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    if(humanChoice === 'rock' && computerChoice === 'rock'){
        console.log("You tied!.");
    }
    if(humanChoice === 'paper' && computerChoice === 'rock'){
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }
    if(humanChoice === 'paper' && computerChoice === 'scissors'){
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    }
    if(humanChoice === 'paper' && computerChoice === 'paper'){
        console.log("You tied!.");
    }
    if(humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    }
    if(humanChoice === 'scissors' && computerChoice === 'rock'){
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }
    if(humanChoice === 'scissors' && computerChoice === 'scissors'){
        console.log("You tied!.");
    }
}

function playGame(){
    humanScore=0;
    computerScore=0;

    for(let i = 0; i < 5; i++){
        let computerChoice=getComputerChoice();
        let humanChoice=getHumanChoice();
        playRound(humanChoice, computerChoice);
    }

    if(humanScore > computerScore){
        console.log("You won the match!");
    }
    else if(humanScore < computerScore){
        console.log("You lost the match!");
    }
    else{
        console.log("You tied the match!");
    }
}
//console.log(getComputerChoice());
playGame();