
/**
 * Get ComputerChoice
 * 
 * When invoked, returns "rock", "paper", or "scissors" randomly
 * 
 * GET random number between 1 and 100 from (Math.random() * 100) + 1
 * DETERMINE if random number is between 1-33, 34-66,67-100
 * RETURN string according to random number placement
 */

function getComputerChoice() {

    let randomNum = Math.floor(Math.random() * 100) + 1;

    if(randomNum <= 33)
        return "rock";
    else if(randomNum >= 67)
        return "paper";
    else 
        return "scissors";
}

/**
 * Get HumanChoice
 * 
 * When invoked, asks user for input and replies with the input. Ensure input is valid
 * 
 * GET input from user
 * WHILE input from is not valid
 *  GET input from user
 * RETURN input from user
 * 
 */

function getHumanChoice() {

    let keepGoing = true;
    let userInput = "";

    while(keepGoing) {

        userInput = prompt("Enter Input");
        userInput = userInput.toLowerCase();

        switch(userInput) {
            case "rock":
            case "scissors":
            case "paper":
                keepGoing = false;
            break;
        }
    }

    return userInput;
}

let computerScore = 0;
let humanScore = 0;
