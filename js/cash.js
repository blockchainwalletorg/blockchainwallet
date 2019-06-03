    var xmlhttp = new XMLHttpRequest();
    var cash = "https://index-api.bitcoin.com/api/v0/cash/price/usd";

    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4  &&  this.status == 200) {
        var json = JSON.parse(this.responseText);
        parseJson(json);
      }		
    };

    xmlhttp.open("GET", cash, true);
    xmlhttp.send();

    function parseJson(json) {
      var bchusd = "The current price of Bitcoin (BCH) is $" + (json["price"]/100).toFixed(2) + " USD";

      document.getElementById("bchdata").innerHTML = 
	      	   bchusd + "<br />";
};
