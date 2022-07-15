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

var enemyHealth = 0;

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
} //end of fight function

//end game function
var endGame = function() {

    if (playerHealth > 0) {
  
      window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  
    }
  
    else{
  
      window.alert("You've lost your robot in battle.");
  
    }
  
    var playAgainConfirm = window.confirm("Would you like to play again?");
  
    if (playAgainConfirm) {
  
      startGame();
  
    }
  
    else {
  
      window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  
  }
  
  }
  
  var shop = function() {

    var shopOptionPrompt = window.prompt(

        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."

    );

    switch (shopOptionPrompt) {

        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
            
                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
              }
              else {
                window.alert("You don't have enough money!");
              }
          break;
        
        case "UPGRADE":
        case "upgrade":
            case "upgrade":
                if (playerMoney >= 7) {
                  window.alert("Upgrading player's attack by 6 for 7 dollars.");
              
                 // increase attack and decrease money
                  playerAttack = playerAttack + 6;
                  playerMoney = playerMoney - 7;
                }
                else {
                  window.alert("You don't have enough money!");
                }
          break;

        case "LEAVE":
        case "leave":
          window.alert("Leaving the store."); 
          // do nothing, so function will end
          break;

        default:
          window.alert("You did not pick a valid option. Try again.");
          // call shop() again to force player to pick a valid option
          shop();
          break;
      }

};


//start game function
var startGame = function() {

    //reset player stats

    playerHealth = 100;

    playerAttack = 10;

    playerMoney = 10;

for(var i = 0; i < enemyNames.length; i++) {

if (playerHealth>0) {

    //tell player what round they're in

    window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );

    //pick new enemy to fight based on the index of the enemyNames array

    var pickedEnemyName = enemyNames[i];

    //reset enemyHealth before starting a new fight

    enemyHealth = 10;

    //use debugger to pause script from running and check what's going on at that moment in the code

    //debugger

    //pass the pickedEnemyName to variable's value into the fight function, where it will assume the value of the enemyName parameter

    fight(pickedEnemyName);

    if (playerHealth > 0 && i < enemyNames.length - 1) {

        var storeConfirm= window.confirm("The fight is over, visit the store before the next round?");
     

        if (storeConfirm) {

        shop();

        }
    }

}


else {

    window.alert("You have lost your robot in battle! Game Over!");

    break;

}

    }  //end of start game function
    
    endGame();
} 

startGame();



