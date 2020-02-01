//Coding Challenge 1
//var markM = prompt("Mark's Mass?")
//var markH = prompt("Mark's Height?")
//var johnM = prompt("John's Mass?")
//var johnH  = prompt("John's Height?")
//var johnBMI = johnM / johnH*johnH
//var markBMI = markM / markH*markH
//var isMarkHigher = markBMI > johnBMI

console.log("Is Mark's BMI higher than Johns?")
//console.log(isMarkHigher)
//alert('Is Mark\'s BMI higher than John\'s?' + isMarkHigher)



//Coding Challenge 2
//practices tricky arrays, such as the "=>" and the function reduce()!!! Review of for loop syntax
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
var players = [['John',[89,120,103]], ['Mark',[116,94,123]], ['Mary',[97,134,105]]];
winner_by_average(players);

//Coding challenge #3. It feels so strange not to specify the return type!!!!
//JS doesn't have array.append, it has array.push!
//The bellow is a function expression rather than normal function statements (see Challenge 2)
//--- Expression (def) must evaluate to a not-undefined value, statement need not. Statement is like if(true) {console.log(22)}
//Also practices switch/case instead of if/else
var tips_and_final_bills = function(preTipBills){
  var tips = [];
  var finalBills = [];
  for(i=0; i<preTipBills.length; i++){
    bill = preTipBills[i];
    switch(true){
      case bill < 50:
        tips.push(.2*bill);
        finalBills.push(bill + .2*bill);
        break;
      case 50 <= preTipBills[i] && preTipBills[i] <= 200:
        tips.push(.15*bill);
        finalBills.push(bill + .15*bill);
        break; //if you "return" in one of these cases, you can skip the break;
      default:
        tips.push(.1*bill);
        finalBills.push(bill + .1*bill);
    }
  }
  console.log("Tips: "+tips+" finalBills: "+finalBills);
  return [tips, finalBills];
}
var preTipBills = [124, 48, 268]
var finalBills = tips_and_final_bills(preTipBills)[1];
var bigBill = finalBills.reduce((a,b) => a + b, 0);
var isBroke =  bigBill > 300 ? true : false;
console.log("I spent $"+bigBill+" at "+finalBills.length+" restaurants. Am I broke now? "+isBroke);


//Coding Challenge 4 Objects and Methods!
//Implement the BMI comparison but this time with objects and methods!
var john = {
  name:"John",
  mass:100,
  height:5,
  calcBMI: function(){
    this.bmi = this.mass / (this.height*this.height);
  }
};
var mark = {
  name:"Mark",
  mass:110,
  height:5.5,
  calcBMI: function(){
    this.bmi = this.mass / (this.height*this.height);
  }
};
john.calcBMI();
mark.calcBMI();
console.log(john.name+'\'s BMI: '+john.bmi)
console.log(mark.name+'\'s BMI: '+mark.bmi)
//Note: First, I wish I could define "Person" class so I didn't have
//to redefine calcBMI as it's own method for both john & mark Objects
//Second, it seems like bmi should already be calculated without
//me needing to do the method outside the object. Maybe BMI is a weird example. Like it doesn't feel like it should take an extra step to calculate it. idk
