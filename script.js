let playerSelection=prompt("Choose your weapon: Rock, Paper or Scissors.");
playerSelection=playerSelection.toLowerCase();
console.log(playerSelection);

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
console.log(computerSelection);

function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        return "It's tied.Nobody wins!"
    }
    else if (playerSelection==="rock" && computerSelection==="scissors"){
        return "You won, rock beats scissors!"
    }
    else if (playerSelection==="scissors" && computerSelection==="paper"){
        return "You won, scissors beats paper!"
    }
    else if (playerSelection==="paper" && computerSelection==="rock"){
        return "You won, paper beats rock!"
    }
    else if (playerSelection==="scissors" && computerSelection==="rock"){
        return "You loose, rock beats scissors!"
    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
        return "You loose, scissors beats paper!"
    }
    else if (playerSelection==="rock" && computerSelection==="paper"){
        return "You loose, paper beats rock!"
    }
}
console.log(playRound(playerSelection, computerSelection));