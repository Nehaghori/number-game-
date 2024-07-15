import inquirer from "inquirer";

// Function to handle the game logic
async function guessNumberGame() {
    console.log("Guess a number between 1 to 10");

    // Creating variables
    let a: number = Math.floor(Math.random() * 10) + 1;

    while (true) {
        let input = await inquirer.prompt({
            name: "guess",
            type: "number",
            message: "Enter your guess number: "
        });

        // Code for the given number
        let ans: number = input.guess;

        if (a === ans) {
            console.log("Congratulations! Your guess number is correct!");
            break;
        } else {
            console.log("Sorry, try again.");
            
            // Adding hint
            if (a > ans) {
                console.log("Hint: The number is higher.");
            } else {
                console.log("Hint: The number is lower.");
            }
        }
    }
    console.log("GAME OVER");
}

// Start the game
guessNumberGame();