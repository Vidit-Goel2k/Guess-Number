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
        // checking low or high
        const lowOrHigh = document.querySelector(".lowOrHi")
        if(guess < randomNumber){
            lowOrHigh.innerText = `low`
        }
        else{
            lowOrHigh.innerText = `high`
        }
        
        // filling prev guesses
        const prevGuesses = document.querySelector(".prevGuesses")
        prevGuessArr.push(guess)
        prevGuesses.innerText = `${prevGuessArr}`
        

        // setting remaining guesses allowed
        const guessesRemainingDiv = document.querySelector(".guessRemaining")

        const guessesRemaining = parseInt(guessesRemainingDiv.innerText)

        if(guessesRemaining === 1){
        wrapper.innerText = `You Lost!`
        }

        guessesRemainingDiv.innerText = `${guessesRemaining-1}`




    }



})