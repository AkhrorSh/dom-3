const timer = document.querySelector(".timer")
const timerBtns = timer.querySelectorAll("button")
const timerH1 = timer.querySelector("h1")
let cont = document.querySelector(".continue")
let schotchik = document.querySelector(".schotchik")
let random = schotchik.querySelector(".random")
let scereen = schotchik.querySelector("h1")
const schotchikBtns = schotchik.querySelector("data-type")

let miliSec = 0
let seconds = 0
let minutes = 0
let interval



random = Math.floor(Math.random() * 201) - 100


timerBtns.forEach(btn => {
    btn.onclick = () => {
        let btnType = btn.getAttribute("data-type")

        switch (btnType) {
            case "start":
                startTimer()
                break;
            case "stop":
                clearInterval(interval)
                cont.style.display = "block"
                break;
            case "reset":
                timerH1.innerHTML = '00:00:00'
                clearInterval(interval)
                miliSec = 0
                seconds = 0
                minutes = 0
                
                break;
            case "continue":
                startTimer()
                cont.style.display = "none"
                break;

        }
    }
})

function startTimer() {
    clearInterval(interval)
    interval = setInterval(() => {
        miliSec++

        if(miliSec === 100) {
            miliSec = 0
            seconds++
        } else if (seconds === 60) {
            seconds = 0
            minutes++
        }
        timerH1.innerHTML = `
            ${minutes < 10 ? `0${minutes}` : minutes} : 
            ${seconds < 10 ? `0${seconds}` : seconds} :
            ${miliSec < 10 ? `0${miliSec}` : miliSec}
        `
    }, 10);
}