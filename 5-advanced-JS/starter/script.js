//var answer = prompt("Which is the correct answer?");
//console.log(answer);

var Question = function(questNum, question, answersObject, correctAnsNum){
  this.questNum = questNum;
  this.question = question;
  this.answersObject = answersObject;
  this.correctAnsNum = correctAnsNum;
  this.displayToPlayer = function() {
    console.log(questNum+". "+question);
    //Object.keys(this.answersObject).forEach(function(key) {
      //console.log(key, this.answersObject[key]);
    var theKeys = Object.keys(this.answersObject);
    for(i=0;i<theKeys.length;i++){
      console.log(i+" --> "+this.answersObject[i]);
    }
    };
  }

var question0 = new Question(0,"What is the instructor's name?",
  {0:"Jonas", 1:"Mike"}, 0);
var question1 =  new Question(1,"What word best describes coding?",
   {0:"Hard",1:"Boring",2:"Fun",4:"Hilarious"},2);
var questionObjectsArray = [question0,question1];

var score = 0;
while(true){
  var questNum = init();
  input = prompt("What is the correct answer?");
  if(input==="exit"){break;}
  else{
    if (!isCorrectAnswer(input, questNum)){console.log("Wrong!!!!!!!!!!! Try again");}
    else {
      score++;
    }
    console.log(score);
  }
}

function init(){
  //M.rand returns [0,1], multiply by number of questions in the array to get a rand question number
  var randQuestNum = Math.floor(Math.random()*questionObjectsArray.length);
  var toDisplay = questionObjectsArray[randQuestNum];
  toDisplay.displayToPlayer();
  return randQuestNum;
}

function isCorrectAnswer(input, questNum){
  var question = questionObjectsArray[questNum];
  return question.correctAnsNum === parseInt(input);
}
