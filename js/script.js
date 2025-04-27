const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors')

const game = function(playerMove) {
    const randomNumber = Math.random();
    let compMove = '';

    if( randomNumber  < 1 / 3){
        compMove = "rock";
    } else if (randomNumber  < 2 / 3) {
        compMove = "paper";
    } else {
        compMove = "scissors";
    }

    function getResult(playerMove, compMove) {
        if( playerMove === compMove){
            return 'Draw';
        } else if (
            (playerMove === 'rock' && compMove === 'scissors') ||
            (playerMove === 'paper' && compMove === 'rock') ||
            (playerMove === 'scissors' && compMove === 'paper')
        ) { 
            return'You win!'
        } else {
            return 'You lost...'
        }
    }
    
    // Imprimir resultado
    const result = getResult(playerMove, compMove)
    console.log(`Player: ${playerMove} | Computer: ${compMove} | Result: ${result}`);
}

rock.onclick = () => game('rock');
paper.onclick = () => game('paper');
scissors.onclick = () => game('scissors');

