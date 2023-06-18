function getComputerChoice(){
    let randomly=Math.floor(Math.random()*3);
    switch (randomly) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
    }
}

let computerSelection=getComputerChoice();

let playerSelection=prompt("Choose your weapon: Rock, Paper or Scissors.");
playerSelection=playerSelection.toLowerCase();

let playerScore=0;
let computerScore=0;

function playRound(playerSelection,computerSelection){
    if (playerSelection==="rock" && computerSelection==="scissors"){
        playerScore++;
        return "You win, rock beats scissors!"
    }
    else if (playerSelection==="scissors" && computerSelection==="paper"){
        playerScore++;
        return "You win, scissors beats paper!"
    }
    else if (playerSelection==="paper" && computerSelection==="rock"){
        playerScore++;
        return "You win, paper beats rock!"
    }
    else if (playerSelection==="scissors" && computerSelection==="rock"){
        computerScore++;
        return "You loose, rock beats scissors!"
    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
        computerScore++;
        return "You loose, scissors beats paper!"
    }
    else if (playerSelection==="rock" && computerSelection==="paper"){
        computerScore++;
        return "You loose, paper beats rock!"
    }
    else if (playerSelection === computerSelection){
        playerScore++;
        computerScore++;
        return "It is tied.Nobody wins!"
    }
}

function game(){
    for (let i=0; i<5; i++){
        let playerSelection=prompt("Choose your weapon: Rock, Paper or Scissors.")
        console.log(playerSelection);
        let computerSelection=getComputerChoice();
        console.log(computerSelection);
        console.log(playRound(playerSelection,computerSelection));
    }

    if (playerScore>computerScore){
        return `Game over. Congratulations you beat the computer!\n Your score is ${playerScore}.\n Computer score is ${computerScore}.`
    }
    else if (playerScore<computerScore){ 
        return `Game over! Too bad, computer defeated you, better luck next time!\n Computer score is ${computerScore}.\n Your score is ${playerScore}.`
    }
    else {
        return `Game over! It is tied, nobody wins!\n Your score is ${playerScore}.\n Computer score is ${computerScore}.`
    }
}

console.log(game())
