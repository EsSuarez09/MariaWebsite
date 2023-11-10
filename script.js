
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
    eth[i].innerHTML = parseFloat(response.ethereum.usd).toFixed(2);
  }
  for(var i = 0; i < sol.length; i++){
    sol[i].innerHTML = parseFloat(response.solana.usd).toFixed(2);
  }
  for(var i = 0; i < doge.length; i++){
    doge[i].innerHTML = parseFloat(response.dogecoin.usd).toFixed(2);
  }
 
  usdt.innerHTML = parseFloat(response.tether.usd).toFixed(2);
  ada.innerHTML = parseFloat(response.cardano.usd).toFixed(2);
  trx.innerHTML = parseFloat(response.tron.usd).toFixed(2);
  link.innerHTML = parseFloat(response.chainlink.usd).toFixed(2);
  dot.innerHTML = parseFloat(response.polkadot.usd).toFixed(2);
  ltc.innerHTML = parseFloat(response.litecoin.usd).toFixed(2);
};

// Send the request
xhr.send();
}

fetchData();// call the function immediately

//60000 this is for one minute

setInterval(fetchData,60000); // set an interval to call the function every 5 seconds

// select all elements with the class fa and fa-star-o 

const starElements = document.querySelectorAll(".fa.fa-star-o");

// iterate through each star element

starElements.forEach(function(starElement){

    // check if the star element has the class check-star
    starElement.addEventListener("click",function(){
       
        if(starElement.classList.contains("check-star")) {
            
            //if it does, remove the check-star class
            starElement.classList.remove("check-star");

        }else{
            // if it doesn't , add the check-star class
            starElement.classList.add("check-star");
        }

    });

});

// get all elements with the class 'button-container'

var buttonContainer = document.querySelectorAll(".button-container");

//add mouseover and mouseout event to toggle buttons visiblity for each row
buttonContainer.forEach(function(container){

    container.addEventListener("mouseover",function(){ console.log("mouseover");

        toggleButtonVisibility(container,'visible');

    });

    container.addEventListener("mouseout",function(){

            toggleButtonVisibility(container,'hidden'); console.log("mouseout");

    });

})

// function to toggle buttons visibility 
function toggleButtonVisibility(container, visibility )
{
    var buttons = container.querySelectorAll('button');
    buttons.forEach(function(button){
        button.style.visibility  = visibility ;
    });

}

