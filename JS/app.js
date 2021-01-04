'use strict';
var userName= prompt ("what is your name?");
alert ("Welcome "+userName);
confirm("lets play guessing game");
console.log(userName);

var favTeam= prompt(" Is Barcelona my favourate football team?");
if (favTeam.toLowerCase()=== "yes" || favTeam.toLowerCase()=== "y" ){
console.log("!!!!!True!!!!");
alert("!!!!!True!!!!");}
else if (favTeam.toLowerCase()===null || favTeam.toLowerCase()==="" ) {
console.log("why you did not answer?! ");
alert("why you did not answer?! "); }

else{ console.log("wrong");
alert("wrong");
   }
var fruit= prompt("Do I like Apple?");
if (fruit.toLocaleLowerCase()==="yes" || fruit.toLocaleLowerCase()==="y" ){
console.log("no I do not");
alert("no I do not ");
}
else if (fruit.toLocaleLowerCase()==="no" || fruit.toLocaleLowerCase()=== "n"){
console.log("you are good!");
alert("you are good!");
}
else {
console.log("-1; you did not answer!!");
alert("-1; you did not answer!!");
}

var movie = prompt("Is interstellar my favourate movie?");
if (movie.toLocaleLowerCase()==="yes" || movie.toLocaleLowerCase()==="y"){
console.log("true");
alert("true");
}
else if (movie.toLocaleLowerCase()==="" || movie.toLocaleLowerCase()===null){
console.log("you did not answer");
alert("you did not answer");
}
else{
console.log("false");
alert("false");
}

var facTecCompany = prompt(" Is apple my favourate company?")
if(facTecCompany.toLocaleLowerCase()==="y" || facTecCompany.toLocaleLowerCase()==="y" ){
console.log("yes,I like its products");
alert("yes,I like its products");
}
else if (facTecCompany.toLocaleLowerCase()=== null || facTecCompany.toLocaleLowerCase()===""){
console.log("empty answer!");
alert("empty answer!");
}
else{
console.log("false ");
alert("false");
}


var basketBall = prompt("Do I like BasketBall yes or no ?")
if(basketBall.toLocaleLowerCase()==="yes" || basketBall.toLocaleLowerCase()==="y"){
console.log("no I do not");
alert("no I do not");
}
else if (basketBall.toLocaleLowerCase()==="no" || basketBall.toLocaleLowerCase()==="n"){
console.log("true");
alert("true");
}
else {console.log("-1 for empty asnwer and random");
alert("-1 for empty and rondom answer");
}

console.log("Welcome again "+userName);
alert("Welcome again "+userName);