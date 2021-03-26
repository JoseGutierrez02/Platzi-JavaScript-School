// Make rock, paper, scissors game with switch statement
var rock = "rock";
var paper = "paper";
var scissor = "scissor";

var play = function(user, computer) {
  switch(true) {
    case (user === computer):
      console.log("It's a tie");
      break;
    case (user === rock && computer === scissor):
      console.log(`User wins with ${user}`);
      break;
    case (user === paper && computer === rock):
      console.log(`User wins with ${user}`);
      break;
    case (user === scissor && computer === paper):
      console.log(`User wins with ${user}`);
      break;
    default:
      console.log(`Computer wins with ${computer}`);
  }
}

play(scissor, paper);