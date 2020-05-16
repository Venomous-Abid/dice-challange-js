
var rand =Math.floor(Math.random() * 6) + 1; //random 1-6

var randDiceImage="dice"+rand+".png"; //dice1.png - dice.6.png

var randomImageSource ="images/" + randDiceImage;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);


var rand2 =Math.floor(Math.random() * 6) + 1;

var randomImageSource2 ="images/dice"+rand2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);