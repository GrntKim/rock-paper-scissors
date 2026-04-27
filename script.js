const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function getHumanChoice() {
    var humanChoice = prompt('Make your choice');
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    var h = humanChoice.toLowerCase();
    var c = computerChoice.toLowerCase();
    if(h === c) {
        console.log('Draw! ' + humanChoice + ' and ' + computerChoice);
        return;
    }
    var lost = false;
    if(h === 'rock') {
        if(c === 'scissors') {
            humanScore++;
        } else {
            computerScore++;
            lost = true;
        }
    } else if(h === 'scissors') {
        if(c === 'paper') {
            humanScore++;
        } else {
            computerScore++;
            lost = true;
        }
    } else if(h === 'paper') {
        if(c === 'rock') {
            humanScore++;
        } else {
            computerScore++;
            lost = true;
        }
    }
    if (lost) console.log('You lose! ' + computerChoice + ' beats ' + humanChoice)
    else console.log('You Win! ' + humanChoice + ' beats ' + computerChoice);
}


var humanScore = 0;
var computerScore = 0;
const rounds = 5;

function playGame() {
    for (var i=0; i<rounds; i++)
        playRound(getHumanChoice(), getComputerChoice());

    if(humanScore > computerScore) 
        console.log('You Win!');
    if(humanScore === computerScore)
        console.log('Draw!');
    else 
        console.log('You lose...');
    console.log('you: ' + humanScore + ', computer: ' + computerScore);

}

playGame();