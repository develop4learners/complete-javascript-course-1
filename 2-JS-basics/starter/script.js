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
    //return this.bmi
  }
};
john.calcBMI(); //I can also have this method return this.bmi, so when calling john.calcBMI() it's no longer void.
mark.calcBMI(); //However, return IS NOT REQUIRED in order for this.bmi to become attribute
console.log(john.name+'\'s BMI: '+john.bmi)
console.log(mark.name+'\'s BMI: '+mark.bmi)
//    only if you return in method:
//console.log("John's is: "+john.calcBMI()+"Mark's is "+mark.calcBMI());
//    Note: First, I wish I could define "Person" class so I didn't have
//    to redefine calcBMI as it's own method for both john & mark Objects
//    Second, it seems like bmi should already be calculated without
//    me needing to do the method outside the object. Maybe BMI is a weird example. Like it doesn't feel like it should take an extra step to calculate it. idk



//Coding Challenge 5
class CheckBook { //changed from var myCheckBook
  constructor(myName, bills, rates){
    this.myName = myName,
    this.bills = bills,
    this.rates = rates,
    this.tipDollars = [];
    this.finalBills = [];
  }
  calcTips(){
    var rates = this.rates;
    var bills = this.bills;
    var finalBills = this.finalBills;
    var tipDollars = this.tipDollars;
    for(i=0; i<bills.length; i++){
      var bill = bills[i];
      switch(true) {
        case bill < rates.s.cutoff:
          tipDollars.push(rates.s.percent*bill);
          finalBills.push(bill + rates.s.percent*bill);
          break;
        case rates.s.cutoff <= bill && bill <= rates.m.cutoff:
          tipDollars.push(rates.m.percent*bill);
          finalBills.push(bill + rates.m.percent*bill);
          break; //if you "return" in one of these cases, you can skip the break;
        default:
          tipDollars.push(rates.l.percent*bill);
          finalBills.push(bill + rates.l.percent*bill);
      }
    }
    return [tipDollars,finalBills];
  }
};
function averageTipDollars(tipDollarsArr){
  return tipDollarsArr.reduce((a,b) => a + b, 0) / tipDollarsArr.length
};
var rates_j = {
  s:{cutoff:50,percent:.2},//s means "Small Bill"
  m:{cutoff:200,percent:.15},//m means "medium bill"
  l:{cutoff:10000000,percent:.1} //l means "large bill"
};
var bills_j = [124,48,268,180,42];
const johnsCheckBook = new CheckBook("John", bills_j, rates_j);
johnsCheckBook.calcTips();

var rates_m = {
  s:{cutoff:100,percent:.2},//s means "Small Bill"
  m:{cutoff:300,percent:.1},//m means "medium bill"
  l:{cutoff:10000000,percent:.25} //l means "large bill"
};
var bills_m = [77,375,110,45];
const marksCheckBook = new CheckBook("Mark", bills_m, rates_m);
marksCheckBook.calcTips();

//Calculate the average tipDollars paid for each family, log to the console which family paid the highest tips on average
var dollarsMark = averageTipDollars(marksCheckBook.tipDollars);
var dollarsJohn = averageTipDollars(johnsCheckBook.tipDollars);
console.log("Mark paid "+dollarsMark+" average for tips");
console.log("John paid "+dollarsJohn+" average for tips");
