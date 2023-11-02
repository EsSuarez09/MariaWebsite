

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



var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2Cdogecoin%2Ctether%2Ccardano%2Ctron%2Cchainlink%2Cpolkadot%2Clitecoin&vs_currencies=usd%2Ccad",
    "method": "GET",
    "headers": {}
}


$.ajax(settings).done(function (response){


    for(var i= 0 ; i < btc.length; i++){
        btc[i].innerHTML = response.bitcoin.usd;
    }
    for(var i= 0 ; i < eth.length; i++){
        eth[i].innerHTML = response.ethereum.usd;
    }
    for(var i= 0 ; i < sol.length; i++){
        sol[i].innerHTML = response.solana.usd;
    }
    for(var i= 0 ; i < doge.length; i++){
        doge[i].innerHTML = response.dogecoin.usd;
    }
    //btc.innerHTML = response.bitcoin.cad;
    // eth.innerHTML = response.ethereum.cad;
    // sol.innerHTML = response.solana.cad;
    // doge.innerHTML = response.dogecoin.cad;
    usdt.innerHTML = response.tether.usd;
    ada.innerHTML = response.cardano.usd;
    trx.innerHTML = response.tron.usd;
    link.innerHTML = response.chainlink.usd;
    dot.innerHTML = response.polkadot.usd;
    ltc.innerHTML = response.litecoin.usd;
   

} );



  function toggleColor(element) {
    if (element.classList.contains('active')) {
        element.classList.remove('active');
    } else {
        element.classList.add('active');
    }
}

//get all start elements

const starElements = document.querySelectorAll(".fa.fa-star");

starElements.forEach(function(starElement){

    starElement.addEventListener("click",function(){
       
        if(starElement.classList.contains("check-star")) {
            
            starElement.classList.remove("check-star");

        }else{
            starElement.classList.add("check-star");
        }

    });

});


