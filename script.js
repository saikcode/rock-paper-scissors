function computerPlay (){
    const choices = ['rock', 'paper', 'scissors'];
    return choices [Math.floor(Math.random() * choices.length)];
    }

    function playRound (playerSelection, computerSelection){
   
       if (playerSelection === 'rock'){            // rock selection
            if (computerSelection === 'rock'){
                    return 'Draw'
            } else if (computerSelection ==='paper'){
                    return 'You lose!'
            } else (computerSelection ==='scissors')
                    return 'You win!'

     } else if (playerSelection ==='paper'){        // paper selection
             if (computerSelection ==='paper'){
                     return 'Draw'
             } else if (computerSelection ==='scissors'){
                     return 'You lose!'
             } else (computerSelection ==='rock')
                     return 'You win!'
            
     } else if (playerSelection ==='scissors'){     // scissor selection
             if (computerSelection ==='scissors'){
                     return 'Draw'
             } else if (computerSelection ==='rock'){
                     return 'You lose!'
             } else (computerSelection ==='paper')
                     return 'You win!'
     } return 'Please return a valid answer'
   }

   function game (){
           for (let i = 1; i <= 9; i++){                       
                   let playerSelection = window.prompt('rock, paper, scissors?')
                   playerSelection = playerSelection.toLowerCase();
                   const computerSelection = computerPlay();
                    // determine the winner after it reaches 5 wins
                   console.log(playRound(playerSelection, computerSelection)); 
               }
             }
  

console.log(game(0, 0))