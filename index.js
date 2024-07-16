var randomNumber1 = Math.floor((Math.random()*6)) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "./images/dice"+randomNumber1+".png");
var randomNumber2 = Math.floor((Math.random()*6)) + 1;
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice"+randomNumber2+".png");
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player one wins!"
}else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player two wins!"
}else{
    document.querySelector("h1").innerHTML = "It's a Tie!"
}