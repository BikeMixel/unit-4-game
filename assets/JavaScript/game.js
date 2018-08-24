
var goalNum = Math.floor(Math.random() * 102 + 18)
    console.log(goalNum)
    console.log("------")
var redNum = Math.floor(Math.random() * 12 + 1)
    console.log(redNum)
var greenNum = Math.floor(Math.random() * 12 + 1)
    console.log(greenNum)
var blueNum = Math.floor(Math.random() * 12 + 1)
    console.log(blueNum)
var yellowNum = Math.floor(Math.random() * 12 + 1)
    console.log(yellowNum)

var runTotal = 0
var wins = 0
var losses = 0 

$("#goalNum").text("Goal Number " + goalNum)
$("#winNum").text("Wins: " + wins)
$("#lossNum").text("Losses: " + losses)
// create a reset function
function reset(){
    goalNum = Math.floor(Math.random() * 102 + 18)
        console.log(goalNum)
    redNum = Math.floor(Math.random() * 12 + 1)
        console.log(redNum)
    greenNum = Math.floor(Math.random() * 12 + 1)
        console.log(greenNum)
    blueNum = Math.floor(Math.random() * 12 + 1)
        console.log(blueNum)
    yellowNum = Math.floor(Math.random() * 12 + 1)
        console.log(yellowNum)
    $("#goalNum").text("Goal Number: " + goalNum)
    runTotal = 0 
    $("#runTotal").text("Your total: " + runTotal)
}    
// wins 
    function win(){
        wins++
        $("#winNum").text("Wins: " + wins)
        reset()
    }
// losses 
    function loss(){
        losses++ 
        $("#lossNum").text("Losses: " + losses)
        reset()
    }
// Event clickers for crystals
    $("#redGem").click(function(){
        runTotal = runTotal + redNum
        $("#runTotal").text("Your total: " + runTotal)
            if(runTotal === goalNum){
                win()
            }
                else if(runTotal > goalNum){
                    loss()
                }
    })
    $("#greenGem").click(function(){
        runTotal = runTotal + greenNum
        $("#runTotal").text("Your total: " + runTotal)
            if(runTotal === goalNum){
                win()
            }
                else if(runTotal > goalNum){
                    loss()
                }
    })
    $("#blueGem").click(function(){
        runTotal = runTotal + blueNum
        $("#runTotal").text("Your total: " + runTotal)
            if(runTotal === goalNum){
                win()
            }
                else if(runTotal > goalNum){
                    loss()
                }
    })
    $("#yellowGem").click(function(){
        runTotal = runTotal + yellowNum
        $("#runTotal").text("Your total: " + runTotal)
            if(runTotal === goalNum){
                win()
            }
                else if(runTotal > goalNum){
                    loss()
                }
    })


// handle adding the guesses up 

