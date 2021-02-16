// When page fully loads get quotes
$(function () {

    getQuotes()
    
    // When new quote is clicked, change  colors and load new quote from API
    $('#new-quote').click(function () { 
        getQuotes()
        
        var color = Math.floor(Math.random() * colors.length);
        $('html body').animate({backgroundColor: colors[color]},1050).removeClass('bg-success');
        $('#text, #author').animate({opacity: 0,color: colors[color]}, 350, function() {
            $(this).animate({opacity: 1 },700)})
        $('#tweet-quote, #new-quote').animate({backgroundColor: colors[color], color: '#fff'},475).removeClass('btn-success');
    });
});


// Get quote from Quotes API
function getQuotes() {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://quotes15.p.rapidapi.com/quotes/random/",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "544332e38dmsh8690b8df0f05c09p17a33cjsn2152acc0d7d5",
            "x-rapidapi-host": "quotes15.p.rapidapi.com"
        }
    };

    $.ajax(settings).done(function (response) {
        let quote = response.content;
        let author = response.originator.name;
        let link = 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + quote + '" ' + '\n- ' + author)
        $('#text').text('"' + quote + '"')
        $('#author').html('- ' + author)
        $('#tweet-quote').attr('href', link);
    });
}

var colors = [
    '#0d6efd',
    '#6610f2',
    '#6f42c1',
    '#d63384',
    '#198754',
    '#dc3545',
    '#fd7e14',
    '#0dcaf0',
    '#adb5bd',
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#472E32',
    '#BDBB99',
    '#77B1A9'
]