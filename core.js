    var xmlhttp = new XMLHttpRequest();
    var url = "https://index-api.bitcoin.com/api/v0/core/price/usd";

    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4  &&  this.status == 200) {
        var json = JSON.parse(this.responseText);
        parseJson(json);
      }		
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function parseJson(json) {
      var btcusd = "The current price of Bitcoin (BTC) is $" + (json["price"]/100).toFixed(2) + " USD";
      var time = "<b>Price last updated " + json["stamp"] + "</b>";

      document.getElementById("btcdata").innerHTML = 
	      	   btcusd + "<br />" + time;
};
