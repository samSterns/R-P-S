// IMPORT MODULES under test here:
//import example from '../src/example.js';
import checkResults from '../chek-results.js';

const test = QUnit.test;

test('if play throws scissors and computer throws rock, return lose', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerChoice = 'scissors';
    const computerChoice = 'rock';
    const answer = 'Lose';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(playerChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, answer);
});

test('if play throws scissors and computer throws paper, return lose', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerChoice = 'scissors';
    const computerChoice = 'paper';
    const answer = 'Win';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(playerChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, answer);
});
test('if play throws scissors and computer throws scissors, return lose', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerChoice = 'scissors';
    const computerChoice = 'scissors';
    const answer = 'Tie';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(playerChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, answer);
});

test('if play throws rock and computer throws scissors, return lose', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerChoice = 'rock';
    const computerChoice = 'scissors';
    const answer = 'Win';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(playerChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, answer);
});

test('if play throws paper and computer throws scissors, return lose', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerChoice = 'paper';
    const computerChoice = 'scissors';
    const answer = 'Lose';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(playerChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, answer);
});

test('if play throws scissors and computer throws scissors, return lose', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerChoice = 'scissors';
    const computerChoice = 'scissors';
    const answer = 'Tie';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(playerChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, answer);
});
test('if play throws paper and computer throws scissors, return lose', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerChoice = 'paper';
    const computerChoice = 'scissors';
    const answer = 'Lose';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(playerChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, answer);
});
test('if play throws paper and computer throws rock, return lose', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerChoice = 'paper';
    const computerChoice = 'rock';
    const answer = 'Win';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(playerChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, answer);
});
test('if play throws paper and computer throws rock, return lose', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerChoice = 'paper';
    const computerChoice = 'paper';
    const answer = 'Tie';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(playerChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, answer);
});
test('if play throws paper and computer throws rock, return lose', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerChoice = 'rock';
    const computerChoice = 'rock';
    const answer = 'Tie';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(playerChoice, computerChoice);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, answer);
});
