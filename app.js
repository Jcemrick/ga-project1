const apiKey = "48856211-975f-4632-8ffc-4a957ee81283";
const $viewCurrency = $(".currency");
console.log($viewCurrency)
const baseURL = "https://pro-api.coinmarketcap.com";
const url = "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest"


// function cryptoSearch(coin) {
//   const url = "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest"




// }

$.ajax({
  url: 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest',
  type: 'GET',
  headers: {"X-CMC_PRO_API_KEY" : '48856211-975f-4632-8ffc-4a957ee81283'},
  contentType: 'application/json',
  success: function (data) {console.log("We've got data " + data)},
  error: function (error) {
    console.log("didnt work")
  }
})