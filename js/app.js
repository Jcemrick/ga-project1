// Constants and variables

const BASE_URL = 'https://deckofcardsapi.com/api/deck/';

// jquery html elements
const $oneCard = $('#onecard');
const $twoCard = $('#twocard');
const $oneScore = $('#onescore');
const $twoScore = $('#twoscore');
const $tieCount = $('#tiecount');
const $gamesWon = $('#gameswon');



let playerOneDeck;
let playerTwoDeck;
let oneWinTracker = 0;
let twoWinTracker = 0;
let tieCountTracker = 0;
let count = 0;
let gamesWon = 0;
let cardImgOne;
let cardImgTwo;

// html element variables
const $deal = $("#deal");

//functions

// game reset function
function gameReset() {
  oneWinTracker = 0
  twoWinTracker = 0
  tieCountTracker = 0
  count = 1
  $tieCount.empty()
  $oneScore.empty()
  $twoScore.empty()
  $oneCard.empty()
  $twoCard.empty()
}

// win scenarios
function winScenarios(player1, player2) {
  if (player1 > player2) {
    alert("Player 1 Wins!");
    gamesWon += 1
    $gamesWon.text(gamesWon)
    gameReset();
  } else if (player1 < player2) {
    alert("CPU Wins!");
    gameReset();
  } else if (player1 === player2){
    alert("Its a tie!");
    gameReset();
  }
}

// game logic
function gameLogic(player1, player2) {
    if (player1 > player2) {
      oneWinTracker += 1;
      count += 1;
      $oneScore.text(oneWinTracker)
    } else if (player1 < player2) {
      twoWinTracker += 1;
      count += 1
      $twoScore.text(twoWinTracker)
    } else {
      tieCountTracker += 1;
      count += 1
      $tieCount.text(tieCountTracker)
    } 
  }

// button listener for deal
$('button[id=deal]').on("click", (event) =>{
  event.preventDefault();
  newGame();
})

// button listen for reset
$('button[id=reset]').on("click", (event) => {
  event.preventDefault()
  gameReset();
})


// API call and game function
function newGame() {

  if (count === 5) {
    winScenarios(oneWinTracker, twoWinTracker)
    return
  }

  // api call with ajax for player one
  $.ajax(`${BASE_URL}new/shuffle/?deck_count=1`)
    .then((cards) =>{
      playerOneDeck = cards.deck_id;
      // console.log(playerOneDeck)

  // api call with ajax for player two/cpu
  $.ajax(`${BASE_URL}new/shuffle/?deck_count=1`)
    .then((cards) =>{
      playerTwoDeck = cards.deck_id;
      // console.log(playerTwoDeck)

  // player 1 card draw 
  $.ajax(`${BASE_URL}${playerOneDeck}/draw/?count=1`)
    .then((drawCard) => {
      playerOneDraw = drawCard.cards[0].code;
      playerOneValue = drawCard.cards[0].value;
      cardImgOne = drawCard.cards[0].image;
      // console.log(playerOneDraw);
      // console.log(playerOneValue);
      $oneCard.append(`<img src=${cardImgOne} alt='playing card' height=100px>`)

  // play 2 card draw
  $.ajax(`${BASE_URL}${playerTwoDeck}/draw/?count=1`)
    .then((drawCard) => {
      playerTwoDraw = drawCard.cards[0].code;
      playerTwoValue = drawCard.cards[0].value;
      cardImgTwo = drawCard.cards[0].image;
      // console.log(playerTwoDraw);
      // console.log(playerTwoValue);
      $twoCard.append(`<img src=${cardImgTwo} alt='playing card' height=100px>`)

    // console.log(oneWinTracker, twoWinTracker)
    gameLogic(playerOneValue, playerTwoValue)

        }) // player 2 draw
      }) // player 1 draw
    }) // api call for player 2
  }) // api call for player 1
} // main function


