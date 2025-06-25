
var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
var image1="dice"+randomNumber1+".png";

document.getElementById("img1").setAttribute("src",image1)
var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;
var image2="dice"+randomNumber2+".png";
document.getElementById("img2").setAttribute("src",image2)
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}