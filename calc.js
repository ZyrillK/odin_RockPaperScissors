

function playGame() {


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

/**
 * playRound
 * 
 * playRound takes two inputs and returns result of round
 * 
 * Take userInput, compare with compInput
 * to get all cases, must use switch within
 * conditionals
 */

function playRound(humanChoice, computerChoice) {

    console.log(`The computer chose ${computerChoice}`);
    console.log(`You chose ${humanChoice}`);

    let win = "You win! ";
    let lose = "You lose! ";
    let pbr = "Paper beats Rock";
    let rbs = "Rock beats Scissors";
    let sbp = "Scissors beats Paper";

    let result = "BUG :(";

    if(humanChoice === "rock") {

        switch(computerChoice) {
            case "paper":
                result = lose + pbr;
                break;
            case "scissors":
                result = win + rbs;
                break;
            default:
                result = "Tie!";
                break;
        }
    }
    else if(humanChoice === "paper") {

        switch(computerChoice) {
            case "scissors":
                result = lose + sbp;
                break;
            case "rock":
                result = win + pbr;
                break;
            default:
                result = "Tie!";
                break;
        }
    }
    else {

        switch(computerChoice) {
            case "paper":
                result = win + sbp;
                break;
            case "rock":
                result = lose + rbs;
            default:
                result = "Tie!";
                break;
        }
    }

    return result;

}

for(i = 0; i < 5; i++) {
    

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

let result = playRound(humanSelection, computerSelection);

console.log(result);

let tieTest = result;
result = result.substring(4,7);



if (result === 'win') 
    humanScore++;
else if (tieTest !== 'Tie!')
    computerScore++;

}


console.log(`Human score is ${humanScore}`);
console.log(`Computer score is ${computerScore}`);

}

//main

playGame();
