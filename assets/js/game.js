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

var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));
            
            var pickedEnemyName = enemyNames[i];

            enemyHealth = 50;
            
            fight(pickedEnemyName);
            
            if (playerHealth >0 && i < enemyNames.length -1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm){
                shop();
                }
        }
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
        }
    }
    endGame();
};

var endGame = function() {
    if (playerHealth > 0) {
        window.alert("Great Job, you survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing robot gladiators! Come back soon!");
    }
};

var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch (shopOptionPrompt) {
        case "REFILL": // new case
        case "refill":
        if (playerMoney>=7) {
            window.alert("Refilling player's health by 20 for 7 dollars. ");
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
        }
        else {
            window.alert("you don't have enough moeney!");
        }

        break;
        
        case "UPGRADE": //new case 
        case "upgrade":
            if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            playerAttack = playerAttack +6;
            playerMoney = playerMoney - 7;
            } 
            else {
                window.alert("you don't have enough money!");
            }

            break;
        
        case "LEAVE" : // new case
        case "leave" :
            window.alert("leaving the store.");
            break;
        default:
            window.alert("you did not pick a valid option. Try again.");
            shop();
            break;
    }
};

    
startGame();
