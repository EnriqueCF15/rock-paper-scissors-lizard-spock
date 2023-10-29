//Declare the possibilities

const options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
const results = ["It´s Draw!", "You Win!", "You Lose!"];

const rules = {
  Rock: ["Scissors", "Lizard"],
  Paper: ["Rock", "Spock"],
  Scissors: ["Paper", "Lizard"],
  Lizard: ["Spock", "Paper"],
  Spock: ["Scissors", "Rock"],
};

//Function where the computer makes its choice
function playComputer() {
  return options[Math.floor(Math.random() * options.length)];
}

//Function that returns the result of the compairison of playerChoice and computerChoice
function finalResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return results[0];

  //   return computerChoice === rules[playerChoice] ? results[1] : results[2];
  return rules[playerChoice].includes(computerChoice) ? results[1] : results[2];
}

//Function that executes the previous functions and displays the result and choices
function playGame(playerChoice) {
  const computerChoice = playComputer();
  const res = finalResult(playerChoice, computerChoice);

  document.getElementById("user-choice").textContent = playerChoice;
  document.getElementById("computer-choice").textContent = computerChoice;
  document.getElementById("result").textContent = `You choose ${playerChoice} and the computer choose ${computerChoice}. Result: ${res} `;
}

//Select the buttons container
const buttonsContainer = document.getElementById("buttons-container");

//Adds the listeners when a button is clicked to execute the
buttonsContainer.addEventListener("click", (e) => {
  if (e.target && e.target.nodeName === "BUTTON") {
    const playerChoice = e.target.id;
    playGame(playerChoice);
  }
});
