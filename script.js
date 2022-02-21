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
//    playerSelection = changeToLowerCase(playerSelection);
    computerSelection = changeToLowerCase(computerSelection);
    let playResult = 0;//1 for draw, 2 for player win, 3 for player lose  
    //draw
    if(playerSelection === computerSelection)
        playResult = 1;
        
    let playerValue = changeToValue(playerSelection);
    let computerValue = changeToValue(computerSelection);
    let finalValue = playerValue - computerValue;
    //player win
    if(finalValue == 1 ||  finalValue == -2)
        playResult = 2;
        
    //player lose
    if(finalValue == -1 ||  finalValue == 2)
        playResult = 3;
        
    displayResult(playResult,playerSelection,computerSelection);
    countScore(playResult);
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

//DOM display result of RPS
function displayResult(playResult,playerSelection,computerSelection) {
    const container = document.querySelector('#container');
    container.removeChild(container.firstChild);
    
    const content = document.createElement('h1'); 
    content.classList.add('content');

    //playResult: 1 for draw, 2 for player win, 3 for player lose
    switch(playResult){
        case 1:
            content.textContent = `A draw! ${changeToEmoji(playerSelection)} vs ${changeToEmoji(computerSelection)}`;
            break;
        case 2:
            content.textContent = `You win! ${changeToEmoji(playerSelection)} vs ${changeToEmoji(computerSelection)}`;
            break;
        case 3:
            content.textContent = `You Lose! ${changeToEmoji(playerSelection)} vs ${changeToEmoji(computerSelection)}`;
            break;
    }
    
    container.appendChild(content);
}

//change selection to emoji
function changeToEmoji (selection) {
    switch(selection) {
        case 'rock':
            return '✊';
        case 'paper':
            return '✋';
        case 'scissors':
            return '✌';
    }
}

function displayWinner () {
    const win = document.querySelector('#win');
    const content = document.createElement('h1'); 
    content.classList.add('content');
    content.textContent = `You win!`;
    win.appendChild(content);
}

function displayScore () {
    const score = document.querySelector('#score');
    score.removeChild(score.firstChild);
    const content = document.createElement('h1'); 
    content.classList.add('content');
    content.textContent = `Your current score is ${playerScore} `;
    score.appendChild(content);
}

function countScore (playResult) {
    
    if (playResult === 2)
    {
        playerScore++;
        displayScore();
    }
    if (playerScore === 5)
        displayWinner();    

}

//DOM buttons of RPS
let playerSelection;
let playerScore = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        playRound(playerSelection, computerPlay());
    });
});

displayScore();

