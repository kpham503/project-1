/*Runs only when page loads*/
var target = 0;
var numOfRolls = 0;
var dice1 = Math.floor((Math.random() * 6) + 1);
var dice2 = Math.floor((Math.random() * 6) + 1);
document.getElementById("img1").src = "die" + dice1 + ".gif";
document.getElementById("img2").src = "die" + dice2 + ".gif";

function roll(){
    numOfRolls += 1;
    target = parseInt(document.getElementById("input-box").value);
    dice1 = Math.floor((Math.random() * 6) + 1);
    dice2 = Math.floor((Math.random() * 6) + 1);
    document.getElementById("img1").src = "die" + dice1 + ".gif";
    document.getElementById("img2").src = "die" + dice2 + ".gif";
    document.getElementById("output-box").innerText = "";
    if(dice1 + dice2 == target){
        document.getElementById("output-box").innerText = "You hit your number in " + numOfRolls + " rolls!";
        numOfRolls = 0;
    }
}
