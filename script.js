const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function getHumanChoice() {
    var humanChoice = prompt('Make your choice').toLowerCase();
    return humanChoice;
}

console.log(getHumanChoice());