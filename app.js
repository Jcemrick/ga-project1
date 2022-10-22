const apiKey = "48856211-975f-4632-8ffc-4a957ee81283";
const $viewCurrency = $(".currency");
console.log($viewCurrency)
const baseURL = "https://pro-api.coinmarketcap.com";
const url = "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest"


// function cryptoSearch(coin) {
//   const url = "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest"




// }

const setHeader = $.ajaxSetup({
  headers: { 'X-CMC_PRO_API_KEY' : '48856211-975f-4632-8ffc-4a957ee81283'}
})

$.ajax({
  url: 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  type: 'GET',
  dataType: 'jsonp',
  success: function () { alert("Success!")},
  error: function (){ alert("Failed!")},
})