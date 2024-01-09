function playGame() {
    var userChoice = document.getElementById("userChoice").value.toLowerCase();
    var options = ["rock", "paper", "scissors"];
    var computerChoice = options[Math.floor(Math.random() * options.length)];

    var result = document.getElementById("result");

    if (options.indexOf(userChoice) === -1) {
        result.innerHTML = "Invalid input. Please enter rock, paper, or scissors.";
    } else {
        result.innerHTML = `You chose ${userChoice} and computer chose ${computerChoice}.<br>`;
        if (userChoice === computerChoice) {
            result.innerHTML += "It's a Draw";
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            result.innerHTML += "You Won!";
        } else {
            result.innerHTML += "You Lose!";
        }
    }
}
