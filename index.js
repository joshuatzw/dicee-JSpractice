// Random Number Generator + Assignment of dice
var player1Roll = Math.floor(Math.random() * 6) + 1;
var player2Roll = Math.floor(Math.random() * 6) + 1;

var diceSelected1 = "images/dice" + player1Roll + ".png"
var diceSelected2 = "images/dice" + player2Roll + ".png"


// Change the Dice Image for Players 1 and 2
document.querySelector(".dice .img1").setAttribute("src", diceSelected1);
document.querySelector(".dice .img2").setAttribute("src", diceSelected2);


//Logic
var titleText = document.querySelector(".title-text");

if (player1Roll > player2Roll){
    titleText.classList.add("victory-text");
    titleText.textContent = "Player 1 Wins!✨"
} else if (player1Roll < player2Roll){
    titleText.classList.add("victory-text");
    titleText.textContent = "Player 2 Wins!✨"
} else {
    titleText.classList.add("victory-text");
    titleText.textContent = "✨It's a draw, roll again!✨"
}

// Writing Function of button
function refreshPage(){
  location.reload();
}
