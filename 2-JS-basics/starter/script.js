console.log("Hllo World!!!!!!")

var markM = prompt("Mark's Mass?")
var markH = prompt("Mark's Height?")

var johnM = prompt("John's Mass?")
var johnH  = prompt("John's Height?")

var johnBMI = johnM / johnH*johnH
var markBMI = markM / markH*markH

var isMarkHigher = markBMI > johnBMI

console.log("Is Mark's BMI higher than Johns?")
console.log(isMarkHigher)
alert('Is Mark\'s BMI higher than John\'s?' + isMarkHigher)
