const randomNumber = (parseInt((Math.random()*100)+1))
const form = document.querySelector("#form")

const wrapper = document.querySelector("#wrapper")

let prevGuessArr = []

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const guess = parseInt(document.querySelector("#guessField").value)

    if(guess === randomNumber){
        wrapper.innerText = `You Won!`
    }
    else{
        const prevGuesses = document.querySelector(".prevGuesses")
        prevGuessArr.push(guess)
        prevGuesses.innerText = `${prevGuessArr}`

        const guessRemainingDiv = document.querySelector(".guessRemaining")

        const guessRemaining = parseInt(guessRemainingDiv.innerText)

        if(guessRemaining === 1){
        wrapper.innerText = `You Lost!`
        }

        guessRemainingDiv.innerText = `${guessRemaining-1}`

    }



})