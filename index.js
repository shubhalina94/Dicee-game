var randomVariable1=Math.floor(Math.random()*6)+1; //for player 1
var randomdiceimg1="images/dice" + randomVariable1 + ".png";
var image1=document.querySelectorAll("img")[0]; //for the 1st image
image1.setAttribute("src",randomdiceimg1);

var randomVariable2=Math.floor(Math.random()*6)+1; //for player 2
var randomdiceimg2="images/dice" + randomVariable2 + ".png";
var image2=document.querySelectorAll("img")[1]; //for the 2nd image
image2.setAttribute("src",randomdiceimg2);

if(randomVariable1>randomVariable2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomVariable1<randomVariable2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw! Cool!!";
}