// jshint esversion: 7

//define helper functions here

let rollDie = () => {
  return Math.floor (Math.random() * 6) + 1;
};

//Define a controller to handle the button click
let controller = () => ();
  let target, die1, die2, rollCount = 0 ,
    die1URL, die2URL, imgElem1, cheeryMsg;

//get the target number from the web page
target = document.querySelector("input").value;
console.log(target);

//roll the targer number (and count rolls)

do {
  //roll dice
  die1 = rollDie();
  die2 = rollDie();

  //increment the roll counter

  //log the dice and the counter
  console.log(``);

} while (die1 + die2 != target);

 //update images on web page
 die1URL = `images/die${die1}.gif`;
 console.log(die1URL);
 imgElem1 = document.querySelector("img");
 imgElem1.setAttribute("src", die1URL);



 imgElem2 = document.querySelectorAll("img")[1];

 //display number of rolls on the webpage

 cheeryMsg = `You hit your number in ${1} roll ${(rollCount == 1)?"":"s"}!`;
 document.querySelector("div").innerHTML = cheeryMsg;


}

//Register the controller after the DOM is complete
window.addEventListener("load", function() {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
