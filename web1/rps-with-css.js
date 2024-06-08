const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
};

updateScoreElement()
// if (!score) {
//     score = {
//         wins: 0,
//         loses: 0,
//         ties: 0
//     };
// }


function gameMoves(playerMove) {

    const computerMove = pickMove();

    if (playerMove == 'scissors') {
        if (computerMove === 'rock') {
        result = 'You win';
    } else if (computerMove === 'paper') {
        result = 'You lose';
    } else if (computerMove ==='scissors') {
        result = 'tie';
    }
        
    
} else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
        result = 'You lose';
    } else if (computerMove === 'paper') {
        result = 'tie';
    } else if (computerMove ==='scissors') {
        result = 'You win';
    }
} else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
        result = 'tie';
    } else if (computerMove === 'paper') {
        result = 'You lose';
    } else if (computerMove ==='scissors') {
        result = 'You win';
}
}

if (result === 'You win') {
    score.wins++;
} else if (result === 'You lose') {
    score.loses++;
} else if (result === 'tie') {
    score.ties++;
}


localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result)').innerHTML = result;

document.querySelector('.js-moves)').innerHTML = ` You
<img src="images/${playerMove}.png" class="rock-icon">
<img src="images/${computerMove}-emoji.png" class="rock-icon">
computer`;
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = 
    `wins: ${score.wins}, losses: ${score.loses}, tie: ${score.ties}`;

}



function pickMove() {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
} else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper';
} else if (randomNumber >= 2/3 && randomNumber <=3){
    computerMove = 'scissors';
}

return computerMove;
}
