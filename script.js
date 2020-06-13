var score = document.querySelector(".score");
var message = document.querySelector(".message");
var button = document.querySelectorAll('.btn');
var winnerScores = [0, 0];

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", playGame);
}


function checkWinner(player, computer) {

  if (player === "Rock") {
    if (computer === "Paper") {
      return "Computer";
    } else {
      return "Player";
    }
  }

  if (player === "Paper") {
    if (computer === "Scissor") {
      return "Computer";
    } else {
      return "Player";
    }
  }

  if (player === "Scissor") {
    if (computer === "Rock") {
      return "Computer";
    } else {
      return "Player";
    }
  }

  if (player === computer) {
    return "Draw";
  }
}


function playGame(e) {

  var playerSelection = e.target.innerText;

  var computerSelection = Math.random();

  if (computerSelection < .45) {
    computerSelection = "Rock";
  } else if (computerSelection > .45 && computerSelection <= .75) {
    computerSelection = "Paper";
  } else {
    computerSelection = "Scissor";
  }

  var result = checkWinner(playerSelection, computerSelection);

  if (result === "Player") {
    result += " wins!";
    //update score
    winnerScores[0]++;
  }

  if (result === "Computer") {
    result += " wins!";
    winnerScores[1]++;
  }

  if (result === "Draw") {
    result += "! It is a tie!";
  }

  score.innerHTML = "Player: [ " + winnerScores[0] + " ]    Computer: [ " + winnerScores[1] + " ]";

  messenger("Player:  <strong>" + playerSelection + "  </strong>Computer:  <strong>" + computerSelection + "  </strong><br>  " + result);
}

function messenger(selectionMessage) {
  message.innerHTML = selectionMessage;
}
