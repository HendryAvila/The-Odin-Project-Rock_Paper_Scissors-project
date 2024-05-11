let generateRandimNumber = () => Math.floor(Math.random() * 3);


function getComputerChoice(){
    let randomNumber =  generateRandimNumber()
    let result;
    if (randomNumber == 0) {
        return result = 'rock'
    }
    else if (randomNumber == 1){
        return result = 'paper'
    }
    else{
        return result = 'scissors'
    }
}



function getHumanChoice() {
    let result;
    let userChoice = prompt(`Choose your option:
    
    Rock
    Paper 
    Scissors`).toLowerCase();
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
        return userChoice;
    } else {
        console.log("Error: you should choose 'rock', 'paper' or 'scissors'.");  
        return getHumanChoice(); // Pide al usuario que ingrese una opción válida
    }
}




function playRound(){
    const computerChoice = getComputerChoice()
    const humanChoice = getHumanChoice()
    
    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        console.log("Error: you should use:  'rock', 'paper' or 'scissors'.");
    } 
    else if (humanChoice == 'rock' && computerChoice == 'rock'){
        console.log("Draw! Rock is equal to rock")
    }
    else if (humanChoice == 'paper' && computerChoice == 'paper'){
        console.log("Draw! paper is equal to paper")
    }
    else if (humanChoice == 'scissors' && computerChoice == 'scissors'){
        console.log("Draw! scissors is equal to scissors")
    }


    else if (humanChoice == 'paper' && computerChoice == 'rock'){
        console.log("You win! Paper beat rock")
        humanScore += 1
        console.log(`Human Score: ${humanScore}`)
    }
    else if (humanChoice == 'paper' && computerChoice == 'scissors'){
        console.log("You Lose! paper is cut by scissors")
        computerScore += 1
        console.log(`Computer Score: ${computerScore}`)
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissors'){
        console.log("You win! rock destroy  scissors")
        humanScore += 1
        console.log(`Human Score: ${humanScore}`)
    }
    else if (humanChoice == 'rock' && computerChoice == 'paper'){
        console.log("You Lose! Rock can not destroy paper")
        computerScore += 1
        console.log(`Computer Score: ${computerScore}`)
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper'){
        console.log("You win! scissors cut paper")
        humanScore += 1
        console.log(`Human Score: ${humanScore}`)
    }
    else if (humanChoice == 'scissors' && computerChoice == 'rock'){
        console.log("You Lose! scissors can not cut rock")
        computerScore += 1
        console.log(`Computer Score: ${computerScore}`)   
    }
    else{
        console.log('Incorrect option. Choose the one of the 3 option!')
    }
    
        
}
function playGame(){
    let humanScore = 0
    let computerScore = 0
for (let round = 1; round < 5 + 1; round++) {
    let rounds = playRound()
    console.log(`Round number: ${round}`)
}
if (humanScore > computerScore){
    console.log(`Human is the winner with a total score of ${humanScore}`)
}
else if(humanScore < computerScore){
    console.log(`Computer is the winner with a total score of ${computerScore}`)
}
else{
    console.log(`This is a draw! computer score is:  ${computerScore} and human score is: ${humanScore}`)
}
}


let game = playGame()