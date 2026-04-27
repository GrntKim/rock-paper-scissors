const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function getHumanChoice() {
    var humanChoice = prompt('Make your choice [Rock, Paper, Scissors]');
    return humanChoice;
}

function playRound(round, humanChoice, computerChoice) {
    var h = humanChoice.toLowerCase();
    var c = computerChoice.toLowerCase();
    if(h === c) {
        console.log('Round ' + round + ': It\'s a draw! Both chose ' + humanChoice);
        return;
    } else if((h === 'rock' && c === 'scissors') || (h === 'scissors' && c === 'paper') || (h === 'paper' && c === 'rock')) {
            humanScore++;
            console.log('Round ' + round + ': You win! ' + humanChoice + ' beats ' + computerChoice);
    } else {
            computerScore++;
            console.log('Round ' + round + ': You lose! ' + computerChoice + ' beats ' + humanChoice)
    }
}


var humanScore = 0;
var computerScore = 0;
const rounds = 5;

function playGame() {
    for (var i=1; i<=rounds; i++)
        playRound(i, getHumanChoice(), getComputerChoice());

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

playGame();