let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

let compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    if (humanGuess < 0 || humanGuess > 9) {
        alert('Your number is out of range. Computer wins. Pick a number between 0-9 in the next round..');
        return false;
    }
    
    const humanGuessDifference = getAbsoluteDistance(humanGuess, targetNumber);
    const computerGuessDifference = getAbsoluteDistance(computerGuess, targetNumber);

    if (humanGuessDifference <= computerGuessDifference) {
        return true;
    } else {
        return false;
    }
}

let updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

let advancedRound = () => {
    currentRoundNumber++;
}

let getAbsoluteDistance = (guess, target) => {
    return Math.abs(guess - target);
}