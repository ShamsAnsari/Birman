function randomQuote() {
    $.getJSON('https://api.alexx.lol/random/quote'), function (data) {
        console.log(data)
        document.getElementById("quote-show").innerHTML = data;


      
    }


}