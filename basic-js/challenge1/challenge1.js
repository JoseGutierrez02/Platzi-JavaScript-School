// Make rock, paper, scissors game with if statements
var rock = "rock";
var paper = "paper";
var scissor = "scissor";

var play = function(user, computer) {
  if(user === computer) {
    console.log("It's a tie");
  } else if(user === rock && computer === scissor) {
    console.log(`User wins with ${user}`);
  } else if(user === paper && computer === rock) {
    console.log(`User wins with ${user}`);
  } else if(user === scissor && computer === paper) {
    console.log(`User wins with ${user}`);
  } else {
    console.log(`Computer wins with ${computer}`);
  }
}

play(rock, paper);