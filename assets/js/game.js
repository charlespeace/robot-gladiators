// Set stats for player
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// console.log(playerName, playerAttack, playerHealth, playerMoney);

// Set stats for enemy
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// Display the preceding array of names
// console.log(enemyNames);
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);

// Set up loop for array of names
// for(var i = 0; i < enemyNames.length; i++) {
//     fight(enemyNames[i]);


// Create fight function
var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {

        // Ask if player wants to fight or not
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // If player choses to skip, confirm and stop loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            window.alert(playerName + " has chosen to skip the fight!");

            //Confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //If yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                
                //subtract money from playerMoney for skipping
                playerMoney= playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
 
        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        
        // Log a resulting message to the console so we know that it worked
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            
            // Award player money for winning
            playerMoney = playerMoney + 20;
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // Check player's health
        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

var startGame = function() {
    
    // Reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    // Loop for multiple fights
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {

            // Let player know what round
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));

            // Pick new enemy to fight based ont he index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;

            // Call fight function with enemy-robot
        fight(pickedEnemyName);
        }

        // If player is not alive, stop game
        else {
            window.alert("You have lost your robot in battle! Game Over!")
            break;
        }
    }

    // Play again
    startGame();
};

// Function to end the entire game
var endGame = function(){
    
    // If player is still alive, player wins
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }else {
        window.alert("You've lost your robot in battle.");
    }
    
    // Ask player if they'd like to play again
    var playerAgainConfirm = window.confirm ("Would you like to play again?");
    if (playerAgainConfirm) {

        // Restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// Start game when page loads
endGame();