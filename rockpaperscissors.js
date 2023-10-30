const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === "scissors" 
    || userInput === "paper" 
    || userInput === "rock" 
    || userInput === "bomb")
    {return userInput;} 
    else {console.log('error, please select again!')}
};

// console.log (getUserChoice('tom'));

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {return 'rock';}
    else if (randomNumber === 1) {return 'paper'}
    else {return 'scissors'}
}
//console.log (getComputerChoice());

 const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {return 'The game is a tie!';}
    else if (userChoice === 'rock') 
    {if (computerChoice === 'paper') 
    {return 'The computer wins!';} 
    else  
    {return 'You win!';}
}
    else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') 
        {return 'The computer wins!';} 
        else  
        {return 'You win!';}
    }
    else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') 
        {return 'The computer wins!';} 
        else  
        {return 'You win!';}
    }
    else (userChoice === 'bomb') 
        {return 'You win!'}
    
}
// console.log(determineWinner('paper', 'scissors'));

const playGame = () => {
    let userChoice = getUserChoice('SCISSORS');
    let computerChoice = getComputerChoice();
    console.log('The computer threw: ' + computerChoice);
    console.log('You threw: ' + userChoice);
    console.log(determineWinner(userChoice,computerChoice));
}

playGame(); 



