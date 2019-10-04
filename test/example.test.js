// IMPORT MODULES under test here:
//import example from '../src/example.js';
import evaluateResults from '../evaluate-results.js';

const test = QUnit.test;

test('if player throws scissors and computer throws rock, return lose', function(assert) {
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

test('if player throws scissors and computer throws paper, return win', function(assert) {
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
// test('if playerer throws scissors and computer throws scissors, return tie', function(assert) {
//   //Arrange
//   // Set up your parameters and expectations
//     const playerChoice = 'scissors';
//     const computerChoice = 'scissors';
//     const answer = 'Tie';
//   //Act
//   // Call the function you're testing and set the result to a const
//     const result = checkResults(playerChoice, computerChoice);
//   //Assert
//   // Make assertions about what is expected valid result
//     assert.equal(result, answer);
// });

test('if player throws rock and computer throws scissors, return win', function(assert) {
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

test('if player throws paper and computer throws scissors, return lose', function(assert) {
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

// test('if player throws scissors and computer throws scissors, return tie', function(assert) {
//   //Arrange
//   // Set up your parameters and expectations
//     const playerChoice = 'scissors';
//     const computerChoice = 'scissors';
//     const answer = 'Tie';
//   //Act
//   // Call the function you're testing and set the result to a const
//     const result = checkResults(playerChoice, computerChoice);
//   //Assert
//   // Make assertions about what is expected valid result
//     assert.equal(result, answer);
// });
test('if player throws paper and computer throws scissors, return lose', function(assert) {
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
test('if player throws paper and computer throws rock, return win', function(assert) {
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
// test('if player throws paper and computer throws paper, return tie', function(assert) {
//   //Arrange
//   // Set up your parameters and expectations
//     const playerChoice = 'paper';
//     const computerChoice = 'paper';
//     const answer = 'Tie';
//   //Act
//   // Call the function you're testing and set the result to a const
//     const result = checkResults(playerChoice, computerChoice);
//   //Assert
//   // Make assertions about what is expected valid result
//     assert.equal(result, answer);
// });
test('if player throws rock and computer throws rock, return tie', function(assert) {
  //Arrange
  // Set up your parameters and expectations
    const playerChoice = computerChoice;
    const computerChoice = playerChoice;
    const answer = 'Tie';
  //Act
  // Call the function you're testing and set the result to a const
    const result = checkResults(playerChoice, computerChoice);
  //Assert
  // Make assertions about what is expected valid result
    assert.equal(result, answer);
});
