function getPlayerChoice(){
    let option=prompt("Choose your weapon: Rock, Paper or Scissors.");
    option=option.toLowerCase();
    return option;
}

let playerSelection=getPlayerChoice();
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

let yourScore=0;
let computerScore=0;
let count=0;

function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        count+=1;
        yourScore+=1;
        computerScore+=1;
        return "It is tied.Nobody wins!"
    }
    else if (playerSelection==="rock" && computerSelection==="scissors"){
        yourScore+=1;
        count+=1;
        return "You won, rock beats scissors!"
    }
    else if (playerSelection==="scissors" && computerSelection==="paper"){
        yourScore+=1;
        count+=1;
        return "You won, scissors beats paper!"
    }
    else if (playerSelection==="paper" && computerSelection==="rock"){
        yourScore+=1;
        count+=1;
        return "You won, paper beats rock!"
    }
    else if (playerSelection==="scissors" && computerSelection==="rock"){
        computerScore+=1;
        count+=1;
        return "You loose, rock beats scissors!"
    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
        computerScore+=1;
        count+=1;
        return "You loose, scissors beats paper!"
    }
    else if (playerSelection==="rock" && computerSelection==="paper"){
        computerScore+=1;
        count+=1;
        return "You loose, paper beats rock!"
    }
}

