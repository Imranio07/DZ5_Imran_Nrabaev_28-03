const gmailInput = document.querySelector('#gmail_input')
const gmailCheck = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-z\d]+@gmail\.com$/;

gmailCheck.onclick = () => {
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color='green'
    }else{
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color='red'
    }
}


const box = document.querySelector('.child_block')

let positionX = 0
let positionY = 0
const move = () => {
    if (positionX < 448 && positionY === 0) {
        positionX++
        box.style.left = `${positionX}px`
    } else if (positionX >= 448 && positionY < 448) {
        positionY++
        box.style.top = `${positionY}px`
    } else if (positionX > 0 && positionY >= 448) {
        positionX--
        box.style.left = `${positionX}px`
    } else if (positionX <= 0 && positionY > 0) {
        positionY--
        box.style.top = `${positionY}px`
    }

    setTimeout(move, 0)
}

move()

const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const resumeButton = document.getElementById('resume');

let minutes = 0;
let seconds = 0;
let mlSeconds = 0;
let intervalId;
startButton.addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            mlSeconds++;
            if (mlSeconds === 100) {
                mlSeconds = 0;
                seconds++
                secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
            }
        }, 10);
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    seconds = '';
    secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
});
resumeButton.addEventListener('click', () => {
    if (seconds !== 0) {
        if (!intervalId) {
            intervalId = setInterval(() => {
                seconds++;
                secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
            }, 1000);
        }
    }
});