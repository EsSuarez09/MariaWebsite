

// var btc = document.getElementsByClassName("bitcoin");
// var eth = document.getElementsByClassName("ethereum");
// var sol = document.getElementsByClassName("solana");
// var doge = document.getElementsByClassName("dogecoin");
// var usdt = document.getElementById("tether");
// var ada = document.getElementById("cardano");
// var trx = document.getElementById("tron");
// var link = document.getElementById("chainlink");
// var dot = document.getElementById("polkadot");
// var ltc = document.getElementById("litecoin");



// var settings = {
//     "async": true,
//     "scrossDomain": true,
//     "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2Cdogecoin%2Ctether%2Ccardano%2Ctron%2Cchainlink%2Cpolkadot%2Clitecoin&vs_currencies=usd%2Ccad",
//     "method": "GET",
//     "headers": {}
// }


// $.ajax(settings).done(function (response){


//     for(var i= 0 ; i < btc.length; i++){
//         btc[i].innerHTML = response.bitcoin.usd;
//     }
//     for(var i= 0 ; i < eth.length; i++){
//         eth[i].innerHTML = response.ethereum.usd;
//     }
//     for(var i= 0 ; i < sol.length; i++){
//         sol[i].innerHTML = response.solana.usd;
//     }
//     for(var i= 0 ; i < doge.length; i++){
//         doge[i].innerHTML = response.dogecoin.usd;
//     }

//     usdt.innerHTML = response.tether.usd;
//     ada.innerHTML = response.cardano.usd;
//     trx.innerHTML = response.tron.usd;
//     link.innerHTML = response.chainlink.usd;
//     dot.innerHTML = response.polkadot.usd;
//     ltc.innerHTML = response.litecoin.usd;
   

// } );

function fetchData(){
// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Set the request URL and method
xhr.open("GET", "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2Cdogecoin%2Ctether%2Ccardano%2Ctron%2Cchainlink%2Cpolkadot%2Clitecoin&vs_currencies=usd%2Ccad");

// Define what to do when the request is successful
xhr.onload = function() {
  // Parse the response as JSON
  var response = JSON.parse(xhr.responseText);

  // Get the elements by class name or id
  var btc = document.getElementsByClassName("bitcoin");
  var eth = document.getElementsByClassName("ethereum");
  var sol = document.getElementsByClassName("solana");
  var doge = document.getElementsByClassName("dogecoin");
  var usdt = document.getElementById("tether");
  var ada = document.getElementById("cardano");
  var trx = document.getElementById("tron");
  var link = document.getElementById("chainlink");
  var dot = document.getElementById("polkadot");
  var ltc = document.getElementById("litecoin");

  // Loop through the elements and update their innerHTML with the response data
  for(var i = 0; i < btc.length; i++){
    btc[i].innerHTML = parseFloat(response.bitcoin.usd).toFixed(2);
  }
  for(var i = 0; i < eth.length; i++){
    eth[i].innerHTML = response.ethereum.usd;
  }
  for(var i = 0; i < sol.length; i++){
    sol[i].innerHTML = response.solana.usd;
  }
  for(var i = 0; i < doge.length; i++){
    doge[i].innerHTML = response.dogecoin.usd;
  }
 
  usdt.innerHTML = parseFloat(response.tether.usd).toFixed(2);
  ada.innerHTML = response.cardano.usd;
  trx.innerHTML = response.tron.usd;
  link.innerHTML = response.chainlink.usd;
  dot.innerHTML = response.polkadot.usd;
  ltc.innerHTML = response.litecoin.usd;
};

// Send the request
xhr.send();
}

fetchData();// call the function immediately

//60000 this is for one minute

setInterval(fetchData,60000); // set an interval to call the function every 5 seconds

const starElements = document.querySelectorAll(".fa.fa-star-o");

starElements.forEach(function(starElement){

    starElement.addEventListener("click",function(){
       
        if(starElement.classList.contains("check-star")) {
            
            starElement.classList.remove("check-star");

        }else{
            starElement.classList.add("check-star");
        }

    });

});


var buttonContainer = document.querySelectorAll(".button-container");

buttonContainer.forEach(function(container){

    container.addEventListener("mouseover",function(){ console.log("mouseover");

        toggleButtonVisibility(container,true);

    });

    container.addEventListener("mouseout",function(){

            toggleButtonVisibility(container,false); console.log("mouseout");

    });

})

function toggleButtonVisibility(container, show)
{
    var buttons = container.querySelectorAll('button');
    buttons.forEach(function(button){
        button.style.display = show ? 'inline-block' : 'none';
    });

}

