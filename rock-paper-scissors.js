player = Math.floor(Math.random() * 3)
computer = Math.floor(Math.random() * 3)
playerchoice = ""
computerchoice = ""
winnerMessage = ""

if (player == 1 && computer == 2) {
    playerchoice = "Paper"
    computerchoice = "Scissors"
    winnerMessage = "The computer won!"
} else if (player == 2 && computer == 2) {
    playerchoice = "Scissors"
    computerchoice = "Scissors"
    winnerMessage = "Draw!"
} else if (player == 0 && computer == 2) {
    playerchoice = "Rock"
    computerchoice = "Scissors"
    winnerMessage = "The player won!"
} else if (player == 0 && computer == 1) {
    playerchoice = "Rock"
    computerchoice = "Paper"
    winnerMessage = "The computer won!"
} else if (player == 0 && computer == 0) {
    playerchoice = "Rock"
    computerchoice = "Rock"
    winnerMessage = "Draw!"
} else if (player == 1 && computer == 1) {
    playerchoice = "Paper"
    computerchoice = "Paper"
    winnerMessage = "Draw!"
} else if (player == 1 && computer == 0) {
    playerchoice = "Paper"
    computerchoice = "Rock"
    winnerMessage = "The player won!"
} else if (player == 2 && computer == 1) {
    playerchoice = "Scissors"
    computerchoice = "Paper"
    winnerMessage = "The player won!"
} else if (player == 2 && computer == 0) {
    playerchoice = "Scissors"
    computerchoice = "Rock"
    winnerMessage = "The computer won!"
}

console.log("Player picked: " + playerchoice)
console.log("Computer picked: " + computerchoice)
console.log(winnerMessage)
