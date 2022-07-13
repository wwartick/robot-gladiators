// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

//player variables
var playerName = window.prompt("What is your robot's name?")

var playerHealth = 100;

var playerAttack = 10;

var playerMoney = 10;

//enemy variables
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

var enemyHealth = 50;

var enemyAttack = 12;

//fight function
var fight = function(enemyName){

    //alert players that they are starting the round

    while(playerHealth > 0 && enemyHealth > 0) {

    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player picks "skip" confirm and then stop the loop

    if (promptFight === "skip" || promptFight === "SKIP") {

        //confirm player wants to skip

        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight

        if (confirmSkip){

            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            
            //subtract money from the player for skipping

            playerMoney = playerMoney - 10;

            console.log("playerMoney" , playerMoney);
            
            break;

        }

        //if no(false), ask the question again my running fight() again

        else{

            fight();

        }
    }


    //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable

    enemyHealth = enemyHealth - playerAttack;

    //Log a resulting message to the console so we know that it owrked.

    console.log(

        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        
    );

    //check enemy's health

    if (enemyHealth <= 0 ){

        window.alert(enemyName + " has died!");

        //award player for winning

        playerMoney = playerMoney + 20;

        break;

    }

    else{

        window.alert(enemyName + " still has " + enemyHealth + " health left.");

    }


    //subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.

    playerHealth = playerHealth - enemyAttack;

    //Log a resulting message to the console so we know that it worked.

    console.log(

        enemyName + " attacked " + playerName + ". " + playerName +  " now has " + playerHealth + " health remaining."

    )

    //check player's health

    if (playerHealth <=0) {

        window.alert(playerName + " has died!");

        break;

    }

    else{

        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    } //end of while loop
}; //end of fight function

for(var i = 0; i < enemyNames.length; i++) {

if (playerHealth>0) {

    //tell player what round they're in

    window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );

    //pick new enemy to fight based on the index of the enemyNames array

    var pickedEnemyName = enemyNames[i];

    //reset enemyHealth before starting a new fight

    enemyHealth = 50;

    //use debugger to pause script from running and check what's going on at that moment in the code

    //debugger

    //pass the pickedEnemyName to variable's value into the fight function, where it will assume the value of the enemyName parameter

    fight(pickedEnemyName);

}

else {

    window.alert("You have lost your robot in battle! Game Over!");

    break;

}

}