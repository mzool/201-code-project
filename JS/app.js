'use strict';
//Welcoming
var grade = 0;
var userName = prompt("what is your name?");
while (userName === null || userName === "") { var userName = prompt("what is your name?"); }
alert("Welcome " + userName);
confirm("lets play yes/no game");

function yes(Inputs) {
   var userInputs = Inputs;
   while (userInputs.toLowerCase() !== 'yes' && userInputs.toLowerCase() !== 'y' && userInputs.toLowerCase() !== 'no' && userInputs.toLowerCase() !== 'n') { var userInputs = prompt('Invalid answer!'); }
   if (userInputs.toLowerCase() === 'yes' || userInputs.toLowerCase() === 'y') { alert("True"); grade++; }
   else { alert("False"); }
}

function no(Inputs) {
   var userInputs = Inputs;
   while (userInputs.toLowerCase() !== 'yes' && userInputs.toLowerCase() !== 'y' && userInputs.toLowerCase() !== 'no' && userInputs.toLowerCase() !== 'n') { var userInputs = prompt('Invalid answer!'); }
   if (userInputs.toLowerCase() === 'no' || userInputs.toLowerCase() === 'n') { alert("True"); grade++; }
   else { alert("False"); }

}
// First five questions:
var favTeam = prompt(" Is Barcelona my favourate football team?");
yes(favTeam);
var TecCompany = prompt(" Is apple my favourate company?");
no(TecCompany);
var fruit = prompt("Do I like Orange?");
yes(fruit);
var movie = prompt("Is interstellar my favourate movie?");
yes(movie);
var basketBall = prompt("Do I like BasketBall yes or no ?");
no(basketBall);


// 6th question
q6();
function q6() {
   var trueAnswer = 3;
   for (var i = 1; i <= 4; i++) {
      var guissNumber = prompt("I put a number in my head, can you guess what it?");
      if (parseInt(guissNumber) === 3) { alert("Amazing!!!!"); grade++; break; }
      if (parseInt(guissNumber) <= 2) {
         alert("too low");
      }
      if (parseInt(guissNumber) >= 4) {
         alert("too high");
      }
      if (i === 4) { alert("the answer is 3!"); }

   }
}
q7();
function q7() {
   var countriesList = ['JORDAN', 'ENGLAND', 'UAE', 'USA', 'LEBANON', 'PALASTINE'];
   var correct = false;
   var j = 0;
   while (j <= 5 && correct === false) {
      var favcountry = prompt('Guess what is my fovourate countries?');
      for (var js = 0; js < countriesList.length; js++) {
         if (favcountry.toUpperCase() === countriesList[js].toUpperCase()) {
            alert("TRUE");
            var correct = true;
            grade++;
            break;
         }
      }
      j++;
   }
}

alert('THE ANSWERS ' + 'JORDAN, ENGLAND, UAE, USA, LEBANON, PALASTINE');
alert("Your grade is " + grade + ' from 7');






//console.log(userName);
/*firstTest();
firstTest2();
firstTest3();
firstTest4();
firstTest5();
q6();
q7();*/
/*function firstTest() {
   //firs qustion
   var favTeam = prompt(" Is Barcelona my favourate football team?");
   if (favTeam.toLowerCase() === "yes" || favTeam.toLowerCase() === "y") {
      alert("!!!!!True!!!!");
        //console.log("!!!!!True!!!!");
      counter();
   }
   while (favTeam.toLowerCase() === null || favTeam.toLowerCase() === "") {
      //console.log("why you did not answer?! ");
      var favTeam = prompt(" Is Barcelona my favourate football team?");
   }

   if (favTeam.toLowerCase() === "no" || favTeam.toLowerCase() === "n") {
      console.log("wrong");
      alert("wrong");
   }
}
function firstTest2() {
   //second quesstion
   var fruit = prompt("Do I like Apple?");
   if (fruit.toLowerCase() === "yes" || fruit.toLowerCase() === "y") {
      alert("no I do not ");
          //console.log("no I do not");
   }
   if (fruit.toLowerCase() === "no" || fruit.toLowerCase() === "n") {
      alert("you are good!");
         //console.log("you are good!");
      counter();
   }
   while (fruit === null || fruit === "") {
      var fruit = prompt("Do I like Apple?");
      //console.log("-1; you did not answer!!");
   }

}
function firstTest3() {

   // third question

   var movie = prompt("Is interstellar my favourate movie?");
   if (movie.toLowerCase() === "yes" || movie.toLowerCase() === "y") {

      alert("true");
      counter();
      //console.log("true");
   }
   while (movie.toLowerCase() === "" || movie.toeLowerCase() === null) {
      var movie = prompt("Is interstellar my favourate movie?");
   }
   if (movie.toLowerCase() === "no" || movie.toLowerCase() === "n") {

      alert("false");
      //console.log("false");
   }


}

function firstTest4() {
   // 4th question
   var facTecCompany = prompt(" Is apple my favourate company?")
   if (facTecCompany.toLowerCase() === "y" || facTecCompany.toLowerCase() === "y") {
      //console.log("yes,I like its products");
      alert("yes,I like its products");
      counter();
   }
   while (facTecCompany.toLowerCase() === null || facTecCompany.toLowerCase() === "") {
      var facTecCompany = prompt(" Is apple my favourate company?")
      //console.log("empty answer!");
   }
   if ((facTecCompany.toLowerCase() === "n" || facTecCompany.toLowerCase() === "no")){
      alert("false");
      //console.log("false ");
   }

}
function firstTest5() {
   //5th question
   var basketBall = prompt("Do I like BasketBall yes or no ?")
   if (basketBall.toLowerCase() === "yes" || basketBall.toLowerCase() === "y") {
     alert("no I do not");
       //console.log("no I do not");
   }
   if (basketBall.toLowerCase() === "no" || basketBall.toLowerCase() === "n") {
      alert("true");
      //console.log("true");
      counter();
   }
   while(basketBall.toLowerCase() === "" || basketBall.toLowerCase() === null) {
      var basketBall = prompt("Do I like BasketBall yes or no ?");
   }
}





// 6th question
function q6() {
   var trueAnswer = 3;
   for (var i = 1; i <= 4; i++) {
      var guissNumber = prompt("I put a number in my head, can you guess what it?");
      if (parseInt(guissNumber) === 3) { alert("Amazing!!!!"); counter(); break; }
      if (parseInt(guissNumber) <= 2) {
         alert("too low");
      }
      if (parseInt(guissNumber) >= 4) {
         alert("too high");
      }
      if (i === 4) { alert("the answer is 3!"); }

   }
}


// 7th question
function q7() {

   var countriesList = ['JORDAN', 'ENGLAND', 'UAE', 'USA', 'LEBANON', 'PALASTINE'];

   var correct = false;
   var j = 0;
   while (j <= 5 && correct === false) {
      var favcountry = prompt('Guess what is my fovourate countries? ALL LETTERS ARE CAPITAL');
      for (var js = 0; js < countriesList.length; js++) {

         if (favcountry.toLowerCase() === countriesList[js].toLowerCase()) {
            alert("TRUE");
            var correct = true;
            counter();
            break;
         }
      }
      j++;
   }
   alert('THE ANSWERS ' + 'JORDAN, ENGLAND, UAE, USA, LEBANON, PALASTINE');
   alert('YOUR SCOORE ' + grade.toString() + ' from 7');
}
counter();
function counter() {
   grade++;

}*/