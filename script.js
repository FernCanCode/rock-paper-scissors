//console.log("Hello World");

//global variables
let humanScore=0;
let computerScore=0;
const WINNING_SCORE = 5;
let humanChoice = null;
let computerChoice = null;
const player1Txt = document.querySelector("#player1Score");
const player2Txt = document.querySelector("#player2Score");
const winnerTxt = document.querySelector("winnerTxt");

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

function playRound(humanChoice, computerChoice){
    if(humanChoice === 'rock' && computerChoice === 'scissors'){
        winnerText.textContent="You win! Rock beats Scissors.";
        humanScore++;
    }
    if(humanChoice === 'rock' && computerChoice === 'paper'){
        winnerText.textContent="You lose! Paper beats Rock.";
        computerScore++;
    }
    if(humanChoice === 'rock' && computerChoice === 'rock'){
        winnerText.textContent="You tied!.";
    }
    if(humanChoice === 'paper' && computerChoice === 'rock'){
        winnerText.textContent="You win! Paper beats Rock.";
        humanScore++;
    }
    if(humanChoice === 'paper' && computerChoice === 'scissors'){
        winnerText.textContent="You lose! Scissors beats Paper.";
        computerScore++;
    }
    if(humanChoice === 'paper' && computerChoice === 'paper'){
        winnerText.textContent="You tied!.";
    }
    if(humanChoice === 'scissors' && computerChoice === 'paper'){
        winnerText.textContent="You win! Scissors beats Paper.";
        humanScore++;
    }
    if(humanChoice === 'scissors' && computerChoice === 'rock'){
        winnerText.textContent="You lose! Rock beats Scissors.";
        computerScore++;
    }
    if(humanChoice === 'scissors' && computerChoice === 'scissors'){
        winnerText.textContent="You tied!.";
    }
}
window.addEventListener("DOMContentLoaded", function() {
    const rockButton = document.querySelector("#rockButton");
    const paperButton = document.querySelector("#paperButton");
    const scissorsButton = document.querySelector("#scissorsButton");
    const main = document.querySelector("#main");
    const scoreTxt = document.querySelector("#score");
    player1Txt.textContent = "0";
    player2Txt.textContent = "0";
});


function updateScore(score, element){
    element.textContent = score;
}





main.addEventListener('click', function(event){
    const targetElementId = event.target.id;
    // alert(targetElementId);
    switch(targetElementId){
        case 'rockButton' :
            // alert("rock pressed");
            computerChoice = getComputerChoice();
            humanChoice = 'rock';
            playRound(humanChoice, computerChoice);
            updateScore(humanScore, player1Txt);
            updateScore(computerScore, player2Txt);
            if(humanScore == WINNING_SCORE){
                winnerText.textContent="Player 1 wins!";
            }
            if(computerScore == WINNING_SCORE){
                winnerText.textContent="Computer wins!";
            }
            break;
        case 'paperButton' :
            // alert("paper pressed");
            humanChoice = 'paper';
            computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
            updateScore(humanScore, player1Txt);
            updateScore(computerScore, player2Txt);
            if(humanScore == WINNING_SCORE){
                winnerText.textContent="Player 1 wins!";
            }
            if(computerScore == WINNING_SCORE){
                winnerText.textContent="Computer wins!";
            }
            break;
        case 'scissorsButton' :
            // alert("scissors pressed");
            humanChoice = 'scissors';
            computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
            updateScore(humanScore, player1Txt);
            updateScore(computerScore, player2Txt);
            if(humanScore == WINNING_SCORE){
                winnerText.textContent="Player 1 wins!";
            }
            if(computerScore == WINNING_SCORE){
                winnerText.textContent="Computer wins!";
            }
            break;
        default :
            break;
    }
});
