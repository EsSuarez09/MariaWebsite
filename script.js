// create a function fetchData
function fetchData(){
// Create a new XMLHttpRequest object
var req = new XMLHttpRequest();

// Set the request URL and method
req.open("GET", "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2Cdogecoin%2Ctether%2Ccardano%2Ctron%2Cchainlink%2Cpolkadot%2Clitecoin&vs_currencies=usd%2Ccad");

// Define what to do when the request is successful
req.onload = function() {
  // Parse the response as JSON
  var response = JSON.parse(req.responseText);

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
req.send();
}

fetchData();// call the function immediately

//60000 this is for one minute

setInterval(fetchData,60000); // set an interval to call the function every 1 minute

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

    container.addEventListener("mouseover",function(){ //console.log("mouseover");

        toggleButtonVisibility(container,'visible');

    });

    container.addEventListener("mouseout",function(){

            toggleButtonVisibility(container,'hidden'); //console.log("mouseout");

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

function getLastDate(){
  //get the current date
  var currentDate = new Date();

  //calculate the previous day

  var previousDate = new Date(currentDate);
  previousDate.setDate(currentDate.getDate() - 1);

  const day = previousDate.getDate().toString().padStart(2, '0');
  const month = (previousDate.getMonth() + 1).toString().padStart(2, '0');
  const year = previousDate.getFullYear();

  //console.log(`${day}-${month}-${year}`);

  return `${day}-${month}-${year}`
}

function getCurrentDate(){
  //get the current date
  var currentDate = new Date();

  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = currentDate.getMonth().toString().padStart(2, '0');
  const year = currentDate.getFullYear();

  //console.log(`${day}-${month}-${year}`);

  return `${day}-${month}-${year}`
}

function fetchBitcoin(){

  var currentDate = getCurrentDate();
  // Create a new XMLHttpRequest object
  var req = new XMLHttpRequest();
  
  // Set the request URL and method
  req.open("GET", "https://api.coingecko.com/api/v3/coins/bitcoin/history?date="+currentDate);
  
  // Define what to do when the request is successful
  req.onload = function() {
    // Parse the response as JSON
    var response = JSON.parse(req.responseText);
  
    // Get the elements by class name or id

    var bitcoin = document.getElementById("bitcoin-24-hours");
    var bitcoinmc = document.getElementById("bitcoin-market-cap");
    
    
    bitcoinmc.innerHTML = parseFloat(response['market_data']['market_cap']['usd']).toFixed(2);

    console.log(response);
   
  };
  
  // Send the request
  req.send();
  }
  
  fetchBitcoin();

  function fetchEthereum(){

    var currentDate = getCurrentDate();
    // Create a new XMLHttpRequest object
    var req = new XMLHttpRequest();
    
    // Set the request URL and method
    req.open("GET", "https://api.coingecko.com/api/v3/coins/ethereum/history?date="+currentDate);
    
    // Define what to do when the request is successful
    req.onload = function() {
      // Parse the response as JSON
      var response = JSON.parse(req.responseText);
    
      // Get the elements by class name or id
  
      var ethereum24 = document.getElementById("ethereum-24-hours");
      var ethereummc = document.getElementById("ethereum-market-cap");
      
      
      ethereummc.innerHTML = parseFloat(response['market_data']['market_cap']['usd']).toFixed(2);
  
      console.log(response);
     
    };
    // Send the request
    req.send();
    }
    
    fetchEthereum();


    function fetchSolana(){

      var currentDate = getCurrentDate();
      // Create a new XMLHttpRequest object
      var req = new XMLHttpRequest();
      
      // Set the request URL and method
      req.open("GET", "https://api.coingecko.com/api/v3/coins/solana/history?date="+currentDate);
      
      // Define what to do when the request is successful
      req.onload = function() {
        // Parse the response as JSON
        var response = JSON.parse(req.responseText);
      
        // Get the elements by class name or id
    
        var solana24 = document.getElementById("solana-24-hours");
        var solanamc = document.getElementById("solana-market-cap");
        
        
        solanamc.innerHTML = parseFloat(response['market_data']['market_cap']['usd']).toFixed(2);
    
        console.log(response);
       
      };
      // Send the request
      req.send();
      }
      
      fetchSolana();


      function fetchDogecoin(){

        var currentDate = getCurrentDate();
        // Create a new XMLHttpRequest object
        var req = new XMLHttpRequest();
        
        // Set the request URL and method
        req.open("GET", "https://api.coingecko.com/api/v3/coins/dogecoin/history?date="+currentDate);
        
        // Define what to do when the request is successful
        req.onload = function() {
          // Parse the response as JSON
          var response = JSON.parse(req.responseText);
        
          // Get the elements by class name or id
      
          var dogecoin24 = document.getElementById("dogecoin-24-hours");
          var dogecoinmc = document.getElementById("dogecoin-market-cap");
          
          
          dogecoinmc.innerHTML = parseFloat(response['market_data']['market_cap']['usd']).toFixed(2);
      
          console.log(response);
         
        };
        // Send the request
        req.send();
        }
        
        fetchDogecoin();


        function fetchTether(){

          var currentDate = getCurrentDate();
          // Create a new XMLHttpRequest object
          var req = new XMLHttpRequest();
          
          // Set the request URL and method
          req.open("GET", "https://api.coingecko.com/api/v3/coins/tether/history?date="+currentDate);
          
          // Define what to do when the request is successful
          req.onload = function() {
            // Parse the response as JSON
            var response = JSON.parse(req.responseText);
          
            // Get the elements by class name or id
        
            var tether24 = document.getElementById("tether-24-hours");
            var tethermc = document.getElementById("tether-market-cap");
            
            
            tethermc.innerHTML = parseFloat(response['market_data']['market_cap']['usd']).toFixed(2);
        
            console.log(response);
           
          };
          // Send the request
          req.send();
          }
          
          fetchTether();


          function fetchCardano(){

            var currentDate = getCurrentDate();
            // Create a new XMLHttpRequest object
            var req = new XMLHttpRequest();
            
            // Set the request URL and method
            req.open("GET", "https://api.coingecko.com/api/v3/coins/cardano/history?date="+currentDate);
            
            // Define what to do when the request is successful
            req.onload = function() {
              // Parse the response as JSON
              var response = JSON.parse(req.responseText);
            
              // Get the elements by class name or id
          
              var cardano24 = document.getElementById("cardano-24-hours");
              var cardanomc = document.getElementById("cardano-market-cap");
              
              
              cardanomc.innerHTML = parseFloat(response['market_data']['market_cap']['usd']).toFixed(2);
          
              console.log(response);
             
            };
            // Send the request
            req.send();
            }
            
            fetchCardano();


            function fetchTron(){

              var currentDate = getCurrentDate();
              // Create a new XMLHttpRequest object
              var req = new XMLHttpRequest();
              
              // Set the request URL and method
              req.open("GET", "https://api.coingecko.com/api/v3/coins/tron/history?date="+currentDate);
              
              // Define what to do when the request is successful
              req.onload = function() {
                // Parse the response as JSON
                var response = JSON.parse(req.responseText);
              
                // Get the elements by class name or id
            
                var tron24 = document.getElementById("tron-24-hours");
                var tronmc = document.getElementById("tron-market-cap");
                
                
                tronmc.innerHTML = parseFloat(response['market_data']['market_cap']['usd']).toFixed(2);
            
                console.log(response);
               
              };
              // Send the request
              req.send();
              }
              
              fetchTron();


              function fetchChainlink(){

                var currentDate = getCurrentDate();
                // Create a new XMLHttpRequest object
                var req = new XMLHttpRequest();
                
                // Set the request URL and method
                req.open("GET", "https://api.coingecko.com/api/v3/coins/chainlink/history?date="+currentDate);
                
                // Define what to do when the request is successful
                req.onload = function() {
                  // Parse the response as JSON
                  var response = JSON.parse(req.responseText);
                
                  // Get the elements by class name or id
              
                  var chainlink24 = document.getElementById("chainlink-24-hours");
                  var chainlinkmc = document.getElementById("chainlink-market-cap");
                  
                  
                  chainlinkmc.innerHTML = parseFloat(response['market_data']['market_cap']['usd']).toFixed(2);
              
                  console.log(response);
                 
                };
                // Send the request
                req.send();
                }
                
                fetchChainlink();


                function fetchPolkadot(){

                  var currentDate = getCurrentDate();
                  // Create a new XMLHttpRequest object
                  var req = new XMLHttpRequest();
                  
                  // Set the request URL and method
                  req.open("GET", "https://api.coingecko.com/api/v3/coins/polkadot/history?date="+currentDate);
                  
                  // Define what to do when the request is successful
                  req.onload = function() {
                    // Parse the response as JSON
                    var response = JSON.parse(req.responseText);
                  
                    // Get the elements by class name or id
                
                    var polkadot24 = document.getElementById("polkadot-24-hours");
                    var polkadotmc = document.getElementById("polkadot-market-cap");
                    
                    
                    polkadotmc.innerHTML = parseFloat(response['market_data']['market_cap']['usd']).toFixed(2);
                
                    console.log(response);
                   
                  };
                  // Send the request
                  req.send();
                  }
                  
                  fetchPolkadot();



                  function fetchLitecoin(){

                    var currentDate = getCurrentDate();
                    // Create a new XMLHttpRequest object
                    var req = new XMLHttpRequest();
                    
                    // Set the request URL and method
                    req.open("GET", "https://api.coingecko.com/api/v3/coins/litecoin/history?date="+currentDate);
                    
                    // Define what to do when the request is successful
                    req.onload = function() {
                      // Parse the response as JSON
                      var response = JSON.parse(req.responseText);
                    
                      // Get the elements by class name or id
                  
                      var litecoin24 = document.getElementById("litecoin-24-hours");
                      var litecoinmc = document.getElementById("litecoin-market-cap");
                      
                      
                      litecoinmc.innerHTML = parseFloat(response['market_data']['market_cap']['usd']).toFixed(2);
                  
                      console.log(response);
                     
                    };
                    // Send the request
                    req.send();
                    }
                    
                    fetchLitecoin();
  



