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

function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        return "It is tied.Nobody wins!"
    }
    else if (playerSelection==="rock" && computerSelection==="scissors"){
        return "You win, rock beats scissors!"
    }
    else if (playerSelection==="scissors" && computerSelection==="paper"){
        return "You win, scissors beats paper!"
    }
    else if (playerSelection==="paper" && computerSelection==="rock"){
        return "You win, paper beats rock!"
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

function game(){
    for (let i=0; i<5; i++){
        let playerSelection=prompt("Choose your weapon: Rock, Paper or Scissors.")
        console.log(playerSelection);
        let computerSelection=getComputerChoice();
        console.log(computerSelection);
        console.log(playRound(playerSelection,computerSelection));
    }
}
game()
