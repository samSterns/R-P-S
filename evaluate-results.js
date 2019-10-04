const evaluateResults = (playerChoice, computerChoice) => {
    if (computerChoice === playerChoice) {
        return 'Tie';
    } else if (computerChoice === 'rock' && playerChoice === 'paper') {
        return 'Win';
    // } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
    //     return 'lose';
    // } else if (computerChoice === 'paper' && playerChoice === 'rock') {
    //     return 'Lose';
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        return 'Win';
    // } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
    //     return 'Lose';
    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        return 'Win';
    } else {
        return 'Lose';
    }
};

export default evaluateResults;
