const ROCK = document.getElementById('rock');
const PAPER = document.getElementById('paper');
const SCISSORS = document.getElementById('scissors')
const RESET = document.getElementById('reset')

const SCORE = {
    wins: 0,
    losses: 0,
    ties: 0,
}

const GAME = function(playerMove) {
    const RANDOM_NUMBER = Math.random();
    let compMove = '';

    if( RANDOM_NUMBER  < 1 / 3){
        compMove = "rock";
    } else if (RANDOM_NUMBER  < 2 / 3) {
        compMove = "paper";
    } else {
        compMove = "scissors";
    }

    function getResult(playerMove, compMove) {
        if( playerMove === compMove){
            return 'Tie';
        } else if (
            (playerMove === 'rock' && compMove === 'scissors') ||
            (playerMove === 'paper' && compMove === 'rock') ||
            (playerMove === 'scissors' && compMove === 'paper')
        ) { 
            return 'You win!';
        } else {
            return 'You lost...';
        }
    }

    const IMP_RESULT = getResult(playerMove, compMove)
    
    if( IMP_RESULT === 'You win!'){
        SCORE.wins += 1; 
    } else if ( IMP_RESULT === 'Tie'){
        SCORE.ties += 1;
    } else { 
        SCORE.losses += 1;
    }

    console.log(`Player: ${playerMove} | Computer: ${compMove} | Result: ${IMP_RESULT}`);
    console.log(`Wins: ${SCORE.wins} | Ties: ${SCORE.ties} | Losses: ${SCORE.losses}`);
}

ROCK.onclick = () => GAME('rock');
PAPER.onclick = () => GAME('paper');
SCISSORS.onclick = () => GAME('scissors');
RESET.onclick = () => {
    SCORE.wins = 0;
    SCORE.ties = 0;
    SCORE.losses = 0;
    console.log('Score Reset');
    console.log(`Wins: ${SCORE.wins} | Ties: ${SCORE.ties} | Losses: ${SCORE.losses}`);
}

