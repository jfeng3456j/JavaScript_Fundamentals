//Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector("#guess-input"),
    message = document.querySelector('.message');


//assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


//play again event listener
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})

guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`please enter a number between ${min} to ${max}`, 'red');
    }

    //check if won
    if (guess === winningNum) {

        gameOver(true, ` The correct number is ${winningNum} , you win!`)


    } else {
        //wrong number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            //game over
            gameOver(false, ` The correct number is ${winningNum} , you lost!`);

        } else {

            //game continue - wrong answer
            guessInput.style.borderColor = 'red';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`), 'red';

            //clear input
            guessInput.value = '';
        }
    }

})

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;

}

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disable = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color);


    //play again?
    guessBtn.value = 'play again';
    guessBtn.className += 'play-again';
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}