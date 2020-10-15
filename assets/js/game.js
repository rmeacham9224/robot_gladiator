// Game States 
//"WIN" - player robot has defeated all enemy robots
//   *fight all enemy robots
//   *defeat each enemy robot
//"LOSE" - Player robot's health is zero or less

var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack =10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12; 

var fight = function(enemyName) {
    
    //alert users they are starting the round
    window.alert("welcome to robot gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

   //if player chooses to fight, then fight
   if (promptFight === "fight" || promptFight === "FIGHT") {
        
        //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " stll has " + enemyHealth + " health remaining."
        );

        //check enemies health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

        //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + ". " + playerName + " still has " + playerHealth + " health remaining."
        );

        //check players health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
   
    //if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
   
        //confirm the users wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from the player for skipping
            playerMoney = playerMoney - 2;
        }
        //if no (false), ask question again by running fight() again
        else {
            fight();
            }   
    }
    
    else {
        window.alert("You need to pick a valid option. Try again!");
    }    
};


for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}



//fight();