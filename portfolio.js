


        function getInputValue(){
            // pulls value from myInput in the text field 
            return document.getElementById("myInput").value;
        }
    
    function rpsClick(){
    //pulling integer from the text field
    let wins = parseInt(getInputValue());
    //if we can't pull a number out of it, throw an alert that the input was invalid
    if(isNaN(wins)){
        alert("Invalid Input. Enter something close to a number next time.")
    }
    //else, play rps to entered number of wins
    else{
        alert(`Playing to ${wins} wins.`)
        playRPS(wins);
    }
    }



    // Gets a random int between min and max, excluding max. Copied from w3schools
    function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
    }
    
    // uses getRndInteger to pick an array index between first and last items
    // We could combine the two functions, but getRndInteger might be useful on its own.
    function pickOneFromArray(array){
    let pickIndex = getRndInteger(0, array.length);
    return array[pickIndex];
    }
    
    //Compares inputOne and inputTwo to determine if inputOne won.
    function rpsCompare(inputOne, inputTwo){
    //checking for win conditions if rock
    if (inputOne.toLowerCase() === "rock"){
        if (inputTwo === "rock"){
        return "tie";
        }
        else if (inputTwo === "paper"){
        return "loss";
        }
        else if (inputTwo === "scissors"){
        return "win";
        }
        else{
        return "The Computer needs to pick rock, paper, or scissors!";
        }
    } 
    //checking for win conditions if paper
    else if (inputOne.toLowerCase() === "paper"){
        if (inputTwo === "rock"){
        return "win";
        }
        else if (inputTwo === "paper"){
        return "tie";
        }
        else if (inputTwo === "scissors"){
        return "loss";
        }
        else{
        return "The Computer needs to pick rock, paper, or scissors!";
        }
    }
    //checking win conditions if rock
    else if (inputOne.toLowerCase() === "scissors"){
        if (inputTwo === "rock"){
        return "loss";
        }
        else if (inputTwo === "paper"){
        return "win";
        }
        else if (inputTwo === "scissors"){
        return "tie";
        }
        else{
        return "The Computer needs to pick rock, paper, or scissors!";
        }
    }
    //if any of the previous if and else ifs didn't fire, the player didn't input right. Shame.
    else{
        return "Pick Rock, Paper, or Scissors, you ninny!"
    }
    
    }
    
    
    // Uses a while loop to play a set of Rock Paper Scissors to the input number of wins
    function playRPS(numberOfWins){
    //set initial variables
    let rps = ["rock", "paper","scissors"];
    let playerOneScore = 0;
    let playerTwoScore = 0;

    //while loop. Will break when one player meets the input nubmer of wins.
    while (playerOneScore < numberOfWins && playerTwoScore < numberOfWins) {
        let compPick = pickOneFromArray(rps); //computer makes its pick
        let playerPick = prompt("Rock, Paper, or Scissors?"); //take rps input from user
        alert("the computer picks " + compPick); //more communication is better?

        //get result, increment appropriate score, send appropriate alerts.
        let result = rpsCompare(playerPick, compPick);
        alert(result);
        if(result === "win"){
        playerOneScore++;
        }
        else if(result === "loss"){
        playerTwoScore++;
        }
        alert(`Player has ${playerOneScore} points`);
        alert(`Computer has ${playerTwoScore} points`);
        if(playerOneScore === numberOfWins){
        alert("Player Wins!");
        }
        else if(playerTwoScore === numberOfWins){
        alert("Computer Wins!");
        }
    }
    }