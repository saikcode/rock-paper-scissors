function computerPlay (){
    const choices = ['rock', 'paper', 'scissors'];
    return choices [Math.floor(Math.random() * choices.length)];
    }

    let playerScore = 0;
    let computerScore = 0;
 
function playRound (playerSelection, computerSelection){
   
       if (playerSelection === 'rock'){            // rock selection
            if (computerSelection === 'rock'){
                    return 'Draw'
            } else if (computerSelection ==='paper'){
                    return 'You lose!' + ++computerScore
            } else (computerSelection ==='scissors')
                    return 'You win!' + ++playerScore

     } else if (playerSelection ==='paper'){        // paper selection
             if (computerSelection ==='paper'){
                     return 'Draw'
             } else if (computerSelection ==='scissors'){
                     return 'You lose!' + ++computerScore
             } else (computerSelection ==='rock')
                     return 'You win!' + ++playerScore
            
     } else if (playerSelection ==='scissors'){      // scissor selection
             if (computerSelection ==='scissors'){
                     return 'Draw' 
             } else if (computerSelection ==='rock'){
                     return 'You lose!' + ++computerScore
             } else (computerSelection ==='paper')
                     return 'You win!' + ++playerScore
     } return 'Please return a valid answer'
   };

function game(){
        for (i = 1; ; i++){
                                               
                  let ps = prompt('Rock, paper or scissors?')
                  ps = ps.toLowerCase()
                  const cs = computerPlay()
                  console.log(playRound(ps, cs)) 
                                              
                  if (playerScore === 5) 
                           break
                    else if (computerScore === 5) 
                           break       
                    else   continue
                        
                } 
        }

        console.log(game())