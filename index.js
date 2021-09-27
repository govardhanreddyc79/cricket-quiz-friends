const chalk = require('chalk');
var readlineSync = require('readline-sync')
var userName = readlineSync.question(chalk.yellowBright('What is your name ? '));
console.log(chalk.magenta('Hello ' + userName + ', Welcome to Cricket quiz !!!'))

score = 0

var highestScores = [{
  'name': 'Buddu',
  'score': 3
},{
 'name': 'Laddu',
  'score': 2 
}]
var qsOne = {
  'qtn':'Which team won the most number of ICC cricket world cups? ',
  'ans':'australia'
}
var qsTwo = {
  'qtn':'Which team has won cricket world cup in 1983? ',
  'ans':'india'
}
var qsThree = {
  'qtn':'Who won the first ever Cricket World Cup in 1975? ',
  'ans':'westindies'
}
var qsFour = {
  'qtn':'Who is the first batsman to cross 10,000 runs in tests? ',
  'ans':'gavaskar'
}
var qsFive = {
  'qtn':'Who is known as Captain Cool? ',
  'ans':'dhoni'
}

var questions = [qsOne,qsTwo,qsThree, qsFour,qsFive]

for (i=0;i<questions.length;i++){
  var currentQtn = questions[i]
  play(currentQtn.qtn, currentQtn.ans)
  console.log("-------------------------------------")
}

function play(qtn, ans){
  var userAns = readlineSync.question(chalk.cyanBright(qtn));
  if (userAns.toLowerCase() == ans){
    console.log(chalk.green("You're right !!!"))
    score = score+1
    console.log(chalk.yellow("Your current score is : "+ score))
  }else{
      console.log(chalk.red("You're wrong !!!"))
  }
}
console.log(chalk.yellowBright("Your total score is : "+ score))

console.log(chalk.blue("Checkout the highscores. If you should be there, send the screenshot of your score and I'll update in highscore data"))

for (j=0;j<highestScores.length;j++){
  currentItem = highestScores[j];
  console.log(currentItem.name +" : "+ currentItem.score)
}
console.log(chalk.magenta('Thank You !!'))