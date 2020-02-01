console.log("Hllo World!!!!!!")

//Coding Challenge 1
var markM = prompt("Mark's Mass?")
var markH = prompt("Mark's Height?")

//var johnM = prompt("John's Mass?")
//var johnH  = prompt("John's Height?")

//var johnBMI = johnM / johnH*johnH
var markBMI = markM / markH*markH

//var isMarkHigher = markBMI > johnBMI

console.log("Is Mark's BMI higher than Johns?")
//console.log(isMarkHigher)
//alert('Is Mark\'s BMI higher than John\'s?' + isMarkHigher)



//Coding Challenge 2
var players = [['John',[89,120,103]], ['Mark',[116,94,123]], ['Mary',[97,134,105]]];

function  winner_by_average(players) {
  var biggest_av = 0;
  var biggest_winner = "no one";
  for(i=0; i < players.length; i++) {
    scores = players[i][1]
    //figure out what's going on with scores lol
    var current_av = scores.reduce((a,b) => a + b, 0) / scores.length
    console.log(players[i][0] +"'s average is: "+current_av);
    if (current_av > biggest_av){
      biggest_av = current_av
      biggest_winner = players[i][0]
    }
  }
  console.log("The person with the best average is "+biggest_winner+" with score "+biggest_av);
}
winner_by_average(players);
