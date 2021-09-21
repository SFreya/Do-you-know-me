var readlineSync = require('readline-sync');
var finalScore=0;
var playerName=readlineSync.question("Hey! ur name plz ? ");

console.log("Nice to have you "+ playerName + " to do you know Sakshi ?");

function quiz(question,answer)
{
  var userAnswer=readlineSync.question(question);

  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log("Yipee ;) you are Right.");
    finalScore=finalScore+1;
  }
  else
  {
    console.log("Ohh No :( You are wrong");
    finalScore=finalScore-1;
  }

  console.log("Current Score = ",finalScore);
    console.log("*******************");
}

//quiz("where i live ? ","patna");

var questions=[{
  question : "My favourite color ? ",
  answer: "Blue"
} ,{
  question:"My Hometown ? ",
  answer:"Patna"
}, {
  question:"My favourite sports ? ",
  answer:"Badminton"
},
{
  question:"Where do I study (city) ? ",
  answer:"Pune"
},
{
  question:"My favourite cartoon ? ",
  answer:"Tom & Jerry"
},
{
  question:"My last name ? ",
  answer:"Sahay"
}];

for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i];
  quiz(currentQuestion.question,currentQuestion.answer);
}

console.log("Your total score is : "+ finalScore);
console.log("*******************");

console.log("Check out the score board ");
