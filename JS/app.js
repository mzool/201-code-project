"use strict";
//Welcoming
var userName = prompt("what is your name?");
alert("Welcome " + userName);
confirm("lets play guessing game");
//console.log(userName);

//firs qustion
var favTeam = prompt(" Is Barcelona my favourate football team?");
if (favTeam.toLowerCase() === "yes" || favTeam.toLowerCase() === "y") {
   //console.log("!!!!!True!!!!");
   alert("!!!!!True!!!!");
}
else if (favTeam.toLowerCase() === null || favTeam.toLowerCase() === "") {
   //console.log("why you did not answer?! ");
   alert("why you did not answer?! ");
}

else {
   console.log("wrong");
   alert("wrong");
}
//second quesstion
var fruit = prompt("Do I like Apple?");
if (fruit.toLowerCase() === "yes" || fruit.toLowerCase() === "y") {
   //console.log("no I do not");
   alert("no I do not ");
}
else if (fruit.toLowerCase() === "no" || fruit.toLowerCase() === "n") {
   //console.log("you are good!");
   alert("you are good!");
}
else {
   //console.log("-1; you did not answer!!");
   alert("-1; you did not answer!!");
}
// third question
var movie = prompt("Is interstellar my favourate movie?");
if (movie.toLowerCase() === "yes" || movie.toLowerCase() === "y") {
   //console.log("true");
   alert("true");
}
else if (movie.toLowerCase() === "" || movie.toeLowerCase() === null) {
   //console.log("you did not answer");
   alert("you did not answer");
}
else {
   //console.log("false");
   alert("false");
}
// 4th question
var facTecCompany = prompt(" Is apple my favourate company?")
if (facTecCompany.toLowerCase() === "y" || facTecCompany.toLowerCase() === "y") {
   //console.log("yes,I like its products");
   alert("yes,I like its products");
}
else if (facTecCompany.toLowerCase() === null || facTecCompany.toLowerCase() === "") {
   //console.log("empty answer!");
   alert("empty answer!");
}
else {
   //console.log("false ");
   alert("false");
}

//5th question
var basketBall = prompt("Do I like BasketBall yes or no ?")
if (basketBall.toLowerCase() === "yes" || basketBall.toLowerCase() === "y") {
   //console.log("no I do not");
   alert("no I do not");
}
else if (basketBall.toLowerCase() === "no" || basketBall.toLowerCase() === "n") {
   //console.log("true");
   alert("true");
}
else {
   //console.log("-1 for empty asnwer and random");
   alert("-1 for empty and rondom answer");
}

//console.log("Welcome again "+userName);
alert("Welcome again " + userName);

//end of lab one

var trueAnswer= 3;
var guissNumber = prompt("I put a number in my head, can you guess what it?");
for(var i =1; i<=4; i++){
if(guissNumber.parseInt() !== trueAnswer){
   switch()
}

}