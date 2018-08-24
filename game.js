var compLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var len = compLetters.length

var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessed = [];

var compGuess = compLetters[Math.floor(Math.random() * len)];
console.log("compGuess " + compGuess)
console.log("---------")

function reset(){
    compGuess = compLetters[Math.floor(Math.random() * len)];
    guessLeft = 9;
    document.getElementById("guessLeft").innerText = guessLeft
    guessed = [];
    console.log("compGuess " + compGuess)
    console.log("---------")
    }

document.onkeyup = function(event){
    var userGuess = event.key
    console.log("userGuess " + userGuess)
    console.log("---------")
    guessed.push(userGuess)
    document.getElementById("guessed").innerText = guessed; 

    if ((userGuess) === (compGuess) && (guessLeft !== 0)){
    wins++
    console.log("wins " + wins)
    console.log("----------")  
    document.getElementById("wins").innerText = wins 
    reset();
}                                                                                                                                       
    else if (guessLeft === 0){
    losses++
    console.log("losses " + losses)
    console.log("----------")
    document.getElementById("losses").innerText = losses
    reset();
}
    else if ((userGuess) !== (compGuess)){
    guessLeft--
    console.log("guessLeft " + guessLeft)
    console.log("----------")
    document.getElementById("guessLeft").innerText = guessLeft
}
}


