var randomNumber1= Math.floor(Math.random()*6)+1;
randomDice="images/dice"+randomNumber1+".png";
document.querySelector("img.img1").setAttribute("src",randomDice);

var randomNumber2= Math.floor(Math.random()*6)+1;
randomDice="images/dice"+randomNumber2+".png";
document.querySelector("img.img2").setAttribute("src",randomDice);

if(randomNumber1>randomNumber2)
{
    document.querySelector("div h1").innerHTML="🚩 Play 1 Wins!";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("div h1").innerHTML="Player 2 Wins! 🚩";
}
else if(randomNumber1===randomNumber2)
{
    document.querySelector("div h1").innerHTML="🚩 Draw 🚩";
}
