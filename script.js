const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

let round = 1;
document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
        let humanChoice;
        if (button.classList.contains('rock-btn')) {
            humanChoice = 'Rock';
        } else if (button.classList.contains('paper-btn')) {
            humanChoice = 'Paper';
        } else {
            humanChoice = 'Scissors';
        }
        playRound(round++, humanChoice, getComputerChoice());
    });
});

let humanScore = 0;
let computerScore = 0;

function playRound(round, humanChoice, computerChoice) {
    const hs = document.querySelector('.human-score');
    const cs = document.querySelector('.computer-score');

    const hc = document.querySelector('.human-choice');
    const cc = document.querySelector('.computer-choice');

    document.querySelector('.round').textContent = round;
    hc.textContent = humanChoice;
    cc.textContent = computerChoice;

    let h = humanChoice;
    let c = computerChoice;
    if(h === c) {
        return;
    } else if((h === 'Rock' && c === 'Scissors') || (h === 'Scissors' && c === 'Paper') || (h === 'Paper' && c === 'Rock')) {
            hs.textContent = ++humanScore;
    } else {
            cs.textContent = ++computerScore;
    }
}


function playGame() {

    console.log('--------------------');
    if(humanScore > computerScore) 
        console.log('You win!');
    else if(humanScore === computerScore)
        console.log('It\'s a draw!');
    else 
        console.log('You lose...');
    console.log('You: ' + humanScore + ', Computer: ' + computerScore);
    console.log('--------------------');

}
