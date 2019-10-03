const checkResults = (playerChoice, computerChoice) => {
    if (computerChoice === 'rock' && playerChoice === 'scissors') {
        return 'Lose'; 
    } else if 
    (computerChoice === 'rock' && playerChoice === 'paper') {
        return 'Win';
    } else if
    (computerChoice === 'rock' && playerChoice === 'rock') {
        return 'Tie';
    } else if
    (computerChoice === 'paper' && playerChoice === 'paper') {
        return 'Tie';
    } else if
    (computerChoice === 'paper' && playerChoice === 'rock') {
        return 'Lose';
    } else if
    (computerChoice === 'paper' && playerChoice === 'scissors') {
        return 'Win';
    } else if
    (computerChoice === 'scissors' && playerChoice === 'paper') {
        return 'Lose';
    } else if
    (computerChoice === 'scissors' && playerChoice === 'scissors') {
        return 'Tie';
    } else if
    (computerChoice === 'scissors' && playerChoice === 'rock') {
        return 'Win';
    }}; 

export default checkResults; 