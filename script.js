const rockButton=document.querySelector(".rock");
const paperButton=document.querySelector(".paper");
const scissorsButton=document.querySelector(".scissors");
const result=document.querySelector(".result");
const playerScoreSpan=document.querySelector(".player-score");
const computerScoreSpan=document.querySelector(".computer-score");

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

let playerScore=0;
let computerScore=0;

function playRound(playerSelection,computerSelection){
    if (playerSelection==="rock" && computerSelection==="scissors"){
        playerScore++;
        const p=document.createElement("p");
        p.innerText="You win, rock beats scissors!"
        result.appendChild(p)
    }
    else if (playerSelection==="scissors" && computerSelection==="paper"){
        playerScore++;
        const p=document.createElement("p");
        p.innerText="You win, scissors beats paper!"
        result.appendChild(p)
    }
    else if (playerSelection==="paper" && computerSelection==="rock"){
        playerScore++;
        const p=document.createElement("p");
        p.innerText= "You win, paper beats rock!"
        result.appendChild(p)
    }
    else if (playerSelection==="scissors" && computerSelection==="rock"){
        computerScore++;
        const p=document.createElement("p")
        p.innerText= "You loose, rock beats scissors!"
        result.appendChild(p)
    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
        computerScore++;
        const p=document.createElement("p")
        p.innerText="You loose, scissors beats paper!"
        result.appendChild(p)
    }
    else if (playerSelection==="rock" && computerSelection==="paper"){
        computerScore++;
        const p=document.createElement("p")
        p.innerText="You loose, paper beats rock!"
        result.appendChild(p)
    }
    else if (playerSelection === computerSelection){
        const p=document.createElement("p")
        p.innerText= "It is tied.Nobody wins!"
        result.appendChild(p)
    }
}
const checkForWinner=(playerScore, computerScore)=>{
    if (playerScore===5){
        const h2=document.createElement("h2")
        h2.classList.add("you-won")
        h2.innerText=`Game over. Congratulations you beat the computer!\n Your score is ${playerScore}.\n Computer score is ${computerScore}.`
        result.append(h2)
    }
    else if (computerScore===5){
        const h2=document.createElement("h2")
        h2.classList.add("computer-won")
        h2.innerText=`Game over! Too bad, computer defeated you, better luck next time!\n Computer score is ${computerScore}.\n Your score is ${playerScore}.`
        result.append(h2)
    }
    else if (playerScore===5 && computerScore===5){
        const h2=document.createElement("h2")
        h2.classList.add("tied")
        h2.innerText=`Game over! It is tied, nobody wins!\n Your score is ${playerScore}.\n Computer score is ${computerScore}.`
        result.append(h2)
    }
}

const updateScores=(playerScore, computerScore) => {
    playerScoreSpan.innerText=`Player Score:${playerScore}`
    computerScoreSpan.innerText=`Computer Score:${computerScore}`
}

rockButton.addEventListener("click", () => {
    const computerSelection=getComputerChoice()
    const playerSelection="rock"
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
})

paperButton.addEventListener("click", () => {
    const computerSelection=getComputerChoice()
    const playerSelection="paper"
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
})

scissorsButton.addEventListener("click", () => {
    const computerSelection=getComputerChoice()
    const playerSelection="scissors"
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore)
})
