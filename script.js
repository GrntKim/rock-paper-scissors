const choices = ['Rock', 'Paper', 'Scissors'];
let humanScore;
let computerScore;
let gameSet;
let winnerText;
const hs = document.querySelector('.human-score');
const cs = document.querySelector('.computer-score');
const hc = document.querySelector('.human-choice');
const cc = document.querySelector('.computer-choice');
const hr = document.querySelector('.human-result');
const cr = document.querySelector('.computer-result');
const result = document.querySelector('.result');

function initGame() {
    humanScore = 0;
    computerScore = 0;
    gameSet = false;

    hs.textContent = 0;
    cs.textContent = 0;
    hc.textContent = 'READY';
    cc.textContent = 'READY';
    hr.style.color = 'black';
    cr.style.color = 'black';
    result.textContent = 'READY'
}

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
        let humanChoice;
        if (button.classList.contains('rock-btn')) {
            humanChoice = 'Rock';
        } else if (button.classList.contains('paper-btn')) {
            humanChoice = 'Paper';
        } else if (button.classList.contains('scissors-btn')) {
            humanChoice = 'Scissors';
        }
        playRound(humanChoice, getComputerChoice());
    });
});


function playRound(humanChoice, computerChoice) {
    if (gameSet) return;

    hc.textContent = humanChoice;
    cc.textContent = computerChoice;

    let h = humanChoice;
    let c = computerChoice;
    if(h === c) {
        result.textContent = 'It\'s a draw!';
    } else if((h === 'Rock' && c === 'Scissors') || 
              (h === 'Scissors' && c === 'Paper') || 
              (h === 'Paper' && c === 'Rock')) {

        result.textContent = 'You win the round!';
        hs.textContent = ++humanScore;
    } else {
        result.textContent = 'Computer wins the round!';
        cs.textContent = ++computerScore;
    }

    if(humanScore === 5) {
        winnerText = 'You win! ';
        hr.style.color = 'blue';
        gameSet = true;
    } else if (computerScore === 5) {
        winnerText = 'Computer wins! ';
        cr.style.color = 'blue';
        gameSet = true;
    }

    if (gameSet) {
        result.textContent = winnerText;

        const resetButton = document.createElement('button');
        resetButton.textContent = 'Restart';
        resetButton.addEventListener('click', () => {
            resetButton.remove();
            initGame();
        });

        result.appendChild(resetButton);
    }
}

initGame();