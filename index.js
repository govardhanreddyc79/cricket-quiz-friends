var readlineSync = require('readline-sync')
var userName = readlineSync.question('What is your name ? ');
console.log('Hello ' + userName + ', Welcome to Cricket quiz !!!')

score = 0

var highestScores = [{
  'name': 'Buddu',
  'score': 3
},{
 'name': 'Laddu',
  'score': 2 
}]
var qsOne = {
  'qtn':'Which team won the most number of ICC cricket world cups ? ',
  'ans':'australia'
}
var qsTwo = {
  'qtn':'Which team has won cricket world cup in 1983 ? ',
  'ans':'india'
}
var qsThree = {
  'qtn':'Which team won the 2019 ICC cricket world cup ? ',
  'ans':'england'
}

var questions = [qsOne,qsTwo,qsThree]

for (i=0;i<questions.length;i++){
  var currentQtn = questions[i]
  play(currentQtn.qtn, currentQtn.ans)
  console.log("-------------------------------------")
}

function play(qtn, ans){
  var userAns = readlineSync.question(qtn);
  if (userAns.toLowerCase() == ans){
    console.log("You're right !!!")
    score = score+1
    console.log("Your current score is : "+ score)
  }else{
      console.log("You're wrong !!!")
  }
}
console.log("Your total score is : "+ score)

console.log("Checkout the highscores. If you should be there, send the screenshot of your score and I'll update in highscore data")
for (j=0;j<highestScores.length;j++){
  currentItem = highestScores[j];
  console.log(currentItem.name +" : "+ currentItem.score)
}
console.log('Thank You !!')