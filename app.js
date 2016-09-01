



var game = {
  player1: {
    name: "PLAYER 1",
    money:100
  },
  player2: {
    name: "PLAYER 2",
    money:100
  },
  round: 0,
}

game.currentPlayer = game.player1

function switchTurns() {
  if(game.currentPlayer == game.player1) {
    game.currentPlayer = game.player2
  } else {
    game.currentPlayer = game.player1
  }
}

function showWins(){
  if (round_total == 7){
    game.currentPlayer.money = game.currentPlayer.money + 100
  }

  if (round_total == 11){
    game.currentPlayer.money = game.currentPlayer.money + 200
  }

  if (round_total == 2 || round_total == 3 || round_total == 12){
    game.currentPlayer.money = game.currentPlayer.money - 150
  }

  $('#p1scoreboard').html(game.player1.money)
  $('#p2scoreboard').html(game.player2.money)

}
// function showWins2(){
//   if (round_total == 7)
//     player2_money = player2_money + 100
//   if (round_total == 11)
//     player2_money = player2_money + 200
//   if (round_total == 2 || round_total == 3 || round_total == 12)
//     player2_money = player2_money - 150
// }


/*var dicegame = {
  images : [
    './images/di-1.png',
    './images/di-2.jpg',
    './images/di-3.jpg',
    './images/di-4.jpg',
    './images/di-5.jpg',
    './images/di-6.jpg'
  ]
};

var imageArray = ["./images/di-1.png", "./images/di-2.png", "./images/di-3.png", "./images/di-4.png", "./images/di-5.png", "./images/di-6.png"]*/




  //dicegame.scoreboard = document.querySelector('#scoreboard');
    //dicegame.score = 0;
    //game.utils = {};


function randomizeDiValue() {
  return Math.round(Math.random() * 5) + 1
}

var randomDi = null
var randomDiTwo = null

var round_total = null



function rollDice() {
  randomDi = randomizeDiValue()
  randomDiTwo = randomizeDiValue()
  round_total = randomDi + randomDiTwo

  $('#di-1').html('<img src="./images/di-' + randomDi + '.png">')
  $('#di-2').html('<img src="./images/di-' + (randomDiTwo) + '.png">')

  $('#di-1', '#di-2').show();

  console.log(round_total)
  console.log("Random Di 1:", randomDi)
  console.log("Random Di 2:", randomDiTwo)
  showWins()
  console.log(game.currentPlayer.name + ": " + game.currentPlayer.money);

  switchTurns()
  console.log("It's " + game.currentPlayer.name + "'s turn!")

  // showWins2()

}




$('#player1').on('click', function() {
  if (game.player1 == game.currentPlayer){
    rollDice()
    // check for winner
  }
})

$('#player2').on('click', function() {
  if (game.player2 == game.currentPlayer){
      rollDice()
  game.round = game.round + 1
  if (game.round == 7) {
    check_for_winner()
  }
 }// check for winner
})

$('#p1scoreboard').html(game.player1.money)
$('#p2scoreboard').html(game.player2.money)

function reloadPage() {
  location.reload();
}
//console.log(dicegame.images[randomDi - 1])

//console.log(dicegame.images[randomDiTwo - 1])

//console.log(round_total)

// $('#di-1').on('click', function() {
//   if(randomDi == 1){
//     document.querySelector('.di').innerHTML = '<img src="./images/di-1.png">'
//     //console.log(images[0])
//   }else if (randomDi == 2){
//     document.querySelector('.di').innerHTML = '<img src="./images/di-2.png">'
//     //console.log(images[1])
//   }else if (randomDi == 3){
//     document.querySelector('.di').innerHTML = '<img src="./images/di-3.png">'
//     //console.log(images[2])
//   }else if  (randomDi == 4){
//     document.querySelector('.di').innerHTML = '<img src="./images/di-4.png">'
//     //console.log(images[3])
//   }else if (randomDi == 5){
//     document.querySelector('.di').innerHTML = '<img src="./images/di-5.png">'
//     //console.log(images[4])
//   }else if (randomDi == 6){
//     document.querySelector('.di').innerHTML = '<img src="./images/di-6.png">'
//     //console.log(images[5])
//   }
// })



//console.log(round_total)





$('#di-2').on('click', function() {
  if(randomDiTwo == 1){
    document.querySelector('.di').innerHTML = '<img src="./images/di-1.png">'
    //console.log(images[0])
  }else if (randomDiTwo == 2){
    document.querySelector('.di').innerHTML = '<img src="./images/di-2.png">'
    //console.log(images[1])
  }else if (randomDiTwo == 3){
    document.querySelector('.di').innerHTML = '<img src="./images/di-3.png">'
    //console.log(images[2])
  }else if  (randomDiTwo == 4){
    document.querySelector('.di').innerHTML = '<img src="./images/di-4.png">'
    //console.log(images[3])
  }else if (randomDiTwo == 5){
    document.querySelector('.di').innerHTML = '<img src="./images/di-5.png">'
  //  console.log(images[4])
  }else if (randomDiTwo == 6){
    document.querySelector('.di').innerHTML = '<img src="./images/di-6.png">'
    //console.log(images[5])
  }
})



console.log(round_total)




var turn = 1;

var player1_money = 0;
var player2_money = 0;

var round = 0;

// $('#player1').on('click', function(){
//    if(turn == 1){
//        var d1 = Math.round(Math.random() * 5 + 1);
//        var d2 = Math.round(Math.random() * 5 + 1);
//
//        var round_total = d1 + d2;
//
//        // check for total
//        if(round_total == 7 || round_total == 11){
//            player1_money = player1_money + 100;
//        } else if (round_total == 2 || round_total == 3 || round_total == 12){
//            player1_money = player1_money - 100;
//        }
//
//        turn = 2;
//    }
// })
//
// $('#player2').on('click', function(){
//    if(turn == 2){
//        var d1 = Math.round(Math.random() * 5 + 1);
//        var d2 = Math.round(Math.random() * 5 + 1);
//
//        var round_total = d1 + d2;
//
//        if(round_total == 7 || round_total == 11){
//            player2_money = player2_money + 100;
//        } else if (round_total == 2 || round_total == 3 || round_total == 12){
//            player2_money = player2_money - 100;
//        }
//
//        turn = 1;
//        round = round + 1;
//
//        if(round == 7){
//            //check for a winner
//        }
//    }
// })
function reset(){
  game.player1.money = 100;
  game.player2.money = 100;
  randomDi = null;
  randomDiTwo = null;
  round_total = null;
}

function check_for_winner() {
   if (game.player1.money > game.player2.money){
      alert("Player 1 wins!")
   } else if (game.player2.money > game.player1.money){
       alert("Player 2 wins!!")
   } else {
       alert("It's a tie - play again!!!")
     }

    reset()

   }




/*function randomizeDiValue() {
  return Math.round((Math.random() * 5) + 1)
}*/

//var randomDiTwo = randomizeDiValue()

//console.log(dicegame.images[randomDiTwo - 1])

//document.querySelector('.di').innerText = randomDiTwo

// var button = document.querySelector("#player1");
// button.addEventListener('click', function(){
//
// })
//
// var buttonTwo = document.querySelector("#player2");
// buttonTwo.addEventListener('click', function(){
//   console.log(round_total)
// })
