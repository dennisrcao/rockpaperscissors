let playerScore = 0
let computerScore = 0
let ties = 0



function computerPlay() 
{
    let temp_number = Math.floor(Math.random()*3) //select random number, 0 1 or 2
    switch(temp_number) 
    {
        case 0:
          return 'Rock'
        case 1:
          return 'Paper' 
        default:
          return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection)
{
    let newPlayerSelection = capitalizeFirstLetter(playerSelection)
    let outcomeNum = 0 /*  0 tie 1 p win 2 c wins*/

    if (newPlayerSelection === computerSelection) 
    {   
        console.log("Computer picked: " + computerSelection + "  \n     This round It's a tie!")
        ties = ties + 1
    }
        
    else if ((newPlayerSelection === "Rock" &&  computerSelection === "Scissors") || (newPlayerSelection === "Paper" &&  computerSelection === "Rock") || (newPlayerSelection === "Scissors" &&  computerSelection === "Paper"))
    {
        window.alert("Computer picked: "+ computerSelection + "   \n     This round Player wins " + newPlayerSelection + " beats " + computerSelection)
        playerScore = playerScore+1
       outcomeNum=1
    }
    else
    {
        window.alert("Computer picked: "+ computerSelection + "  \n    This round Computer wins "+ computerSelection + " beats " + newPlayerSelection)
        computerScore = computerScore+1
        outcomeNum=2 
    }
    return outcomeNum
}


function capitalizeFirstLetter(string) 
{
    /*Make your function’s playerSelection parameter case-insensitive  (so users can input rock, ROCK, RocK 
        or any other variation).*/
    let restOfStr= string.slice(1).toLowerCase()
    return string.charAt(0).toUpperCase() + restOfStr 
  }


function game()
{
    for (let i=0; i<5; i++) /*play game 5 times*/
    {   
        let playerSelection = prompt("Choose your weapon: Rock, Paper or Scissors")        /*select random for player*/
        let computerSelection = computerPlay();
        console.log("Round .... " + i);
        console.log("Player selected " + playerSelection);
        console.log("Computer selected " + computerSelection);
        playRound(playerSelection, computerSelection);
    }

    console.log("ties = " + ties + " player score = " + playerScore + " computer Score = " + computerScore)
    if (playerScore===computerScore)
    {
        return "Final : It's a tie"
    }
    else if (playerScore > computerScore)
    {
        return "Final : Player Wins"
    } 
    else if (computerScore > playerScore)
    {
        return "Final : Computer Wins"
    } 
    
}



/*
  const playerSelection = "scissors";
  const computerSelection = computerPlay();
  console.log("Computer selected" + computerSelection);
  console.log(playRound(playerSelection, computerSelection));

  const playerSelection1 = "RoCK";
  const computerSelection1 = computerPlay();
  console.log("Computer selected" + computerSelection1);
  console.log(playRound(playerSelection1, computerSelection1));

  const playerSelection2 = "SCISSORS";
  const computerSelection2 = computerPlay();
  console.log("Computer selected" + computerSelection2);
  console.log(playRound(playerSelection2, computerSelection2));
  */

