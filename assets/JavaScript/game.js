var goalNum = Math.floor(Math.random() * 102 + 18) 
var redNum = Math.floor(Math.random() * 12 + 1)   
var greenNum = Math.floor(Math.random() * 12 + 1)    
var blueNum = Math.floor(Math.random() * 12 + 1)
var yellowNum = Math.floor(Math.random() * 12 + 1)

var runTotal = 0
var wins = 0
var losses = 0 

$("#goalNum").text("Goal Number: " + goalNum)
$("#winNum").text("Wins: " + wins)
$("#lossNum").text("Losses: " + losses)
$("#runTotal").text("Your total: " + runTotal)

function reset(){
    goalNum = Math.floor(Math.random() * 102 + 18)       
    redNum = Math.floor(Math.random() * 12 + 1)       
    greenNum = Math.floor(Math.random() * 12 + 1)       
    blueNum = Math.floor(Math.random() * 12 + 1)  
    yellowNum = Math.floor(Math.random() * 12 + 1)
    runTotal = 0 

    $("#goalNum").text("Goal Number: " + goalNum) 
    $("#runTotal").text("Your total: " + runTotal)
}  

function win(){
    wins++
    $("#winNum").text("Wins: " + wins)
    alert("You Won! :D")
    reset()
}
function loss(){
    losses++ 
    $("#lossNum").text("Losses: " + losses)
    alert("You Lost! :/")
    reset()
}
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

