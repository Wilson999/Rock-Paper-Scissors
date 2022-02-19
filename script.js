//randomly return either rock , paper or scissors
function computerPlay () {
    let randomNum = Math.floor(Math.random()*3);
    switch(randomNum)
    {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'rock';
    }
}
//plays a single round of Rock Paper Scissors
function playRound (playerSelection,computerSelection) {
    playerSelection = changeToLowerCase(playerSelection);
    computerSelection = changeToLowerCase(computerSelection);
    //draw
    if(playerSelection === computerSelection)
        return `A draw! ${playerSelection} vs ${computerSelection}`;
    let playerValue = changeToValue(playerSelection);
    let computerValue = changeToValue(computerSelection);
    let finalValue = playerValue - computerValue;
    //player win
    if(finalValue == 1 ||  finalValue == -2)
        return `You win! ${playerSelection} beats ${computerSelection}`;
    //player lose
    if(finalValue == -1 ||  finalValue == 2)
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
}
//change the string selection to value
function changeToValue(selection){
    switch(selection)
    {
        case 'rock':
            return 2;
        case 'scissors':
            return 1;
        case 'paper':
            return 0;
    }
}
//make case insensitive
function changeToLowerCase(originalSelection){
    return originalSelection.toLowerCase();
}


//play five round games
function game() {
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt('What is your choice?');
        console.log(playRound(playerSelection, computerPlay()));
    }
}
game();