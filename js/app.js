// Constants and variables

const BASE_URL = 'https://deckofcardsapi.com/api/deck/';

let playerOne;
let playerTwo;

// html element variables
const $deal = $("#deal");


//function for retrieving the api data
function newGame() {

  // api call with ajax for player one
  $.ajax(`${BASE_URL}new/shuffle/?deck_count=1`)
    .then((cards) =>{
      playerOne = cards.deck_id
      console.log(playerOne)
    })

  // api call with ajax for player two/cpu
  $.ajax(`${BASE_URL}new/shuffle/?deck_count=1`)
    .then((cards) =>{
      playerTwo = cards.deck_id
      console.log(playerTwo)
    })




    
} 

// button listener for deal
$('button[id=deal]').on("click", (event) =>{
  event.preventDefault();
  newGame();
})