var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;

//check to see if the value of playerHealth is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive");
}
var playerAttack =10;

//you can also log multiple values at one like this console.log(playerName, playreAttack, playerHealth);
console.log(playerName, playerAttack, playerHealth);

var enemyName ="Roborto";
var enemyHealth = 50;
var enemyAttack = 12; 

var fight = function() {
    //alert users they are starting the round
    window.alert("welcome to robot gladiators!");

    //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    
    //log a resulting message to the console so we know that it worked'
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //check enemies health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;

    //log a resulting message to the console to show so we know that it worked.
    console.log(
        enemyName + " attacked " + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //check players health
    if (playerHealth <= 0) {
       window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};
fight();