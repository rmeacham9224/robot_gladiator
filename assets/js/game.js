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
    while(enemyHealth > 0 && playerHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm the users wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from the player for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }
        
        
        //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " stll has " + enemyHealth + " health remaining."
        );

        //check enemies health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            
            playerMoney = playerMoney + 20;
            
            break;
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
        break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
};


for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames [i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}



//fight();