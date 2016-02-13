

function PlayerS() {
  this.score = 0;
  this.path = [];
}
var player1 = new PlayerS();
var player2 = new PlayerS();

var turn = 0;
$(".score").html(player1.score);

$(document).on('ready', function() {



  // var player1 = new PlayerS();
  // var player2 = new PlayerS();
  $("h2").on('click', function() {
    var allTheMark = $("td");
    for (var i = 0; i < allTheMark.length; i++) {
      allTheMark[i].innerHTML = "";
      // allTheMark.trigger('click');
      player1.path = [];
      player2.path = [];
      turn = 0;


    }
  });

  $("td").on('click', function(){
    var self = $(this);

    if( self.html() !== "o" && "x") {



      if (turn % 2) {
        self.html('x');
        var xPlace = self.attr('name');
        player1.path.push(parseInt(xPlace));
        checkForWinners1();
      }
      else {
        self.html('o');
        var oPlace = self.attr('name');
        player2.path.push(parseInt(oPlace));
        console.log(player2.path);
        checkForWinners2();
      }



      turn++;
    // self.off('click');

    }
   checkForDraw();

  });
});



function checkForWinners1() {
  for (var i = 0; i < (player1.path.length-2); i++) {
    for (var j = i + 1; j < (player1.path.length -1); j++) {
      for (var k = j + 1; k < (player1.path.length); k++) {
        var sumScore = player1.path[i] + player1.path[j] + player1.path[k];
        console.log(sumScore);
        if (sumScore === 15) {
          alert("You Won!");
          player1.score++;
          $(".player1").html("Player1 : " + player1.score);
        }
      }
    }
 }
}

function checkForWinners2() {
  for (var i = 0; i < (player2.path.length-2); i++) {
    for (var j = i + 1; j < (player2.path.length -1); j++) {
      for (var k = j + 1; k < (player2.path.length); k++) {
        var sumScore = player2.path[i] + player2.path[j] + player2.path[k];
        console.log(sumScore);
        if (sumScore === 15) {
          alert("You Won!");
          player2.score++;
          $(".player2").html("Player2 : " + player2.score);
        }
      }
    }
 }
}

function checkForDraw() {
    if (turn === 9) {
      alert('It is a Tie! Please restart!');
    }
}

// function checkForDraw() {
//     var count1 = 0;
//     var count2 = 0;
//       for (var i = 0; i < player1.path.length; i++) {
//         count += player1.path[i];
//         return count1;
//       }
//       for (var j = 0; j < player2.path.length; j++) {
//         count2 += player2.path[i];
//         return count2;
//       }
//     if ((count1 + count2) === 45) {
//       alert('It is a Tie! Please restart!');
//     }
//
// }
