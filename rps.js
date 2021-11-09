
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let tieScore = document.getElementById("tieScore");

let compChoice = document.getElementsByClassName("comp_choice");

let globalPlayerScore = 0;
let globalComputerScore = 0;
let ties = 0;

let numRounds =0; 

let buttonR = document.querySelector('.btnRock');
let buttonP = document.querySelector('.btnPaper');
let buttonS = document.querySelector('.btnScissors');

function computerPlay() 
{
  let temp_number = Math.floor(Math.random()*3) //select random number, 0 1 or 2
  switch(temp_number) 
    {
      case 0:
        //console.log("Comp Selects Rock");
        return 'Rock' 
      case 1:
       // console.log("Comp Selects Paper");
        return 'Paper' 
      default:
       // console.log("Comp Selects Scissors");
        return 'Scissors'
    }
}


function highlight (computerSelection){  //this function input rps, then highlights rps for computer selection
  switch(computerSelection) 
  {
    case "Rock":
      compChoice[0].style.border = "1px solid red";
      setTimeout(function() {
        compChoice[0].style.border = "0px solid red";
      }, 1000);
      return;
    case "Paper":
      compChoice[1].style.border = "1px solid red";
      setTimeout(function() {
        compChoice[1].style.border = "0px solid red";
      }, 1000);
      return;
    case "Scissors":
      compChoice[2].style.border = "1px solid red";
      setTimeout(function() {
        compChoice[2].style.border = "0px solid red";
      }, 1000);
      return;
  }
}


function playRound(playerSelection, computerSelection)  //this function  1) keeps score : ties, player score, computer score 2) highlights the computer selection
{
    let newPlayerSelection = capitalizeFirstLetter(playerSelection)
    let outcomeNum = 0 /*  0 tie 1 p win 2 c wins*/
    
    console.log ("Player selects " + playerSelection + "        " + " Computer Selects "  + computerSelection);

    if (newPlayerSelection === computerSelection) 
    {   
       // window.alert("Computer picked: " + computerSelection + "  \n     This round It's a tie!")
        tieScore.textContent = ++ties;
        highlight(computerSelection);

    }
        
    else if ((newPlayerSelection === "Rock" &&  computerSelection === "Scissors") || (newPlayerSelection === "Paper" &&  computerSelection === "Rock") || (newPlayerSelection === "Scissors" &&  computerSelection === "Paper"))
    {
       // window.alert("Computer picked: "+ computerSelection + "   \n  You picked : "  + newPlayerSelection + "\n   This round Player wins")
        playerScore.textContent =  ++ globalPlayerScore;
        highlight(computerSelection);
    }
    else
    {
       // window.alert("Computer picked: "+ computerSelection + "   \n  You picked : " + newPlayerSelection + "\n This round Computer wins"  )
        computerScore.textContent = ++globalComputerScore;
       highlight(computerSelection);
    }

    if (globalPlayerScore === 5)
    {
      console.log("in here")
      alert("STOP ALL THE DOWNLOADING \n" + "THE WINNER IS YOU")   
    }
    
    if (globalComputerScore === 5)
    {
      alert("STOP ALL THE DOWNLOADING \n" + "THE WINNER IS THE COMPUTER")

    }

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

    buttonR.addEventListener('click', ()=>{ 
        playRound('Rock', computerPlay());   //call computer play (generates RPS string) then call PlayRound (which updates scores )

    })

    buttonP.addEventListener('click', ()=>{ 
      playRound('Paper', computerPlay());
    })

    buttonS.addEventListener('click', ()=>{ 
      playRound('Scissors', computerPlay());
    })
    
    

    /*
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
    } */
    
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

