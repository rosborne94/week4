var num1 = "";
var num2 = "";
var num3 = "";
var answer = "";
function createRandomNumbers(){
    num1 = parseInt(Math.random() * 9);
    num2 = parseInt(Math.random() * 9);
    num3 = parseInt(Math.random() * 9);
    answer = parseInt(Math.random() * 9);
    console.log("This is the answer: " + answer);
}
function newGame(){
    createRandomNumbers();
}