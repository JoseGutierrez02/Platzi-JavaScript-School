function printLastLetter() {
  var userName = prompt("Enter your name");
  var lastLetter = userName.charAt(userName.length - 1);
  
  console.log(`The last letter of your name is: ${lastLetter}`);
}