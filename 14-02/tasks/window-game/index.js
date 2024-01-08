function randomNum() {
  let result = Math.floor(Math.random() * 10) + 1; // 1 -  10
  return result;
  // other way
  //return Math.floor(Math.random() * 10) + 1; // 1 -  10
}
function guessingGame() {
  let chanceNum = randomNum();
  console.log(chanceNum);
  let count = 1;
  let userNum = parseInt(prompt("Please enter num 1-10."));
  while (count < 3 && chanceNum !== userNum) {
    userNum = parseInt(prompt("Please enter num 1-10."));
    console.log(userNum);
    count++;
  }
  if (userNum === chanceNum && count < 3) {
    alert("You are the best 🎄");
  } else {
    alert(`Sorry, it'S not your day. the number was ${chanceNum}`);
  }
}

guessingGame();
