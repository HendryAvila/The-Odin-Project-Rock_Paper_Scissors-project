let userChoice = '';
let humanScore = 0;
let computerScore = 0;

// Selecciona todos los botones
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === "1") {
            userChoice = 'rock';
        } else if (button.id === "2") {
            userChoice = 'paper';
        } else {
            userChoice = 'scissors';
        }
        playRound(userChoice, getComputerChoice());
    });
});

let generateRandomNumber = () => Math.floor(Math.random() * 3);

function getComputerChoice() {
    let randomNumber = generateRandomNumber();
    let result;
    if (randomNumber == 0) {
        result = 'rock';
    } else if (randomNumber == 1) {
        result = 'paper';
    } else {
        result = 'scissors';
    }
    return result;
}

function playRound(humanChoice, computerChoice) {
    const definionMatch = document.querySelector('#definion-match')                       
    if (humanChoice === computerChoice) {
        definionMatch.textContent = `Draw!😬 ${humanChoice} is equal to ${computerChoice}`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        definionMatch.textContent = `You win!🔥 ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
    } else {
        definionMatch.textContent = `You lose!😭 ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
    }
    const userScoreElement = document.querySelector('#userScoreElement')
    const computerScoreElement = document.querySelector('#computerScoreElement')

    userScoreElement.textContent = `Your score is = ${humanScore}`
    computerScoreElement.textContent = `The computer score is = ${computerScore}`
    // Verificar si alguno de los puntajes alcanzó 10
    if (humanScore === 10 || computerScore === 10) {
        if (humanScore > computerScore) {
            definionMatch.textContent = `Congratulations! You win the game with a score of ${humanScore}-${computerScore} 🏆`;
        } else if (humanScore < computerScore) {
            definionMatch.textContent = `You lose the game with a score of ${humanScore}-${computerScore} 😞`;
        } else {
            definionMatch.textContent = `It's a draw! Both have a score of ${humanScore}-${computerScore} 🤝`;
        }

        buttons.forEach(button => {
            button.disabled = true;
        });
    }  
}
