var wins = 0;
var ties = 0;
var losses = 0;
var options = ["R", "P", "S"];

//-----------------------------------------------------------------
var playGame = function() {

  var userPick = promptUser();
  var compPick = generateCompPick();
  var result = determinWin(userPick, compPick);


  alert("Computer's Choice: " +compPick);
  alert("Wins: " + wins + "\n" + "Losses: " + losses + "\n" + "Ties: " + ties + "\n" + result);
};
//-----------------------------------------------------------------
function promptUser(){

   var userPick = window.prompt("Enter R, P, or S:");
   if (!userPick) {
     return;
   }

userPickUpperCase = userPick.toUpperCase();

  if(userPickUpperCase !== "R" && userPickUpperCase !== "P" && userPickUpperCase !== "S") {
    return promptUser();
  }
  return userPick;
}
//-----------------------------------------------------------------
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//-----------------------------------------------------------------
function generateCompPick(){
  return options[getRandomInt(0, 2)];
}
//-----------------------------------------------------------------
function determinWin(userPick, compPick) {
  if(userPick === compPick){
    ties = ties + 1;
    return "Tie";
  }
  //user picks Rock
  if(userPick === "R" && compPick === "S"){
    wins = wins + 1;
    return "Win";
  }
  if(userPick === "R" && compPick === "P"){
    losses = losses + 1;
    return "Lose";
  }
  //user picks Scissors
  if(userPick === "S" && compPick === "P"){
    wins = wins + 1;
    return "Win";
  }
  if(userPick === "S" && compPick === "R"){
    losses = losses + 1;
    return "Lose";
  }
  //user picks Paper
  if(userPick === "P" && compPick === "R"){
    wins = wins + 1;
    return "Win";
  }
  if(userPick === "P" && compPick === "S"){
    losses = losses + 1;
    return "Lose";
  }
}

while(confirm("Do you want to play Rock Paper Scissors?")){
  playGame();

}

alert("Thanks for playing.")







 //, confirm(), prompt()
