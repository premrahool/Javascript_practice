//Nested if else.

//Winning Number  19
//17 too low.
//20 too high.

//Prompt - Input value 

let WinningNumber=19;
let userGuess=+prompt("Guess a number");

console.log(typeof userGuess,userGuess);

// if(userGuess === WinningNumber){
//     console.log("You Guess is right!!");

// }else{
//     console.log("You Guess is wrong!!");
// }

if(userGuess === WinningNumber){
    console.log("You Guess is right!!");

}else{
    if(userGuess<WinningNumber){
        console.log("too low!!");

    }else{
        console.log("too high");
    }
}