// Constants and variables

const BASE_URL = 'https://deckofcardsapi.com/api/deck/';
const $oneCard = $('#onecard');
const $twoCard = $('#twocard');
const $oneScore = $('#onescore');
const $twoScore = $('#twoscore');


let playerOneDeck;
let playerTwoDeck;
let oneWinTracker = 0;
let twoWinTracker = 0;

// html element variables
const $deal = $("#deal");

//function for retrieving the api data
function newGame() {

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
      // console.log(playerOneDraw);
      // console.log(playerOneValue);
      $oneCard.text(playerOneDraw);

  // play 2 card draw
  $.ajax(`${BASE_URL}${playerTwoDeck}/draw/?count=1`)
    .then((drawCard) => {
      playerTwoDraw = drawCard.cards[0].code;
      playerTwoValue = drawCard.cards[0].value;
      // console.log(playerTwoDraw);
      // console.log(playerTwoValue);
      $twoCard.text(playerTwoDraw);

  // game logic for win/loss
  function winScenario(player1, player2) {
    if (player1 > player2){
      console.log("Player 1 wins!");
      oneWinTracker += 1;
    } else if (player1 === player2) {
      console.log("Its a tie!");
    } else {
      console.log("Player 2 wins!");
      twoWinTracker += 1;
    }
    $oneScore.text(oneWinTracker)
    $twoScore.text(twoWinTracker)
    // console.log(oneWinTracker, twoWinTracker)
  }
  winScenario(playerOneValue, playerTwoValue);

        }) // player 2 draw
      }) // player 1 draw
    }) // api call for player 2
  }) // api call for player 1
} // main function

// button listener for deal
$('button[id=deal]').on("click", (event) =>{
  event.preventDefault();
  newGame();
})
