function randomQuote() {
    $.getJSON('https://api.alexx.lol/random/quote', function (data) {
        // JSON result in `data` variable
        console.log(data)
        document.getElementById("quote-show").innerHTML = data;
        let url = 'https://example.com';


    });
}