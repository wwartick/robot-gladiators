// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

//fight function
var fight = function(enemy){

    console.log(enemy);

    //alert players that they are starting the round

    while(playerInfo.health > 0 && enemy.health > 0) {

    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player picks "skip" confirm and then stop the loop

    if (promptFight === "skip" || promptFight === "SKIP") {

        //confirm player wants to skip

        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight

        if (confirmSkip){

            window.alert(playerInfo.name + " has chosen to skip the fight. Goodbye!");
            
            //subtract money from the player for skipping

            playerInfo.money = Math.max(0, playerInfo.money - 10);

            console.log("playerInfo.money" , playerInfo.money);
            
            break;

        }

        //if no(false), ask the question again my running fight() again

        else{

            fight();

        }
    }


    //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable

    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);

    //Log a resulting message to the console so we know that it owrked.

    console.log(

        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        
    );

    //check enemy's health

    if (enemy.health <= 0 ){

        window.alert(enemy.name + " has died!");

        //award player for winning

        playerInfo.money = Math.max(0, playerInfo.money - 10);

        break;

    }

    else{

        window.alert(enemy.name + " still has " + enemy.health + " health left.");

    }


    //subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.

    playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);

    //Log a resulting message to the console so we know that it worked.

    console.log(

        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name +  " now has " + playerInfo.health + " health remaining."

    )

    //check player's health

    if (playerInfo.health <=0) {

        window.alert(playerInfo.name + " has died!");

        break;

    }

    else{

        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
    } //end of while loop
} //end of fight function

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };

  //player variables
  var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,

    reset: function() {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    }, // comma!

    refillHealth: function() {
    if (this.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
      } 
      else {
        window.alert("You don't have enough money!");
      }
    },
    upgradeAttack: function() {
      if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
      } 
      else {
        window.alert("You don't have enough money!");
      }
  };

//enemy variables
var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
  ];

//endgame function
var endGame = function() {

    if (playerInfo.health > 0) {
  
      window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  
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
            if (playerInfo.money >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
            
                // increase health and decrease money
                playerInfo.health = playerInfo.health + 20;
                playerInfo.money = playerInfo.money - 7;
              }
              else {
                window.alert("You don't have enough money!");
              }
          break;
        
        case "UPGRADE":
        case "upgrade":
            case "upgrade":
                if (playerInfo.money >= 7) {
                  window.alert("Upgrading player's attack by 6 for 7 dollars.");
              
                 // increase attack and decrease money
                 playerInfo.attack = playerInfo.attack + 6;
                 playerInfo.money = playerInfo.money - 7;
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

    playerInfo.reset();

for(var i = 0; i < enemyInfo.length; i++) {

if (playerInfo.health>0) {

    //tell player what round they're in

    window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );

    //pick new enemy to fight based on the index of the enemyNames array

    var pickedEnemyObj = enemyInfo[i];

    //reset enemyHealth before starting a new fight

    pickedEnemyObj.health = randomNumber(40, 60);

    //pass the pickedEnemyName to variable's value into the fight function, where it will assume the value of the enemyName parameter

    fight(pickedEnemyObj);

    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

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



