const countdownEl = document.querySelector('#countdown');
const timeBtn = document.querySelectorAll('button');

let countdown;

function timer(seconds) {
    clearInterval(countdown);

    countdown = setInterval(() => {

        const secondsLeft = seconds--;
        if (secondsLeft <= 0) {
            clearInterval(countdown)
        }
        display(secondsLeft)
    }, 1000);
}

function display(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;

    countdownEl.textContent = `${minutes < 10? '0'+ minutes: minutes}:${secondsLeft < 10? '0'+ secondsLeft: secondsLeft}`
}

timeBtn.forEach(btn => btn.addEventListener('click', () => {
    let secs = parseInt(btn.dataset.min);

    timer(secs)
}));


const input = document.querySelector('#input')
document.customForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const myVal = parseInt(input.value)

    timer(myVal * 60)
})