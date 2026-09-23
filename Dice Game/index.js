var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber1);

console.log(randomNumber2);


var random1DiceImg = "dice" + randomNumber1 + ".png"
console.log(random1DiceImg);

var random2DiceImg = "dice" + randomNumber2 + ".png"
console.log(random2DiceImg);

var img1Src = `./images/${random1DiceImg}`
console.log(img1Src);

var img2Src = `./images/${random2DiceImg}`
console.log(img2Src);



document.querySelector('.img1').setAttribute('src', img1Src);
document.querySelector('.img2').setAttribute('src', img2Src)

if (randomNumber1 > randomNumber2) {
    console.log("Player 1 Wins");
    document.querySelector('h1').innerHTML = "Player 1 Wins"
    
} else if (randomNumber1 === randomNumber2) {
    console.log("Draw");
    document.querySelector('h1').innerHTML = "Draw"
    
} else {
    console.log("P 2 Wins");
    document.querySelector("h1").innerHTML = "Player 2 Wins"
    
}



