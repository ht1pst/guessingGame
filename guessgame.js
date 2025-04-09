let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkNumber() {
    let userGuess = document.getElementById("numberInput").value;
    if (userGuess == randomNumber) {
        document.getElementById("numberResult").textContent = "Correct! You guessed the number.";
    } else {
        document.getElementById("numberResult").textContent = "Wrong! Try again.";
    }
}


// let words = ["apple", "banana", "grape", "orange"];
// let randomWord = words[Math.floor(Math.random() * words.length)];

// function checkWord() {
//     let userGuess = document.getElementById("wordInput").value.toLowerCase();
//     if (userGuess === randomWord) {
//         document.getElementById("wordResult").textContent = "Correct! You guessed the word.";
//     } else {
//         document.getElementById("wordResult").textContent = "Wrong! Try again.";
//     }
// }
// ASSIGNMENT
//No.1
let randomNumber2 = Math.floor(Math.random() * 20) +1;

function checkNumber2() {
    let userGuess = document.getElementById('numberInput2').value;
    if(userGuess == randomNumber2){
        document.getElementById('numberResult2').textContent =
            "correct"
        
    }
    else if(userGuess > randomNumber2){
        document.getElementById('numberResult2').textContent =
            "too high"
    }

    else if(userGuess < randomNumber2){
        document.getElementById('numberResult2').textContent =
            "too low"
    }

    else {
        document.getElementById('numberResult2').textContent =
            "false!"
        
    }
}
//No.2
let randomNumber3 = Math.floor(Math.random() * 20) + 1;
let attempts = 5
function checkNumber3() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    let result = document.getElementById('result');
    let attemptsLeft = document.getElementById('attemptsLeft');
    
    if(attemptsLeft > 1){
        if(userGuess === randomNumber3){
            result.textContent = 'Correct';
            attempts = 0;
        }
        else if (userGuess > randomNumber3){
            result.textContent = 'Too high';
           
        }
        else{
            result.textContent = 'Too low';
        }
        attemptsLeft--;
        attemptsText.textContent = "Attempts left: " + attemptsLeft;
    }
    else{
        result.textContent = `Game over! The correct number was ${randomNumber3}.`;
        attemptsLeft.textContent = "";

    }
}
const words2 = ["tiger", "eagle", "horse", "zebra", "panda"];

let randomWord2 = words2[Math.floor(Math.random() * words2.length)];
let firstLetter = randomWord2[0];
let lastLetter = randomWord2[randomWord2.length - 1];

document.getElementById("wordHint").textContent = 
    `Hint: The word starts with '${firstLetter}' and ends with '${lastLetter}'.`;

function checkWord2() {  
    
    let wordGuess = 
    document.getElementById('wordInput2').value.toLowerCase();
    let result = document.getElementById("wordResult2");

    if(wordGuess === randomWord2){
        result.textContent = 'correct';
    }
    else{
         result.textContent = 'Wrong';
    }
    
}


