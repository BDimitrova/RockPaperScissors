function rockPaperScissors(playerTurn) {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    if (playerTurn == "r" || playerTurn == "rock") {
        playerTurn = rock;
    } else if (playerTurn == "p" || playerTurn == "paper") {
        playerTurn = paper;
    } else if (playerTurn == "s" || playerTurn == "scissors") {
        playerTurn = scissors;
    } else {
        console.log("Invalid Input. Try Again...");
    }

    console.log(`You choose ${playerTurn}`);

    let computerTurn = Math.floor(Math.random() * 3) + 1;

    switch(computerTurn) {
        case 1:
            computerTurn = rock;
            break;
        case 2:
            computerTurn = paper;
            break;
        case 3:
            computerTurn = scissors;
            break;
    }

    console.log(`The computer chooses ${computerTurn}`);

    if ((playerTurn === rock && computerTurn === scissors) || (playerTurn === paper && computerTurn === rock) || (playerTurn === scissors && computerTurn === paper)) {
        console.log("\x1b[32mYou win!\x1b[0m");
    } else if ((playerTurn === scissors && computerTurn === rock) || (playerTurn === rock && computerTurn === paper) ||(playerTurn === paper && computerTurn === scissors)) {
        console.log("\x1b[31mYou lose!\x1b[0m");
    } else {
        console.log("\x1b[33mThis game was a draw!\x1b[0m");
    }
}
rockPaperScissors("s")