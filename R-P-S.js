import getRandomThrow from './get-throw.js';
import checkResults from './chek-results.js';
//fetch DOM elements
const playButton = document.getElementById('play-button');
const result = document.getElementById('result');
const numberOfWins = document.getElementById('wins');
const numberOfLoses = document.getElementById('loses');
const numberOfTies = document.getElementById('ties');

let ties = 0;
let wins = 0;
let loses= 0;

numberOfTies.textContent = ties;
numberOfLoses.textContent = loses;
numberOfWins.textContent = wins; 

playButton.addEventListener('click', () => {
    const computerChoice = getRandomThrow();
    const playerChoice = document.querySelector('input:checked').value;
    const gameResult = checkResults (playerChoice, computerChoice);
    console.log(playerChoice, 'this is play');
    console.log(computerChoice, 'this is comp');
    if (gameResult === 'Tie') {
        result.textContent = 'Tie';
        ties = ties + 1;
        numberOfTies.textContent = ties;
    } else if (gameResult === 'Win') {
        result.textContent = 'You won wow!'; 
        wins = wins + 1;
        numberOfWins.textContent = wins;
    } else if (gameResult === 'Lose') {
        result.textContent = 'You lost. Try again';
        loses = loses + 1;
        numberOfLoses.textContent = loses;
    }
});