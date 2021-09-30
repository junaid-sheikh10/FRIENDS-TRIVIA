var readlineSync=require('readline-sync');
var name=readlineSync.question("whats your name?")
console.log("Hey "+name+" !")
console.log("Welcome to FRIENDS Trivia ")
console.log("********************************")

//var question1="what's my favourite color?";
//console.log(question1)
//var useranswer=readlineSync.question()
//var answer1="black"

var score=0
var highScores = [
  {
    name: "junaid",
    score: 4,
  },

  {
    name: "alina",
    score: 2,
  },
]

function play(que,ans){
  console.log(que)
  var useranswer=readlineSync.question();

  if(useranswer.toLowerCase()===ans){
    console.log("You are RIGHT !!")
    score=score+1
  }
  else{
    console.log("You are WRONG!!!")
  }
  console.log("score:"+score)
  console.log("-----------------")
}

play("How many sisters does Joey have?","7")
play("Who hates Thanksgiving","chandler")
play("What is the name of Phoebe's most popular song","Smelly Cats")
play("Who says the last line of the series ?","Chandler")

console.log("Thanks for playing the game "+name)
console.log("Your final score is "+score)

console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))

  